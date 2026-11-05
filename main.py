import os
import sys
import datetime
import pandas as pd
import openpyxl
import tkinter as tk
from tkinter import ttk, messagebox

# ---------------------------------------------------------
# 1. 動態路徑與 Config 載入
# ---------------------------------------------------------
def get_exe_dir():
    if getattr(sys, 'frozen', False):
        return os.path.dirname(sys.executable)
    return os.path.dirname(os.path.abspath(__file__))

EXE_DIR = get_exe_dir()
CONFIG_FILE = os.path.join(EXE_DIR, "config.txt")

def load_config():
    config = {
        "MATERIAL_DB": "Material_Database.xlsx",
        "PAID_BY_DB": "PaidBy_Database.xlsx",
        "TEMPLATE_PATH": "templates/CSG.001-PUR Purchase Requistion Form 物料申請表 06.2026 1.xlsx",
        "OUTPUT_DIR": "Generated_PR_Forms"
    }
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    config[k.strip()] = v.strip()
    return config

config = load_config()
material_db_path = os.path.join(EXE_DIR, config["MATERIAL_DB"])
paid_by_db_path = os.path.join(EXE_DIR, config["PAID_BY_DB"])
template_path = os.path.join(EXE_DIR, config["TEMPLATE_PATH"])
output_dir = os.path.join(EXE_DIR, config["OUTPUT_DIR"])

os.makedirs(output_dir, exist_ok=True)

# ---------------------------------------------------------
# 2. 讀取 Excel Database 資料
# ---------------------------------------------------------
def load_excel_list(file_path, column_name):
    try:
        if os.path.exists(file_path):
            df = pd.read_excel(file_path)
            if column_name in df.columns:
                return df[column_name].dropna().astype(str).tolist(), df
        return [], pd.DataFrame()
    except Exception as e:
        print(f"無法載入 {file_path}: {e}")
        return [], pd.DataFrame()

material_options, df_materials = load_excel_list(material_db_path, "Material Name")
paid_by_options, _ = load_excel_list(paid_by_db_path, "Paid By")

# ---------------------------------------------------------
# 3. GUI 主介面
# ---------------------------------------------------------
root = tk.Tk()
root.title("CSG 物料申請表 (PR) 生成系統")
root.geometry("850x650")

# --- 表頭區域 (Header) ---
header_frame = tk.LabelFrame(root, text="表頭基本資料", font=("微軟正黑體", 10, "bold"), padx=10, pady=10)
header_frame.pack(fill="x", padx=15, pady=5)

tk.Label(header_frame, text="申購日期:").grid(row=0, column=0, sticky="e")
entry_date = tk.Entry(header_frame, width=18)
entry_date.grid(row=0, column=1, padx=5, pady=3)
entry_date.insert(0, datetime.date.today().strftime("%Y-%m-%d"))

tk.Label(header_frame, text="申購編號:").grid(row=0, column=2, sticky="e")
entry_pr_no = tk.Entry(header_frame, width=18)
entry_pr_no.grid(row=0, column=3, padx=5, pady=3)

tk.Label(header_frame, text="申購部門:").grid(row=1, column=0, sticky="e")
entry_dept = tk.Entry(header_frame, width=18)
entry_dept.grid(row=1, column=1, padx=5, pady=3)

tk.Label(header_frame, text="申請人/電話:").grid(row=1, column=2, sticky="e")
entry_applicant = tk.Entry(header_frame, width=18)
entry_applicant.grid(row=1, column=3, padx=5, pady=3)

tk.Label(header_frame, text="項目資付人/種類:").grid(row=2, column=0, sticky="e")
combo_paid_by = ttk.Combobox(header_frame, values=paid_by_options, state="readonly", width=16)
combo_paid_by.grid(row=2, column=1, padx=5, pady=3)
if paid_by_options:
    combo_paid_by.current(0)

tk.Label(header_frame, text="送貨地點:").grid(row=2, column=2, sticky="e")
entry_delivery = tk.Entry(header_frame, width=18)
entry_delivery.grid(row=2, column=3, padx=5, pady=3)

# --- 物品明細輸入區域 (Item Entry) ---
item_frame = tk.LabelFrame(root, text="新增物品明細", font=("微軟正黑體", 10, "bold"), padx=10, pady=10)
item_frame.pack(fill="x", padx=15, pady=5)

tk.Label(item_frame, text="選擇物料:").grid(row=0, column=0, sticky="e")
combo_item = ttk.Combobox(item_frame, values=material_options, width=25)
combo_item.grid(row=0, column=1, padx=5, pady=3)

tk.Label(item_frame, text="物料號碼:").grid(row=0, column=2, sticky="e")
entry_item_code = tk.Entry(item_frame, width=12)
entry_item_code.grid(row=0, column=3, padx=5, pady=3)

tk.Label(item_frame, text="單位:").grid(row=0, column=4, sticky="e")
entry_unit = tk.Entry(item_frame, width=8)
entry_unit.grid(row=0, column=5, padx=5, pady=3)

tk.Label(item_frame, text="申購數量:").grid(row=1, column=0, sticky="e")
entry_qty = tk.Entry(item_frame, width=10)
entry_qty.grid(row=1, column=1, padx=5, pady=3, sticky="w")

tk.Label(item_frame, text="預算單價($):").grid(row=1, column=2, sticky="e")
entry_price = tk.Entry(item_frame, width=12)
entry_price.grid(row=1, column=3, padx=5, pady=3)

# 物料下拉選單連動事件
def on_material_selected(event):
    selected_name = combo_item.get()
    if not df_materials.empty:
        row = df_materials[df_materials["Material Name"] == selected_name]
        if not row.empty:
            code = str(row.iloc[0].get("Material Code", ""))
            unit = str(row.iloc[0].get("Unit", ""))
            price = str(row.iloc[0].get("UnitPrice", ""))
            entry_item_code.delete(0, tk.END)
            entry_item_code.insert(0, code)
            entry_unit.delete(0, tk.END)
            entry_unit.insert(0, unit)
            entry_price.delete(0, tk.END)
            entry_price.insert(0, price)

combo_item.bind("<<ComboboxSelected>>", on_material_selected)

# --- Treeview 清單 ---
table_frame = tk.Frame(root)
table_frame.pack(fill="both", expand=True, padx=15, pady=5)

columns = ("num", "name", "code", "qty", "unit", "price", "total")
tree = ttk.Treeview(table_frame, columns=columns, show="headings", height=6)

tree.heading("num", text="#")
tree.column("num", width=30, anchor="center")
tree.heading("name", text="物料名稱")
tree.column("name", width=200)
tree.heading("code", text="物料號碼")
tree.column("code", width=100)
tree.heading("qty", text="數量")
tree.column("qty", width=60, anchor="center")
tree.heading("unit", text="單位")
tree.column("unit", width=60, anchor="center")
tree.heading("price", text="單價($)")
tree.column("price", width=80, anchor="e")
tree.heading("total", text="總金額($)")
tree.column("total", width=90, anchor="e")

tree.pack(side="left", fill="both", expand=True)

item_list_data = []

def add_item():
    name = combo_item.get().strip()
    code = entry_item_code.get().strip()
    unit = entry_unit.get().strip()
    try:
        qty = float(entry_qty.get().strip())
        price = float(entry_price.get().strip())
    except ValueError:
        messagebox.showwarning("輸入錯誤", "請輸入有效的數字 (數量與單價)")
        return

    if not name:
        messagebox.showwarning("警告", "請輸入或選擇物料名稱！")
        return

    total = qty * price
    num = len(item_list_data) + 1

    item = {"num": num, "name": name, "code": code, "qty": qty, "unit": unit, "price": price, "total": total}
    item_list_data.append(item)
    tree.insert("", "end", values=(num, name, code, qty, unit, f"${price:.2f}", f"${total:.2f}"))

    combo_item.set("")
    entry_item_code.delete(0, tk.END)
    entry_qty.delete(0, tk.END)
    entry_unit.delete(0, tk.END)
    entry_price.delete(0, tk.END)

btn_add = tk.Button(item_frame, text="加入項目", bg="#4CAF50", fg="white",
                    font=("微軟正黑體", 10, "bold"), command=add_item)
btn_add.grid(row=1, column=4, columnspan=2, padx=10, pady=3, sticky="we")

# ---------------------------------------------------------
# 4. 生成 Excel 報表邏輯
# ---------------------------------------------------------
def generate_pr_excel():
    if not item_list_data:
        messagebox.showwarning("警告", "請至少加入一項物料明細！")
        return

    if not os.path.exists(template_path):
        messagebox.showerror("錯誤", f"找不到 Excel 範本檔：\n{template_path}")
        return

    try:
        wb = openpyxl.load_workbook(template_path)
        ws = wb.active

        # 填寫表頭 (根據範本實際合併儲存格位置)
        ws['C6'] = entry_date.get()        # 申購日期
        ws['L6'] = entry_pr_no.get()       # 申購編號
        ws['C7'] = entry_dept.get()        # 申購部門
        ws['C8'] = entry_applicant.get()   # 申請人/電話
        ws['C9'] = combo_paid_by.get()     # 項目資付人/種類
        ws['L8'] = entry_delivery.get()    # 送貨地點

        # 填寫物品明細 (從 Row 15 開始)
        # 範本欄位: A=#, B=物料種類, C=物料號碼, D-E=申購項目名稱,
        #           H=數量, I=單位, N=預算單價, O=申購總金額
        start_row = 15
        for idx, item in enumerate(item_list_data):
            curr_row = start_row + idx
            ws.cell(row=curr_row, column=1, value=item["num"])   # A: 項目編號
            ws.cell(row=curr_row, column=4, value=item["name"])  # D: 申購項目名稱
            ws.cell(row=curr_row, column=3, value=item["code"])  # C: 物料號碼
            ws.cell(row=curr_row, column=8, value=item["qty"])   # H: 數量
            ws.cell(row=curr_row, column=9, value=item["unit"])  # I: 單位
            ws.cell(row=curr_row, column=14, value=item["price"]) # N: 預算單價
            ws.cell(row=curr_row, column=15, value=item["total"]) # O: 申購總金額

        pr_no = entry_pr_no.get().strip() or "DRAFT"
        output_filename = f"PR_{pr_no}_{datetime.date.today().strftime('%Y%m%d')}.xlsx"
        save_path = os.path.join(output_dir, output_filename)

        wb.save(save_path)
        messagebox.showinfo("成功", f"PR 申請表已成功匯出至：\n{save_path}")

    except Exception as e:
        messagebox.showerror("匯出失敗", f"處理 Excel 時發生錯誤：\n{str(e)}")

btn_generate = tk.Button(root, text="🚀 生成 CSG PR Excel 申請表", bg="#008CBA", fg="white",
                         font=("微軟正黑體", 12, "bold"), command=generate_pr_excel)
btn_generate.pack(fill="x", padx=15, pady=10)

root.mainloop()