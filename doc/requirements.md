# 九龍城 MONDAY BEER & BASKETBALL 戰術板 — 需求文件

> 本文件依 `.clinerules/requirement_tracking.md` 規範撰寫：User Story → 需求（FR / NFR / C / AC）→ RTM。
> 對應實作：專案根目錄的單檔 `index.html`（無建置步驟，可直接雙擊開啟或部署到任何靜態空間）。

---

## 📖 User Story

### US-101 教練畫戰術

**As a** 球隊教練（coach），**I want** 在半場球場上排出 5 對 5 陣型並畫出切入／傳球／運球／擋拆路線，**so that** 練球前可以把進攻套路講清楚，不用每次都在白板上重畫。

### US-102 球員看動畫

**As a** 球員（player），**I want** 用手機或電腦切換步驟並播放動畫，**so that** 我可以自己看懂跑位順序，不必等教練在場邊解釋。

### US-103 分享到群組

**As a** 隊務，**I want** 把整套戰術輸出成 GIF，**so that** 可以直接貼到 WhatsApp 群組，讓沒到場的隊友也能複習。

### US-104 保存與重用

**As a** 教練，**I want** 把排好的戰術存起來並隨時載入，**so that** 之後可以累積成球隊的戰術本（playbook）。

### US-105 快速調閱戰術

**As a** 球員，**I want** 在球場左側直接看到球隊的戰術清單並點一下播放，**so that** 練球時不用開視窗、翻選單就能照著跑。

### US-106 反覆練同一個套路

**As a** 教練，**I want** 讓動畫一直循環播放、隨時可以中止，**so that** 球員可以連續看好幾遍，不用每次停下來再按播放。

### US-107 派名單上的隊友上場

**As a** 教練，**I want** 從 18 人名單點背號把隊友放上場，球上同時顯示背號與名字，**so that** 畫戰術時看得到「這是誰」，而不是抽象的 1～5 號。

### US-108 一眼認出這是我們的球場板

**As a** 教練，**I want** 打開就看到球隊隊徽，而且球場比例、三分線、禁區與 FIBA 真實球場一致，**so that** 講戰術時不會被「比例怪怪的」球場誤導，投影給球員看也有專業感。

### US-109 遠處也看得見誰是誰

**As a** 球員，**I want** 場上球員的圓圈更大、背號與名字更清楚，**so that** 用手機看或投影在球場邊時，不用瞇眼就知道哪個點是我。

### US-110 一鍵排好防守陣型

**As a** 教練，**I want** 用一個按鈕把 X1–X5 排成 2-1-2／2-3／3-2 聯防或人盯人，**so that** 我可以直接在任何進攻套路下面疊一層防守，不用每次手動拉五個點。

### US-111 幫戰術取名、改名、刪掉

**As a** 教練，**I want** 儲存時替戰術取名，之後在左側手冊直接改名或刪除，**so that** 戰術本不會變成一堆「未命名戰術」，也清得掉練完就淘汰的舊套路。

### US-112 一眼看懂「現在發生什麼」

**As a** 球員，**I want** 播放時持球的人會發光、跑動會留下殘影、畫面上方有「機會」大字提示，**so that** 我不用聽教練解釋也知道球在哪、誰在跑、這一步的目的。

### US-113 直接套用經典戰術

**As a** 教練，**I want** 打開手冊就能看到 13 套分成四大類（3／3／3／4）的經典戰術，點一下即載入 4 個步驟，**so that** 我不用每次從空白球場開始畫。

> **狀態：已由 US-124 取代（2026-11-05）** — 手冊精簡為 3 分類 7 套（破 2-1-2 2／破 3-2 2／底線開球 3），見 FR-160。

### US-114 用手機在場邊看戰術

**As a** 球員，**I want** 在手機上看到完整球場、可左右滑的步驟縮圖與每步解說卡，戰術手冊與工具列用抽屜開關，**so that** 我站在場邊也能單手操作、看得清楚。

### US-115 點一下就看到球在跑

**As a** 教練，**I want** 在戰術手冊／我的戰術點任一套就自動開始循環播放，**so that** 講解時不用再另外找「播放動畫」按鈕，也不會講到一半停住。

### US-116 講解時把工具列收起來

**As a** 教練，**I want** 講解時把右側工具列收合，球場自動放大並居中，要換人／畫線時再展開，**so that** 投影或大螢幕上球場看得更清楚，球員不會被一排按鈕分心。

### US-117 一眼知道哪個位置在守

**As a** 球員，**I want** 場上防守者直接標 PG／SG／SF／PF／C，**so that** 我不用背「X1 是控球、X4 是大前鋒」，看一眼就知道自己守哪個位置。

### US-118 防守會跟著球移動

**As a** 教練，**I want** 防守陣型會隨球的位置自動輪轉、就近關門，**so that** 講聯防時看到的是「活的防守」，而不是五個固定不動的點。

### US-119 排出自己的一套防守

**As a** 教練，**I want** 把五個防守者拉到任何位置後按「自訂防守」記住，**so that** 遇到對手特殊打法時可以擺出課本上沒有的陣型。

### US-120 打開就看到隊徽

**As a** 教練，**I want** 球場中央有淡淡的球隊隊徽浮水印，**so that** 投影或匯出的圖一眼就認出是九龍城的戰術，但不妨礙看路線。

> **狀態：已於 2026-11-05 撤銷（Superseded）** — 球場浮水印（隊徽底圖 ＋ 地板 `MONDAY` / `BEER & BASKETBALL · 九龍城` 文字）全部移除，球場改為乾淨紙白漸層；隊徽只保留在首頁與頂部品牌區。見 FR-156。

### US-121 匯出的檔案叫得出名字

**As a** 隊務，**I want** 匯出的 GIF 檔名就是戰術名稱，**so that** 傳到群組後不用再一個一個改名。

### US-122 進站先選身分

**As a** 球員，**I want** 打開網站先看到一個歡迎首頁、選「我是球員」就直接進站看戰術，**so that** 我不用先搞清楚那些教練工具在哪裡，也不會誤觸把戰術改壞。

> **（US-133 更新）** 球員進站後預設仍是唯讀，但已可主動按「＋ 新增戰術」進入繪製模式自己畫一套（提案制，見 US-133／US-134），不再被要求輸入教練密碼。

### US-123 教練身分先過密碼

**As a** 教練，**I want** 在首頁選「我是教練」時才跳密碼框，**so that** 只有我拿得到編輯工具，隊友點進來永遠是唯讀。

### US-124 手冊只留我們真正會用的戰術

**As a** 教練，**I want** 經典戰術只有「破 2-1-2」「破 3-2」「底線開球」三類共 7 套，**so that** 場邊講戰術時不用在長長的名單裡找，講的都是我們真的會打的東西。

### US-125 名單照背號排、按位置找人

**As a** 教練，**I want** 名單按背號由小到大排好，並能一鍵只看後衛／前鋒／中前鋒，**so that** 調度時三秒內就找到要換的那個人。

### US-126 場邊單手就能開一套新戰術

**As a** 教練，**I want** 手機／平板上少掉用不到的鍵盤快捷鍵說明，並在戰術手冊最上方直接有「➕ 新增戰術」與名稱輸入框，**so that** 場邊臨時想到的套路可以馬上開一張乾淨的戰術板來畫，不必先找「重設球場」或拜託別人幫我清畫面。

### US-127 拖曳就算完成記錄（直覺拖曳記錄模式）

**As a** 教練，**I want** 直接把球員跟球拖到我要的位置，畫面就自動把「怎麼跑、怎麼傳」記成路線，**so that** 我一邊講給球員聽、戰術板就一邊畫好了，不必再切工具一條一條補線。

**狀態：已實作（2026-11-05）** — 拖曳球員＝自動軌跡（持球者帶球運球）、拖曳籃球到隊友身上＝傳球（並同步下一步持球者）、「＋ 新增步驟」不繼承自動軌跡線，見 FR-169～FR-176。

### US-128 側欄只留真正會用的卡片（移除快捷鍵說明）

**As a** 教練，**I want** 右側工具列不要再放那張「快捷鍵 SHORTCUTS」說明卡，**so that** 在筆電與平板上都能少滑一段、把垂直空間留給真正要操作的按鈕。

**狀態：已實作（2026-11-05）** — `<section class="panel panel-tips">` 整塊自原始碼刪除（連同 `kbd` 樣式與 `.panel-tips` CSS／媒體查詢），不是用 CSS 隱藏；鍵盤功能本身不受影響，見 FR-177、FR-178。

### US-129 手機上就像一套專業運動 App

**As a** 球員／教練，**I want** 手機打開就是「球場滿版 → 單一步驟控制列 → 教練工具從底部滑出」的乾淨版面，**so that** 我不會在同一頁看到兩套步驟控制、也不會被抽屜蓋住球場，站場邊單手操作時一眼就知道下一步要按哪裡。

**狀態：已實作（2026-11-06，US-131 再優化）** — ≤767px 重排為 Header 44px → 球場 100vw（忠實比例、不裁切、無圓角）→ **球場正下方一張白底控制卡**（步驟說明＋兩欄步驟鈕＋播放列＋工具／滿版儲存，卡片一路延伸到螢幕底）；戰術手冊改為 **78dvh 大抽屜＋分類→子頁面兩層導覽**，教練工具維持依球場下緣限高的 Bottom Sheet（把手、下滑關閉）；提示訊息一次一則、1.5 秒淡出。`.mobile-dock`（步驟縮圖＋解說卡＋防守快捷 chip）與 `#lockBadge` 整組移除。桌面（>1100px）與平板（768–1100px）版面完全未動，見 FR-189～FR-198、FR-207～FR-214。**（US-132 再調整：手機步驟區改為單欄長卡片、`#stepInfo` 移除，見 FR-215～FR-221）**

### US-130 在電腦上也用「手機視角」檢查／示範

**As a** 教練，**I want** 在電腦瀏覽器打開時，預設就看到裝在手機框裡的手機版介面（而不是大螢幕三欄版面），**so that** 我可以直接對照球員手機上看到的畫面來講解與驗收，也不必每次都開 DevTools 切裝置模擬。

**狀態：已實作（2026-11-06）** — 桌面（≥768px 且以滑鼠／觸控板為主）預設把整個 App 裝進 390×844 的裝置框：深色底 `#1e293b`、圓角邊框、陰影，框內以同源 iframe 載入同一份 `index.html?phone=1`（因此框內是**真實**的 390px viewport，`dvh`、媒體查詢、`matchMedia` 全部按手機判定）；真機（<768px、iPad 等觸控裝置）與 `?full=1` 完全解除外框、維持 100vw×100vh 全螢幕 App 模式。見 FR-200～FR-206。

### US-131 手機底部只有一張卡片、手冊直接看清單

**As a** 站場邊的教練，**I want** 手機下方的步驟說明與按鈕合成一張白卡、戰術手冊一打開就看得到完整清單（分類點進去再選戰術），提示訊息只跳一則就自己消失，**so that** 我不會看到球場與按鈕之間那條灰縫、也不用在小抽屜裡擠著找戰術，更不會被連續跳出的提示字擋住畫面。

**狀態：已實作（2026-11-06）** — ① `#stepInfo` 從 `.board-panel` 移入 `.stepbar`，`.stage` 移除灰底漸層、`.stepbar` 改白底圓角卡片並長到螢幕底（量測間隙 0px）；② 手冊 `.playbook` 固定 78dvh、新增 `.pb-views`／`#pbSubView` 兩層（分類列 `›` → 子頁面 `‹ 返回分類`），桌機 Accordion 不動；③ `toast()` 改單節點＋1500ms，並刪掉 7 則會遮畫面的噪音提示。見 FR-207～FR-214、NFR-126、C-116、AC-155～AC-160。
**後續調整（US-132）**：`#stepInfo` 資訊列已整組移除，步驟區改為單欄長卡片（名稱＋說明＋機會標籤都在卡片上），見 FR-215～FR-221。


### US-132 手機步驟改成一張張「可讀的長卡片」

**As a** 站場邊的球員／教練，**I want** 手機下方的每個步驟都是一整條卡片，上面就寫著步驟名稱與這一步的跑位說明，而不是兩欄只能塞四個字的方塊鈕，**so that** 我不用先點下去才知道那一步要幹嘛，也不會在同一個畫面看到「上方說明欄＋下方按鈕」兩套重複的步驟資訊。

**狀態：已實作（2026-11-06）** — ① 手機 `.steps` 由「兩欄 chip 格」改為**單欄縱向長卡片清單**：每張卡＝`①`編號徽章＋步驟名稱＋機會標籤＋跑位說明（12px、最多 2 行）＋右側 `›` 指示；② 選取中的卡片改為**磚紅品牌漸層底＋白字**，播放中右側指示改為 `●` 脈動；③ 卡片 `:active{transform:scale(.98)}` 提供按壓回饋，卡片有空間時自動長高填滿（單張上限 118px）、空間不足時清單自己捲動並在底部做 20px 淡出；④ 重複的 `#stepInfo` 資訊列整組移除（`renderMobileStepInfo()` 一併刪除）；⑤ toaster 由 `--stepbar-h` 動態貼齊卡片上緣。桌面（>1100px）與平板（768–1100px）以 `display:contents`／`display:none` 完全保持原膠囊外觀。見 FR-215～FR-221、NFR-127、C-117、AC-161～AC-166。


### US-133 球員不必有教練帳號，也能自己畫一套戰術

**As a** 隊上的球員，**I want** 不用先拿到教練密碼就能開一套新戰術、拖曳隊友、畫跑位線並存檔，**so that** 練球時想到的走法可以當場記下來交給教練，而不是回家用紙筆重畫一遍。

**狀態：已實作（2026-11-06）** — ① 權限拆成兩把：`canEdit()`（能不能在球場上動手＝教練模式或「繪製模式」）與 `isCoach()`（批核、改別人的東西等特權），狀態放在 `state.editing`＋`body[data-edit]`；② 右上角「＋ 新增戰術」對所有身分開放，按下去直接進入繪製模式（免密碼、免帳號），手機還會自動收起手冊把球場露出來；③ 唯讀狀態下點節點鈕／線條工具／「儲存此步驟」改成一句「需要繪製模式…」的提示（`needDrawMode()`），**不會再跳教練密碼框**；④ 手機控制卡多一列輕量列「＋ 加步驟／💾 儲存」，繪製中才出現，不佔掉底部 4 鍵。見 FR-222～FR-226、NFR-128、C-118、AC-167～AC-169。

### US-134 球員的改動變成「提案」，教練批核才進官方手冊

**As a** 教練，**I want** 球員自己改的版本先標成「未批核提案」，等我按一下「✅ 批准」（或改完再批核）才進官方手冊，**so that** 手冊裡的戰術永遠是我認可的版本，而球員想到的變化也不會被擋在門外。

**狀態：已實作（2026-11-06）** — ① 儲存對話框可切換「🏃 我是球員／📋 我是教練」：球員選名單上的自己（提案人記成 `#0 陳生`）→ 存成「未批核」；教練輸入暗號（預設 `1234`；已在教練模式免輸入）→ 直接「已批核」；② 批核狀態放在 `meta.status`（`pending`／`approved`）＋`meta.authorLabel`／`approvedAt`，Supabase **不需 migration**，舊紀錄沒有這個欄位一律視為已批核；③ 手冊清單未批核的提案會標「未批核」＋提案人，並沉到清單最後；④ 球員對既有戰術按「✏️ 修改提案」時會**先脫離原本那筆紀錄**（`tacticId = null`、名稱自動加「 提案」），存檔是新增一筆，**絕對不會蓋掉教練的正式版本**；⑤ 教練看到未批核時，手機輕量列換成「✅ 批准」（一鍵改狀態）與「✏️ 修改後批核」（改完按儲存就變已批核、原紀錄原地更新、不新增重複紀錄）。見 FR-227～FR-233、NFR-129、C-119、AC-170～AC-174。

### US-135 一鍵把戰術分享到群組

**As a** 球員／教練，**I want** 按一下「💬 分享」就把整套戰術（含所有步驟的 GIF）丟進 WhatsApp 群組，**so that** 隊友不用開網站也看得到跑位，我不用先存檔、開相簿、再一張一張找圖。

**狀態：已實作（2026-11-06）** — ① GIF 擷取抽成 `captureGif()`，`⬇ 導出 GIF` 與 `💬 分享` 共用同一份結果（不重複擷取與編碼）；② 手機支援 `navigator.share({ files })` 時直接叫出系統分享面板（WhatsApp／IG 可收到真正的 GIF 檔），使用者取消不算錯誤；③ 桌機或不支援時退回「下載 GIF ＋ 開 `wa.me` 對話」並帶好「🏀 戰術名稱／N 個步驟｜MONDAY BEER & BASKETBALL 戰術板」文案；④ 手機底部第 4 鍵＝`💬 分享`，`⬇ 儲存 GIF` 移到手冊抽屜底部（底部只留 4 顆均分鍵）。見 FR-234～FR-235、NFR-130、C-120、AC-175～AC-176。

---

## 📝 Requirements

### US-101（球場與陣型）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-101 | Functional | 提供籃球半場畫布，含禁區、罰球圈、三分線（弧線＋底角）、免責區、籃板／籃框、中圈與地板浮水印**（地板浮水印已於 2026-11-05 移除，見 FR-159）** |
| FR-102 | Functional | 可加入 5 名進攻（1–5）、5 名防守（X1–X5）與 1 顆籃球；重複加入時自動選取既有節點並提示 |
| FR-103 | Functional | 提供 4 種戰術線條：切入（實線箭頭）、傳球（虛線＋空心箭頭）、運球（波浪線）、擋拆（T 字棒）；以滑鼠／手指拖曳繪製 |
| FR-104 | Functional | 球員與線條可選取、拖曳移動、用橡皮擦或 Del 刪除，並支援復原（Ctrl+Z，最多 40 步） |
| FR-105 | Functional | 可清除目前步驟的所有線條，或一鍵重設球場回預設 5 對 5 陣型（含二次確認） |

### US-102（多步驟與動畫）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-106 | Functional | 步驟（Frame）可新增（沿用目前畫面）、複製、刪除、雙擊重新命名、點擊切換 |
| FR-107 | Functional | 播放動畫：依序在步驟間以補間移動球員／籃球，舊線條淡出、新線條淡入；播放結束後回到原本檢視的步驟 |
| FR-108 | Functional | 步驟之間以 `nodeId` 為鍵對應同一位球員，缺少的節點不會造成錯誤 |

### US-103（匯出）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-109 | Functional | 匯出 GIF：每步驟停留影格＋每段過場 9 個補間影格，寬度 640px，附進度條與百分比 |
| FR-110 | Functional | 匯出 PNG：將目前步驟以 2 倍解析度輸出，方便截圖貼群組 |

### US-104（存檔）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-111 | Functional | 儲存戰術（名稱＋所有步驟）到 Supabase；未設定或失敗時自動回退 localStorage，並提示使用者 |
| FR-112 | Functional | 左側「戰術手冊」每一列可載入、改名（✎）與刪除（垃圾桶），標示每筆來源（CLOUD / LOCAL）與更新時間 |

### US-101～104（身分與操作輔助）

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-113 | Functional | 雙模式：球員模式（唯讀，可切換步驟／播放）與教練模式（全功能），教練模式以密碼 `coach888` 解鎖，解鎖狀態存於 sessionStorage；**【US-133 更新】球員不再完全唯讀**——可按「＋ 新增戰術」或「✏️ 修改提案」進入繪製模式（見 FR-222／FR-223／FR-230） |
| FR-114 | Functional | 鍵盤快捷鍵：`1`–`5` 加入進攻、`Shift+1`–`5` 加入防守、`B` 籃球、`V` 選取、`C/P/D/S` 線條、`E` 橡皮、`Del` 刪除、`Ctrl+Z` 復原、`Space` 播放／停止、`L` 循環播放、`Esc` 取消工具 |
| FR-115 | Functional | 首次開啟預載兩步示範戰術（起始陣型 → 擋拆切入），讓播放／匯出功能立即可試 |

### US-105～107（戰術手冊、循環播放、球員名單）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-121 | Functional | 球場左側常駐「戰術手冊」側欄（`aside.playbook`），列出所有已儲存戰術（名稱＋CLOUD/LOCAL＋更新時間），點一下即載入播放；提供手動重新整理鈕；目前載入的戰術以 `.is-active` 標示；無資料時顯示提示文字 |
| FR-122 | Functional | 循環播放開關（播放列的 `∞` 鈕／`L` 鍵，`aria-pressed` 與 `.is-active` 同步）：開啟後動畫在最後一步結束後自動重播（間隔 620ms）；播放中「播放動畫」變為「停止播放」，再按一下即中止並回到播放前檢視的步驟 |
| FR-123 | Functional | 內建 18 人球隊名單（背號＋姓名），右側面板點背號即派上場；場上球員圓圈上半顯示背號、下半顯示姓名；同一背號不會重複上場（改為選取既有節點）；名單身份（`rosterNo` / `playerName`）隨序列化保存，載入與 GIF 皆保留 |

### US-108～111（品牌、FIBA 球場、大節點、防守陣型、命名存檔）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-124 | Functional | 頂部品牌列顯示球隊隊徽圖片（與 `index.html` 同目錄的 `WhatsApp Image 2026-11-05 at 11.27.43 AM.jpeg`），以 46×46（≤720px 為 38×38）圓形裁切呈現；圖片載入失敗時自動退回內嵌 SVG 獎章，不留空白 |
| FR-125 | Functional | 球場以 FIBA 標準尺寸重繪（`PX_PER_M = BASE_W / 15`，1px ≒ 1.5cm）：禁區 4.9m×5.8m、罰球圈 r=1.8m、三分線 r=6.75m（底角距邊線 0.9m、直線至 199px 後接弧）、衝撞區 r=1.25m、中圈 r=1.8m、籃板距底線 1.2m 寬 1.8m、籃框 1.575m；地板改為紙白漸層＋極淡木紋、深墨灰線、磚紅籃框與衝撞區、極淡收邊（淺色白板風，FR-129） |
| FR-126 | Functional | 球員節點放大：無名節點直徑 48px、有名節點 50px；背號字級 24/20/17（1／2／3 位數）、字重 800；姓名 12.5px 白色加陰影，超出圓寬時自動縮放，確保不撐大節點外框 |
| FR-127 | Functional | 右側「防守陣型」面板提供 4 個預設：2-1-2 聯防、2-3 聯防、3-2 聯防、人盯人；點擊即以 340ms 補間把五位防守者（顯示 `PG／SG／SF／PF／C`，內部 `x1`–`x5`）移到定位、標記 `.is-on`、寫入 `pushUndo()` 並存入目前步驟；人盯人依「自己與籃框之間、貼防 52px、最多前移 120px」即時計算 |
| FR-128 | Functional | 具名儲存：按「儲存戰術」開啟輕量命名對話框（預設名「新戰術 N」、未命名時自動編號、Esc／點背景取消）；左側戰術手冊每列提供 ✎ 改名與垃圾桶刪除（改名走同一對話框，刪除需二次確認）；改名會同步更新 localStorage 索引與紀錄（Supabase 走 `update`）；球員模式下這兩顆按鈕隱藏 |

### US-112～114（淺色白板風、特效、戰術庫、手機 RWD）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-129 | Functional | 全站淺色白板風：頁面底色 `#EBF1F6`（含磚紅／防守藍各 8% 的雙軸柔光）、面板白底、深墨文字 `#1F2A37`、灰線 `--line:#C9D6E2`；進攻＝磚紅 `#B4462F`、防守＝藍 `#2F6FA8`、強調＝橙 `#F37021`；`meta[name=theme-color]`、favicon 與所有 SVG 圖示同步改色 |
| FR-130 | Functional | 場上球員視覺：進攻為磚紅圓盤＋白框＋白字，防守為白底藍框＋藍字，圓內以深藍位置代號 `PG／SG／SF／PF／C`（兩字母 20px、單字母 `C` 24px、字重 800）取代舊版「✕」記號；記號畫在圓內，不改變節點邊界與座標（US-117） |
| FR-131 | Functional | 內建 `TACTIC_LIBRARY` 13 套經典戰術，分四大分類（擋拆系列／傳切走位／破聯防／快攻·底線發球）＝ 3／3／3／4 套；每套固定 4 個步驟，含步驟名、機會標籤（`cue`）、解說（`desc`）與線條；破聯防含「破 2-1-2」「破 3-2」「破 1-3-1」，快攻·底線發球含「三線快攻」與三套 BLOB（直線排開／盒子站位／底線電梯門）**（已由 FR-160 取代：3 分類 7 套，`pick`／`motion`／`transition` 已不存在）** |
| FR-132 | Functional | 戰術庫以座標資料描述，載入時用既有工廠（`createPlayer` / `createBall` / `buildLineObj`）即時生成，輸出格式與「儲存戰術」完全相同（5 攻＋5 守＋1 球＋線條），可直接播放、匯出 GIF／PNG；生成結果以 `LIB_CACHE` 快取 |
| FR-133 | Functional | 左側手冊上半部為「經典戰術」四組可摺疊分類（`<details>`，顯示套數），下半部為「我的戰術」；點任一項即載入 4 個步驟，`state.tacticId = 'lib:<key>'`、`state.tacticSource = 'library'`，載入不覆蓋原本已儲存的戰術 |
| FR-134 | Functional | 持球光暈：每 80ms 找出與球距離 < 70px 的最近進攻球員，套用橙色 `fabric.Shadow`（blur 9↔15 呼吸、alpha 0.5↔0.82）；換人持球即轉移、球旁邊沒人則移除；`prefers-reduced-motion` 時固定 blur 15 不呼吸 |
| FR-135 | Functional | 殘影軌跡：每次步驟補間對位移 > 32px 的節點畫「起點→終點」雙層虛線（外層粗低透明度光暈＋內層細實色；進攻磚紅、防守藍、球橙），隨補間淡入、結束後 260ms 淡出並自動移除；`prefers-reduced-motion` 時不產生 |
| FR-136 | Functional | 機會標籤：目前步驟的 `cue` 以 `.cue-tag` 顯示在球場右上（`aria-live="polite"`、pop-in 動畫），無 `cue` 時隱藏；`cue` / `desc` 一併寫入儲存檔並在載入時還原（舊檔缺欄位仍可載入） |
| FR-137 | Functional | 特效物件（`isTrail` / `isGlow`）與臨時附加的光暈陰影永不進入序列化；`applyMode()` 不會操作特效物件；GIF／PNG 匯出與「儲存此步驟」維持原行為 |
| FR-138 | Functional | 手機／平板（≤1100px）：球場單欄滿寬；戰術手冊改為左側抽屜（步驟列 `☰` 開關、`#pbScrim` 背幕、`#pbClose`／`Esc` 關閉）；教練工具列維持右側抽屜（`🛠` 開關，取代原本浮動鈕）；底部新增 `.mobile-dock`：4 顆防守陣型快捷 chip（教練模式）、可橫滑的步驟縮圖（迷你半球場 SVG）與步驟解說卡（名稱／機會標籤／解說），與 `renderStepUI()` 同步，點縮圖即切換步驟 |

### US-115～116（即點即播、側欄收合）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-139 | Functional | 從戰術手冊（經典戰術庫）或「我的戰術」載入任一套後，**自動開始播放**並預設開啟循環（`state.loop` 預設 `true`），免再按「播放動畫」；載入提示與播放狀態同步（`∞` 鈕亮起、播放鈕變「停止播放」） |
| FR-140 | Functional | 播放中再載入另一套時，先「真的停下」舊動畫（`stopPlayback()` 等 `playAnimation()` 的 `finally` 完成回位畫面）再載入新戰術並自動播放，不會兩段動畫交錯或卡住 |
| FR-141 | Functional | 自動播放的守門條件：`prefers-reduced-motion: reduce` 時只載入不自動播放（以 toast 說明）；只有 1 個步驟的戰術也不自動播放（提示可按「＋」新增下一步）；`state.exporting` 期間不載入 |
| FR-142 | Functional | 右側面板收斂為單一「防守與球 / DEFENSE & BALL」面板：X1–X5 ＋ 籃球共 6 顆節點鈕（3 欄 × 2 列、直徑上限 74px），並加註「進攻球員請由下方名單派上場」；原「進攻 1–5」節點鈕移除（改由 `#rosterGrid` 18 人名單派上場，`FR-123` 行為不變） |
| FR-143 | Functional | 桌面（>1100px）教練工具列可收合：`教練工具 TOOLS` 標題列右側 `›`（`#sideCollapse`）收起、右緣浮動 `‹`（`#sideExpand`，僅教練模式且收合時出現）展開；狀態存 `localStorage['mbab:sideCollapsed']`，下次進教練模式自動還原；`aria-expanded` 同步 |
| FR-144 | Functional | 收合後版面重算：`.stage` 第三軌 `--side-w` 由 `318px` → `0`（0.22s 過渡）、`body.side-collapsed .sidebar{display:none}`、隱藏球場下方提示、球場上限改以 `--board-h-chrome:226px` 重算，使球場自動變寬並在剩餘區域水平居中 |
| FR-145 | Functional | 播放狀態反映在提示文字（`updateHint()`）：播放中顯示「播放中：按『■ 停止播放』即可停止」，停止後回到教練／球員模式原本的提示 |
| FR-146 | Functional | 手機／平板（≤1100px）不受收合影響：`#sideCollapse`／`#sideExpand` 皆隱藏，沿用右側抽屜（`🛠`）＋背幕；`setSideCollapsed()` 在此寬度下直接忽略，切回球員模式不覆寫已記住的收合狀態 |

### US-117～121（防守代號、防守輪轉、自訂防守、隊徽浮水印、匯出檔名）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-147 | Functional | 防守節點圓內顯示位置代號（`PG` / `SG` / `SF` / `PF` / `C`，深藍 `#2F6FA8`、字重 800、兩字母 20px／單字母 `C` 24px），與進攻節點的背號＋姓名併存；右側「防守與球」節點鈕同步改為 PG／SG／SF／PF／C，程式內部 `nodeId`（`x1`–`x5`）與序列化格式不變，舊存檔照樣載入 |
| FR-148 | Functional | 防守輪轉 `deriveDefense(defKey, off, ball)`：以球的位置與五個防守基準點即時推導該步的防守座標——聯防（2-1-2／2-3／3-2）整組隨球水平滑動（位移量 `(球x − 基準x) × 0.22`，上限 ±92px）、縱向滑動（`× 0.16`，上限 ±70px；籃框側 `y < 260` 的兩人再乘 0.4，護框優先），並讓離持球者最近的防守者改成站在「持球者→籃框」連線上、貼防 56px；人盯人則對位各自的人（維持既有 `manToManSpot()` 的 52px 貼防）；戰術庫的 `zone212` / `zone32` 基準（`LIB_DEF`）一併納入 |
| FR-149 | Functional | 戰術庫每一步若未寫死 `def`，載入時自動以 `deriveDefense()` 產生防守位置；因此播放時防守會隨球在步驟間自然輪轉（沿用 §10 補間），不需為每一步手畫防守 |
| FR-150 | Functional | 「自訂防守」（`enableCustomDefense()`）：按下後把目前 5 個防守者座標存成自訂陣型並標記 `.is-on`，`state.customDefense = true`；之後拖曳防守者即時寫回目前步驟（`onNodeModified` → `saveCurrentFrame()`），重新套用時回到記住的位置；套用其他預設時 `state.customDefense` 自動取消 |
| FR-151 | Functional | 預設球場直接以 2-1-2 開場（`markDefensePreset('212')`），球員名單／節點鈕與防守陣型面板狀態一致 |
| FR-152 | Functional | 球場中央內嵌半透明隊徽浮水印（`LOGO_DATA_URI` 為 base64 data URI、`CREST`＝寬 520px／透明度 0.18、`makeCrest()` 生成 `courtGroup` 內圖片、`refreshCourtCrest()` 於載入後刷新），不進入序列化、`applyMode()` 不觸碰、可被 `toDataURL()` 匯出（data URI 不污染 canvas，`file://` 亦可匯出 GIF／PNG）**（已撤銷：球場水印已移除，見 FR-159）** |
| FR-153 | Functional | 匯出檔名取自戰術名稱（`tacticFileName(ext)`）：把 `·：／\｜?*"<>《》〈〉,，、;；!！` 與空白換成安全字元（空白直接移除、`_` 收斂並修剪首尾、長度上限 60），空名稱回退 `MondayBeer_Tactic`，GIF 下載與提示訊息一致 |
| FR-154 | Functional | 圖層順序：防守球員先繪、進攻球員後繪，重疊時進攻（持球者）永遠在上層，投影時看得見持球人 |
| FR-155 | Functional | 球停在持球者身上時以 `ballDisplayPoint()` 往右下偏 (22, 18) 顯示，避免球遮住背號；偏移量 < `GLOW_REACH`（70px），持球判定與光暈行為不變 |

### US-122～125（開場首頁、球場去水印、戰術庫精簡、側欄重排、名單排序）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-156 | Functional | 開場歡迎首頁（`<section id="splash">`，`z-index:76`）：整頁覆蓋 `.app`，內容為隊徽圓形頭像（外部 JPEG `./WhatsApp Image …jpeg`，`onerror` 時退回 `MB` 字樣）、`九龍城` 眉標、`MONDAY BEER & BASKETBALL` 主標、`官方球隊戰術手冊 · TACTICAL PLAYBOOK` 副標、兩張身分卡（`#enterPlayer` 球員／`#enterCoach` 教練）、底部提示；開啟時 `body.splash-open` 讓 `.app` 不吃滑鼠事件 |
| FR-157 | Functional | 身分流轉：`enterPlayerMode()` = `hideSplash()` ＋ 球員模式（若原為教練則 `exitCoachMode()`）；`enterCoachFromSplash()` = `requestCoachMode()`，密碼正確後由 `enterCoachMode()` 內 `hideSplash()` 關閉首頁（取消密碼則首頁仍在）；`backToSplash()` 由頂部 `#btnHome`（⎋ 切換身分）觸發，播放／匯出中先擋下並提示 |
| FR-158 | Functional | 首頁開啟期間 `handleKeydown()` 只放行 `Esc`（用來關掉浮在上面的密碼框），其餘 `Space`／`L`／`1`–`5`／`Delete` 等球場快捷鍵一律 return 不穿透；`boot()` 第一行呼叫 `showSplash()`，重新整理必定從首頁開始（教練解鎖仍以 `sessionStorage` 為準，未登出時選教練不再問密碼） |
| FR-159 | Functional | 球場移除全部浮水印：刪除 `LOGO_DATA_URI`（base64 隊徽）、`CREST` 常數、`buildCrest()` / `makeCrest()` / `requestCrestImage()` / `refreshCourtCrest()`、地板文字 `markA`（`MONDAY`）與 `markB`（`BEER & BASKETBALL · 九龍城`）；球場底層漸層改為 `#F7FAFD → #EDF3F8 → #EBF1F6`，木紋與縫線維持 3%～5.5% 極淡紋理 |
| FR-160 | Functional | 經典戰術精簡為 3 分類 7 套（`LIB_CATEGORIES` = `beat212` 破 2-1-2 聯防／`beat32` 破 3-2 聯防／`blob` 底線開球）：破 2-1-2 = `beat212-elbow`（雙肘區策應）、`beat212-highlow`（高低位內傳內）；破 3-2 = `beat32-skip`（底角 Skip Pass）、`beat32-shortcorner`（短角區突擊）；底線開球 = `blob-stack`（直線排開 Stack）、`blob-box`（盒子站位 Box）、`blob-elevator`（電梯門 Elevator）；每套仍為 4 步、每步 5 攻 5 守 1 球，`#pbLibCount` 動態顯示「7 套」，手冊 `<details class="pb-cat">` 同步為 3 個 |
| FR-161 | Functional | 右側教練工具列重排為：①球員名單（含位置 chips）②防守陣型 ③戰術線條 ④動作 ⑤防守與球（`<details class="panel panel-collapse" id="defBallPanel">`，預設收合，`<summary>` 內用 `<span class="panel-title">` ＋ `.panel-sub`，展開箭頭 `▸`→`▾` 由 CSS 旋轉）；6 顆節點鈕（PG/SG/SF/PF/C＋球）位置與行為不變**（原第 ⑤ 項「快捷鍵」卡已整塊刪除，見 FR-177）** |
| FR-162 | Functional | 名單資料加 `pos`（`PG` / `PG/SG` / `SG` / `SG/SF` / `SF` / `SF/PF` / `PF` / `PF/C` / `C`），`buildRosterPanel()` 先以 `a.no - b.no` 升冪排序再渲染，按鈕第三行顯示位置（`<em>`，8.5px、防守藍） |
| FR-163 | Functional | 位置篩選 chips（`#posChips`，4 顆 ALL／PG·SG 後衛／SF·PF 前鋒／PF·C 中前鋒，`data-pos` ＋ `aria-pressed`）：`state.rosterFilter` 記錄目前篩選，`rosterMatchesFilter()` 以「位置字串 `/` 切開後與 chip 允許集合取交集」判定（可打多位置者會同時出現在相關分類），`syncPosChips()` 同步 `.is-on`，篩選後無球員時顯示「此位置暫無球員」 |

### US-126（手機隱藏快捷鍵卡、手冊「➕ 新增戰術」）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-164 | Functional | **（已撤銷：整張卡片已自原始碼刪除，改由 FR-177 取代）** 原條文：≤1100px 不顯示右側「快捷鍵 SHORTCUTS」卡片（`.panel-tips{display:none}`，不刪 DOM） |
| FR-165 | Functional | 左側戰術手冊頂部（`.pb-head` 與 `.pb-scroll` 之間）新增教練專用區塊 `.pb-new-row.coach-only`：`#pbNewTactic`（`➕ 新增戰術` ＋ `NEW TACTIC`）、`#pbNameInput`（`.pb-name-input`，`maxlength=60`、`placeholder`「請輸入戰術名稱」、`enterkeyhint="done"`、`autocomplete="off"`）、提示行 `.pb-name-hint`；`coach-only` 沿用既有 `body[data-mode="player"] .coach-only{display:none !important}` 規則，球員模式整區隱藏 |
| FR-166 | Functional | `newTactic()` 流程：**【US-133 更新】任何身分都可新增**（原本的 `isCoach()` 守門與 `requestCoachMode()` 密碼框已移除，改為直接進入「繪製模式」`state.editing = true`，見 FR-223）、播放／匯出中擋下並提示；`state.frames.length > 1` 或畫布上有自訂線條時先 `confirmDialog('新增戰術', …, '清空並新增')`（無未存內容則一鍵直接新增）；確認後清 `state.undo`、`clearBoardObjects()` → `addFormation()`（5 攻 5 守 1 球、防守預設 2-1-2）→ `state.frames` 重設成單一步驟「步驟 1」→ `tacticId = null`、`tacticName = ''`、`tacticSource = null` → `applyMode()`／`renderLibrary()`（清掉經典戰術的 `is-active`）／清 `#pbList .pb-item.is-active`／`renderStepUI()` → `focusTacticNameField()` |
| FR-167 | Functional | 名稱輸入框與 `state.tacticName` 雙向同步：`syncTacticNameField(force)` 在 `applyMode()`、`renderPlaybook()`、存檔成功後把 `state.tacticName` 寫回輸入框（`document.activeElement` 就是輸入框且非 `force` 時不覆寫，避免打一半被蓋掉）；`input` 事件即時寫入 `state.tacticName`；`Enter` 只 `blur()`（不存檔、不穿透球場快捷鍵）；「💾 儲存戰術」若輸入框已有名稱則直接 `saveTacticNamed(name)`（不跳命名彈窗），空白才走原本的 `promptText()` |
| FR-168 | Functional | 身分切換時重繪手冊：`enterCoachMode()` 與 `exitCoachMode()` 在 `renderStepUI()` 後呼叫 `renderPlaybook()`，讓「我的戰術」空清單文案立刻換成教練版（`尚無儲存的戰術，按上方「➕ 新增戰術」建立第一套。`）或球員版（`教練尚未發布戰術。`），不會停在切換前的文案 |

### US-127（直覺拖曳記錄模式）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-169 | Functional | 直覺拖曳記錄：教練在「選取」工具下拖曳任一球員／防守員／籃球，放開後自動寫回目前步驟（`bindCanvasEvents()` 綁 `object:moving` / `object:modified` → `onNodeMoving()` / `finalizeNodeDrag()`），不需再按「儲存此步驟」 |
| FR-170 | Functional | 持球者帶球運球：拖曳持球者（球距該球員 < `GLOW_REACH` 70px）時籃球即時跟著手移動，且**保留原本「球相對人」的偏移**（起手不跳位）；放開後自動生成波浪「運球」線。位移 < `DRAG_LINE_MIN`（34px）或 < `DRAG_EPS`（3px）不畫線，避免微調就冒出一條線 |
| FR-171 | Functional | 自動軌跡線型別：持球者→運球（orangeSoft 波浪）、其他進攻球員→切入（brick 實線箭頭）、防守員→防守移動（`def`，藍色實線箭頭，**不加入** `LINE_TOOLS` 手動工具列）、拖球到隊友身上→傳球（藍色虛線＋空心箭頭）；線兩端各縮 `LINE_TRIM`（28px；短距離按 `len×0.2` 比例縮小），不會壓在球員圓圈上 |
| FR-172 | Functional | 拖曳籃球＝傳球：拖球途中，`PASS_SNAP`（54px）內最近的進攻球員會亮起橙色虛線候選圈（`kind='ghost'`、`isPreview=true`，不入庫也不擋拖曳）；放開時——(a) 在候選圈內→球吸附到 `BALL_IN_HAND`（+22/+18）、生成傳球虛線並換人持球；(b) 空地→球留在原地（先 clamp 在球場內 18px）並提示「目前無人持球」；(c) 放回同一人手上→只吸附、不畫線 |
| FR-173 | Functional | 傳球自動同步下一步：若存在下一步，且該步的球仍「黏」在原本持球者手上（距舊持球者 ≤ `GLOW_REACH`），就把下一步的球移到新持球者手上（`syncBallToNextFrame()`）；若教練已在下一步把球移到別處（>70px）則不覆寫，尊重原本安排 |
| FR-174 | Functional | 「＋ 新增步驟」不繼承自動軌跡：`addStep()` 複製畫布時過濾 `autoLine === true` 的線（自動線代表「上一步怎麼走到這裡」），教練手畫的切入／傳球／擋拆線仍保留；`serializeCanvas()` 的 `toObject` 清單加入 `autoLine`，存檔／讀檔／undo 都保留此標記，舊存檔缺此欄位時視為手畫線 |
| FR-175 | Functional | 圖層與可抓性：自動線 `canvas.moveTo(line, 1)`（球場之上、球員之下）；籃球加一圈 +13px 的透明感應區（外觀不變，手指更好抓），所以教練永遠抓得到人、不會被線擋住 |
| FR-176 | Functional | 復原與守門：第一次真的移動（> `DRAG_EPS` 3px）時才把 `mouse:down` 當下的快照推入 undo（`Ctrl+Z` 可完整還原拖曳前位置，不因「先移動才觸發事件」而存到移動後的畫面）；球員模式、播放中、GIF 匯出中、非 `isCoach()` 時拖曳完全不生效（不畫線、不寫回、不動球） |
| NFR-120 | Non-Functional | 拖曳記錄為 O(物件數) 的同步計算（一次快照＋一次寫回），不新增 timer 或 rAF；事件只在 `bindCanvasEvents()` 綁一次，長時間連續拖曳不會累積監聽器；自動線每次拖曳最多一條，畫布物件數不因反覆微調而暴增 |
| C-110 | Constraint | 「防守移動線」（`def`）只由拖曳防守員自動產生，不進手動線條工具列（`LINE_TOOLS` 仍為切入／傳球／運球／擋拆 4 種）；自動軌跡只描述「本步怎麼走到這裡」，不做成獨立動畫資料（播放仍走 §10 既有的位置補間） |

### US-128（移除快捷鍵卡、手機防誤觸）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-177 | Functional | 右側「快捷鍵 SHORTCUTS」卡片**從原始碼整塊刪除**（不是 CSS 隱藏）：移除 `<section class="panel panel-tips">`（`<h2>快捷鍵</h2>`／`<span>SHORTCUTS</span>`／4 列 `<kbd>` 全部），同時刪掉已成死碼的 `.panel-tips .tips` / `.panel-tips li` 規則、`@media (max-width:1100px)` 內的 `.panel-tips{display:none}` 與全域 `kbd{}` 樣式；側欄面板順序縮為 **球員名單 → 防守陣型 → 戰術線條 → 動作 → 防守與球**（`#defBallPanel` 仍為最後一個），桌機因此多出約 118px 垂直空間；鍵盤快捷鍵功能（§13 `handleKeydown()`）完全保留 |
| FR-178 | Functional | 手機防誤觸：`.board-holder .canvas-container` 與其 `canvas` 皆加 `touch-action:none`（＋`user-select:none`、`-webkit-touch-callout:none`、`-webkit-tap-highlight-color:transparent`），單手拖曳球員時頁面不會跟著滾動；拖曳門檻依輸入裝置分流——滑鼠 `DRAG_EPS` 6px、觸控 `DRAG_EPS_TOUCH` 10px（`beginNodeDrag(target, evt)` 由 `evt.type` 判定，`dragEpsOf(drag)` 取門檻），`onNodeMoving()` 與 `finalizeNodeDrag()` 共用，避免指尖抖動被當成拖曳而污染 undo 堆疊 |
| NFR-121 | Non-Functional | 刪卡只減 DOM 與 CSS，**不新增任何 JS 分支或監聽器**；`touch-action` 為純 CSS 宣告，不影響桌機滑鼠事件與既有 fabric 事件流（`allowTouchScrolling:false` 仍保留）；傳球判定改為 `nearestOffense()` 先做 `obj.containsPoint()` 真 hit-test、再退回 `PASS_SNAP`(54px) 距離後備，維持原本 O(物件數) 成本 |
| C-111 | Constraint | 鍵盤快捷鍵仍然可用（`1`–`5`／`Shift`+`1`–`5`／`V`／`C`／`P`／`D`／`S`／`Del`／`Ctrl+Z`／`Space`／`L`／`Esc`），只是不再於 UI 上列出；移除卡片不得連帶移除 `§13 身分切換與鍵盤快捷鍵` 的 JS |

### US-133（球員免帳號繪製模式）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-222 | Functional | 權限拆成兩個判斷：`canEdit()`＝`state.mode === 'coach' || !!state.editing`（能不能在球場上動手）、`isCoach()`＝`state.mode === 'coach'`（批核／改他人戰術等特權）；`applyMode()` 同步寫 `document.body.dataset.mode` 與 `dataset.edit`（`'1'`／`'0'`），CSS 以 `body[data-edit="1"]` 決定繪製相關控制項（含 `.sidebar`）是否露出來 |
| FR-223 | Functional | 右上角「＋ 新增戰術」（`#btnNewTactic`）對**所有身分**開放，綁 `newTactic()`：播放／匯出中先擋下；畫布有多個步驟或自訂線條先 `confirmDialog('新增戰術', …, '清空並新增')`；確認後清空畫布 → 預設 2-1-2 → 重設單一步驟「步驟 1」→ `tacticId/tacticName/tacticSource/tacticStatus` 全部清空 → **`state.editing = true`**；桌機（>1100px）把游標帶到名稱輸入框，手機（≤1100px）不搶焦點、自動收起手冊並提示「繪製模式：拖曳球員或選工具畫線 · 完成後按「💾 儲存」」 |
| FR-224 | Functional | 唯讀狀態的統一提示 `needDrawMode()`：「需要繪製模式：按右上角「＋ 新增戰術」，或在手冊按「✏️ 修改提案」」，掛在 `[data-tool]` 節點鈕、線條工具鈕、`#btnSaveStep` 與 `handleKeydown()` 的繪製／刪除路徑，**不再呼叫 `requestCoachMode()`**（球員不會再被要求輸入教練密碼）；手冊抽屜的 `#pbTools`（🛠 工具）另給「唯讀模式：要改戰術請按右上角「＋ 新增戰術」自己畫一套」 |
| FR-225 | Functional | ~~步驟列上方輕量列 `#editRow`（`＋ 加步驟`／`💾 儲存`／`✅ 批准`／`✏️ 修改後批核`，桌機 `display:none`、≤767px 才進版面，`grid-area:edit`）：`syncEditRow()` 決定顯示——`show = canEdit() && !state.playing && !state.exporting`；`approving = isCoach() && state.tacticStatus === 'pending' && !!state.tacticId && !state.approveOnSave` 成立時把「加步驟／儲存」換成「批准／修改後批核」（並加 `.is-approve`）~~ → **已由 US-139 取代**：`#editRow` 整塊刪除，改為底部「編輯 4 鍵」＋中間動態工具面板（FR-260～FR-264） | Superseded by US-139 |
| FR-226 | Functional | ~~手機版面收斂：底部控制卡固定「均分 4 鍵」＝`▶`／`∞`／`☰ 戰術`／`💬 分享`（`.stepbar` 的 `grid-template-areas` 為 `edit` / `steps` / `play loop book share`）；加步驟、儲存、批核全收進 `#editRow`，`⬇ 儲存 GIF` 移到手冊抽屜底部 `.pb-mobile-actions`~~ → **已由 US-139 取代**：`grid-template-areas` 改為 `panel` / `steps` / `keys`，手機繪製中＝面板＋`＋ 加步驟`／`👥 球員陣容`／`🛡 防守陣型`／`📤 提交審核·🚀 發布`（FR-260／FR-262） | Superseded by US-139 |

### US-134（提案／批核流程）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-227 | Functional | 儲存對話框 `#saveModal` 改為「名稱 → 角色切換 → 對應欄位」：名稱預填 `#pbNameInput`／`state.tacticName`，沒有才用 `nextTacticName()`；`.role-seg` 兩顆 `.role-btn[data-role="player"\|"coach"]`（`🏃 我是球員`／`📋 我是教練`）由 `setSaveRole(role)` 切換——`state.saveRole`、`.is-active`、`aria-pressed`，球員顯示 `#savePlayerWrap`（名單下拉 `#savePerson`，選項 `#背號 姓名`）＋文案「球員提案：儲存後標記「未批核」…」，教練顯示 `#saveCoachWrap`（暗號 `#saveCode`，placeholder「預設 1234」）＋文案「教練發布：暗號正確就直接放進官方手冊（已批核）。」，`#saveOk` 文字在 `提交提案`／`發布` 之間切換；`openSaveDialog()` 預設角色＝目前身分（`isCoach() ? 'coach' : 'player'`）並清空暗號與錯誤訊息 |
| FR-228 | Functional | 送出（`submitSaveForm()`）時寫入中繼資料：球員 → `meta.status = 'pending'`、`meta.authorLabel = '#{no} {name}'`（名單取不到時退 `球員`）、`meta.author = { no, name, pos }`，並記住最後一次選擇（`LS_SAVE_PERSON`）；教練 → `meta.status = 'approved'`、`meta.authorLabel = '教練'`、`meta.author = { coach: true }`；暗號比對 `COACH_APPROVE_CODE`（`'1234'`）或 `COACH_PASSWORD`，**錯誤時彈窗不關、`#saveError` 顯示「教練暗號不正確，請再試一次。」且不寫入**；`saveTacticNamed()` 會讓 `state.approveOnSave` 優先覆寫成 `approved`，並在「非教練但用暗號發布」時 `enterCoachMode(true)`（自動取得教練權限才能繼續批核） |
| FR-229 | Functional | 手冊清單依批核狀態顯示：未批核的列加「未批核」膠囊（`.pb-pending-tag`）、名稱轉磚紅、第二行顯示「by `#0 陳生`」，並**排序沉到已批核之後**（同群組內仍依更新時間新→舊）；`tactics` 讀取時若 `meta.status` 缺欄位一律視為 `approved`（相容舊資料與 Supabase 既有列） |
| FR-230 | Functional | `startProposalEdit()`（手冊抽屜 `#pbPropose`＝「✏️ 修改提案」）：播放／匯出中先擋下並提示；**球員**把目前戰術**脫離原本紀錄**——來源為 `local`／`supabase` 時 `state.tacticId = null`、`state.tacticSource = null`，名稱去掉結尾「 提案」再加回「 提案」（避免重複疊字），`state.tacticStatus = null`；來源為 `library`（經典戰術）只改名不建 id；最後 `saveCurrentFrame()`、`state.editing = true`、`state.tool = 'select'`、`syncTacticNameField(true)`、`syncEditRow()`、收起手冊並提示「已進入繪製模式 · 改完按「💾 儲存」送出提案」；**教練**按同一顆只是原地進入編輯（不脫離 id），提示「已進入編輯 · 改完按「💾 儲存」」 |
| FR-231 | Functional | 教練批核兩條路徑：`approveTactic()`＝「✅ 批准」，直接 `store.setStatus(id, 'approved')` 並更新 `state.tacticStatus`；`approveAfterEdit()`＝「✏️ 修改後批核」，設 `state.approveOnSave = true` 後走既有儲存流程（可先改內容再存），存檔時 `status = 'approved'`、`tacticId` 不變（原地更新、不產生重複列），存檔後自動清除旗標 |
| FR-232 | Functional | `store.setStatus(id, status)` 雙路實作：本機（localStorage）改寫該筆的 `meta` 後整份回寫；雲端（Supabase）只 `update({ meta })` 該列（送 patch 前先讀回現有 `meta` 以免蓋掉其他鍵）；兩者皆同步更新記憶體中的清單 |
| FR-233 | Functional | 讀取／離開繪製狀態時一律關閉繪製：`loadTactic()`、`loadLibraryTactic()`、`exitCoachMode()`、`applyMode()` 都重設 `state.editing = false`、`approveOnSave = false` 並 `syncEditRow()`；切換到教練模式（`enterCoachMode()`）不自動進入繪製模式，需要時再按「＋ 新增戰術」 |

### US-135（一鍵分享）對應需求

| ID | 類型 | 需求 |
| --- | --- | --- |
| FR-234 | Functional | `captureGif()` 抽出共用擷取流程：`saveCurrentFrame()` → `setExporting(true)` ＋ loader → 逐步驟 `renderFrame(i)` 後 `canvas.toDataURL()`（每步停 2 格＋`GIF_SAMPLES` 格補間）→ `gifshot.createGIF()` 編碼（帶 `progressCallback` 更新 loader）→ 回傳 `{ dataUrl, filename, frames }`；**`finally` 一律收尾**（`hideLoader()`、`setExporting(false)`、`renderFrame(restoreIndex)` 還原原始步驟）。`exportGif()`（`⬇ 導出 GIF`／`#btnGif`／`#btnGifSheet`／`#btnGifBook`）與 `shareTactic()` 都呼叫它，不各自實作擷取 |
| FR-235 | Functional | `shareTactic()`（`#btnShare`，手機底部第 4 鍵）順序：播放／匯出中或 `gifshot` 未就緒先 return → `captureGif()`（失敗只 toast「分享前產生 GIF 失敗…」）→ 以 `navigator.canShare({ files:[probe.gif] })` 偵測，成立則 `new File([blob], out.filename, {type:'image/gif'})` ＋ `navigator.share({ files, title, text })`（`AbortError`＝使用者取消，靜默返回）→ 失敗或不支援則退回 `downloadDataUrl()` 下載 GIF ＋ `window.open('https://wa.me/?text=…')`；文案＝「🏀 {戰術名稱}／{N} 個步驟｜MONDAY BEER & BASKETBALL 戰術板」 |

### 非功能需求 / 限制

| ID | 類型 | 需求 |
| --- | --- | --- |
| NFR-101 | Non-Functional | 單一 `index.html` 完成所有功能；無建置步驟、無 npm 依賴；Fabric.js / gifshot / supabase-js 由 CDN 載入 |
| NFR-102 | Non-Functional | 畫布固定邏輯解析度 1000×940，僅以 CSS 縮放，指標座標不需換算，任何裝置所見一致 |
| NFR-103 | Non-Functional | 響應式：>1100px 為「戰術手冊＋畫布＋右側工具列」三欄（232px / 1fr / 318px）；≤1100px 球場單欄滿寬、戰術手冊與教練工具列都改為抽屜（步驟列 `☰` / `🛠` 開關）並顯示底部 dock；≤720px 精簡頂部資訊與縮圖尺寸 |
| NFR-104 | Non-Functional | 動畫以 timer 驅動（非 requestAnimationFrame），背景分頁或被節流時不會卡住 |
| NFR-105 | Non-Functional | CDN 載入失敗時在畫布區顯示可讀錯誤訊息與 toast，不呈現空白畫面 |
| NFR-106 | Non-Functional | 儲存層對 `file://`／私密模式（localStorage 被封鎖）有記憶體回退，不會拋出未處理例外 |
| NFR-107 | Non-Functional | ≤1100px 時「戰術手冊」由左欄改為左側抽屜（`transform: translateX(-105%)` → `.is-open` 滑入，附背幕），與右側工具列抽屜互斥（開一邊自動關另一邊）；實測 1484／1184／500 寬皆無水平溢出（`scrollWidth === innerWidth`） |
| NFR-108 | Non-Functional | 球場幾何以公尺常數換算（1px＝1.5cm，精度 ±0.05px）：三分弧半徑、禁區、罰球圈、衝撞區與中圈皆由 `COURT` 常數推導，不寫死像素；主要線條不透明度 ≥ 0.9（`rgba(249,246,238,.94)`），投影／列印仍清晰；球場繪製不進入序列化（存檔相容舊資料） |
| C-101 | Constraint | 不修改既有 `frontend/`、`backend/`、`devops/`、`.env`（沿用 py-workflow-system starter 的不可變檔案規則） |
| C-102 | Constraint | 教練密碼為前端遮蔽用途，非資安等級驗證；未串接 Supabase Auth |
| C-103 | Constraint | 僅支援半場進攻版面（籃框在上方），不含全場與球員資料庫；防守提供 4 種固定預設（2-1-2／2-3／3-2／人盯人）＋「自訂防守」（僅記住目前 5 個防守者位置，不建陣型庫、不可命名保存） |
| C-104 | Constraint | 未設定 Supabase 時，資料只存在該瀏覽器；換裝置或清除瀏覽器資料即遺失 |
| NFR-109 | Non-Functional | 淺色主題對比度：正文與標籤文字對紙白底 ≥ 4.5:1（`#1F2A37` 約 12.6:1、`#4A5A6A` 約 7.1:1、`#7B8C9E` 約 3.9:1 僅用於輔助說明 ≥14px 粗體、磚紅 `#B4462F` 約 5.3:1、防守藍 `#2F6FA8` 約 4.7:1）；球場線條用 `rgba(31,42,55,.62)` 在 `#F2F6FA` 上等效約 4.4:1，投影與列印皆可辨識 |
| NFR-110 | Non-Functional | 特效成本可控：光暈以單一共用 `fabric.Shadow` 每 80ms 更新（不重建物件、不重繪整張畫布以外的圖層）；殘影最多 12 條 × 2 層且於 260ms 後自動移除；戰術庫生成結果以 `LIB_CACHE` 快取，第二次載入不再重建 fabric 物件；`prefers-reduced-motion` 時關閉呼吸與殘影 |
| C-105 | Constraint | 存檔格式向後相容：`frames[].cue` / `frames[].desc` 為新增的選填欄位，舊有 localStorage／Supabase 紀錄缺少時仍可載入（顯示為空），新存檔可被舊版忽略 |
| NFR-111 | Non-Functional | 停止延遲可控：`stopPlayback()` 最慢在「目前步驟的停留＋一次 900ms 補間」內回報（實測 ≤ 1.2 秒），載入新戰術的等待不會超過一次播放循環；等待期間顯示 `showLoader('載入戰術…')` |
| NFR-112 | Non-Functional | 尊重系統「減少動態」偏好（`prefers-reduced-motion: reduce`）：載入戰術只定位不自動播放，與 FR-137／NFR-110 既有的特效關閉規則一致 |
| C-106 | Constraint | 側欄收合僅在 >1100px 生效（`@media (min-width:1101px)`）；≤1100px 一律走抽屜，避免與手機 RWD 規則衝突；收合狀態只影響版面（`body.side-collapsed` class + localStorage），不改動任何資料 |
| NFR-113 | Non-Functional | 收合／展開以 CSS grid 過渡（0.22s）完成，不觸發 canvas 重新計算繪圖資料；球場僅由 CSS 縮放，畫布邏輯解析度仍為 1000×940（維持 NFR-102） |
| NFR-114 | Non-Functional | 隊徽浮水印以 data URI 內嵌（不讀外部檔案），避免 `file://` 下 canvas 被污染而擋住 GIF／PNG 匯出；透明度固定 0.18、寬 520px 置中於球場（`CREST` 常數，不隨模式／步驟改變），載入後 260ms 內完成刷新，不影響 60fps 拖曳**（已撤銷：水印已移除，見 FR-159）** |
| NFR-115 | Non-Functional | 防守輪轉為純資料運算（每步一次，O(5)），不新增每幀重繪；`prefers-reduced-motion` 時仍靜態顯示該步推導結果 |
| C-107 | Constraint | 自訂防守只保留「最後一次按下時的 5 個位置」，不寫入存檔清單、不可命名；重新載入頁面即回到預設 2-1-2 |
| NFR-116 | Non-Functional | 首頁圖層：`z-index:76`（高於工具列抽屜 70、低於教練密碼彈窗 80 與 toast 120），因此密碼框永遠浮在首頁之上；`.splash[hidden]{display:none}` 覆蓋 `.splash{display:flex}`，`hidden` 屬性可靠地關閉首頁；`overflow:auto` ＋ `margin:auto` 讓矮螢幕可捲動而不裁切頂部 |
| NFR-117 | Non-Functional | 首頁響應式：桌面上兩張身分卡並排（`grid` 2 欄）、≤860px 改單欄並縮小隊徽與字級；實測視窗 360px（容器 360）時卡片寬 328px、`scrollWidth === clientWidth`，1484／1184／500 皆無水平溢出 |
| NFR-118 | Non-Functional | 名單渲染成本不變：`buildRosterPanel()` 為 18 筆的一次性 DOM 重建（無監聽器洩漏，每顆按鈕只有 1 個 click listener），位置篩選只重跑這 18 筆的排序＋過濾（O(n log n)，n=18），切換 chips 實測 < 16ms 完成 |
| C-108 | Constraint | 名單位置（`pos`）為教練依球隊現況人工填寫的靜態資料，不由比賽數據推導；篩選只影響右側名單面板顯示，不改變場上球員、不自動換人 |
| NFR-119 | Non-Functional | 手機精簡一律用純 CSS 媒體查詢（`@media (max-width:1100px)`、`@media (max-width:720px)` 內 `.pb-name-input{font-size:16px}`），不加 JS 分支，桌機說明與無障礙結構完整保留；`16px` 字級避免 iOS 聚焦輸入框時自動放大畫面；`newTactic()` 只重設本機 fabric 物件（11 個）與 state，無額外網路請求**（原 `.panel-tips{display:none}` 一段已隨 FR-177 失效，其餘仍有效）** |
| C-109 | Constraint | 「➕ 新增戰術」只重設畫布與狀態，**不會自動存檔**（仍需按「💾 儲存戰術」才寫入清單／Supabase）；未命名就存檔時沿用既有「新戰術 N」預設命名，`maxlength=60` 與既有命名彈窗一致；（US-133 起對所有身分開放，不再限教練） |
| NFR-128 | Non-Functional | 繪製權限只由 `canEdit()` 一個來源決定，`applyMode()` 一次寫入 `body[data-edit]`，其餘顯示／隱藏全部交給 CSS（不含 JS 逐元素判斷、不新增事件監聽器）；手機新增的 `#editRow`／`.pb-tools-row`／`.pb-mobile-actions`／`.new-tactic-btn` 在桌機一律 `display:none`，確保 1440×900 桌機零回歸 |
| NFR-129 | Non-Functional | 批核狀態只寫在既有 `meta` JSONB（`status`／`author`／`authorLabel`／`approvedAt`），**不需 Supabase migration**；讀取時缺欄位視為 `approved`，舊紀錄與離線資料完整相容；未批核的排序只在 `renderLibrary()` 一次 sort 完成（O(n log n)、無額外請求） |
| NFR-130 | Non-Functional | 分享與匯出共用同一份擷取結果，整段流程包在 `try/finally`：不論成功、失敗或使用者取消，`state.exporting` 都會歸零、loader 關閉、畫面回到原本步驟（實測 `#gif` 規格 14 項斷言全過） |
| C-118 | Constraint | 「繪製模式」是前端便利性設計，**不是**權限控管：進入繪製模式不需要任何憑證，任何人仍可按下；真正的保護只有「提案不會覆寫官方紀錄」與「批核需要教練暗號」 |
| C-119 | Constraint | 教練暗號沿用前端比對（`COACH_APPROVE_CODE = '1234'` 或 `COACH_PASSWORD`），與 C-102 同級，非資安等級；未串接 Supabase Auth |
| C-120 | Constraint | 提案為「另存一筆」，不做 diff／merge、不改資料表結構；提案也不會自動推送到教練已開著的頁面（教練需重新整理手冊或按 `↻` 才看到新提案） |

### 驗收標準

| ID | 驗收標準 |
| --- | --- |
| AC-101 | 開啟頁面即可看到完整半場球場、5 對 5 陣型與兩個步驟，無 console 例外 |
| AC-102 | 教練模式下拖曳可畫出四種線條，線條可選取／刪除；球員可拖動並正確存入當前步驟 |
| AC-103 | 按播放（或 Space）可看到球員在步驟間平滑移動，結束後回到播放前的步驟 |
| AC-104 | 匯出 GIF 下載檔名由 `tacticFileName('gif')` 產生：有載入／命名的戰術時為「戰術名稱.gif」（例 `1-5 中路擋拆` → `1-5中路擋拆.gif`、`破 2-1-2 聯防：雙肘區策應` → `破2-1-2聯防_雙肘區策應.gif`），未命名時為 `MondayBeer_Tactic.gif`；內容包含所有步驟與過場影格 |
| AC-105 | 儲存戰術後在「我的戰術」可見；重新載入頁面後仍可載入（localStorage 或 Supabase） |
| AC-106 | 球員模式下無法拖曳／修改任何物件，且看得到「已鎖定」提示 |
| AC-107 | 頂部顯示隊徽圖片（且無 console 例外）；三分線底角落在 x=60/940、弧頂 y=555，禁區 337–663 × 0–387，與 FIBA 半場比例相符 |
| AC-108 | 有名球員節點外框寬 50±2px、含背號＋姓名兩個文字；點 2-1-2／2-3／3-2 後 X1–X5 精確落在預設座標，人盯人時每位 X 都介於自己的人與籃框之間（間距 ≥ 52px） |
| AC-109 | 儲存跳出命名對話框（預設「新戰術 1」）；存檔後左側手冊出現該名稱，✎ 改名後清單與 localStorage 同步更新，垃圾桶刪除需確認且該筆消失 |
| AC-110 | 匯出 GIF／PNG 功能保留且可執行；「我的戰術」舊彈窗與 `#btnLibrary` 已移除，不再有死連結 |
| AC-111 | 全站為淺色白板風：頁面底色 `#EBF1F6`、面板白底、深墨文字，無任何深藍底殘留；favicon／theme-color／工具列圖示同色系；球場為紙白＋灰線＋磚紅籃框，進攻磚紅盤、防守白底藍框並顯示 `PG／SG／SF／PF／C`（場上不再出現 `✕` 或 `X1–X5` 字樣） |
| AC-112 | 13 套戰術皆可一鍵載入且每套 4 步、每步 ≥ 11 個物件（5 攻 5 守 1 球）、每步都有機會標籤；分類套數為 3／3／3／4、手冊標題動態顯示「13 套」與各分類套數；載入後可播放、可存檔、可匯出**（已由 AC-126 取代：7 套／2/2/3）** |
| AC-113 | 播放時持球者圓盤外可見橙色柔光且強度隨時間呼吸；步驟切換時移動中的球員留下雙層虛線殘影並在 0.26 秒內淡出；序列化結果不含殘影與光暈；球場右上顯示該步驟的機會標籤 |
| AC-114 | 手機（≤1100px）可直接看到完整球場、步驟縮圖與解說卡；`☰` 開手冊抽屜、`🛠` 開工具列抽屜、`Esc`／背幕關閉且兩者互斥；1484／1184／500 寬皆無水平溢出 |
| AC-115 | 在戰術手冊點任一套（例：1-5 中路擋拆）後 0.3 秒內 `state.playing === true`、`state.loop === true`、`∞` 鈕亮起、播放鈕顯示「停止播放」，不需再按播放；按「停止播放」後 `state.playing === false` |
| AC-116 | 播放中改點另一套（Give & Go）→ `tacticId` 變 `lib:give-go`、步驟 4 步、仍持續自動播放，舊動畫不殘留、不拋錯**（現行版本以 `beat32-skip` 驗證同一行為，見 AC-126 與本輪驗收紀錄）** |
| AC-117 | 右側面板只剩 6 顆節點鈕（`PG／SG／SF／PF／C` ＋ 球，`[data-tool^="off"]` 數量為 0），名單 18 顆按鈕可派上場；點 34 號後場上出現背號 34 的節點且按鈕標記 `is-on` |
| AC-118 | 桌面上點 `›` 收合：`.stage` 第三軌實測 `0px`、`#sidebar` 為 `display:none`、`#sideExpand` 可見、球場變寬且左右留白相等（1484 寬實測 588.3→615.9px、左 294.0／右 294.0）、球場未被裁切；點 `‹` 恢復三欄（`232px / 858px / 318px`）；≤1100px 時兩顆鈕皆為 `display:none` |
| AC-119 | 場上五名防守者圓內文字為 `PG`／`SG`／`SF`／`PF`／`C`（深藍、字重 800），整份 HTML 不含 `✕` 與 `X1`–`X5` 字串；右側節點鈕、`#defGrid` 與手機 dock 的防守 chip 文字一致 |
| AC-120 | 載入任一聯防戰術（例 `zone-vs-212`，現更名 `beat212-elbow`）後逐步比較：球換邊時防守整組水平／縱向滑動（≤92px／≤70px）、負責撲防的防守者改站在持球者與籃框的連線上（貼防 56px），且步驟間仍有平滑補間（防守會「動」） |
| AC-121 | 教練模式拖曳任一防守者 → 按「自訂防守」→ 該顆 `.is-on`；再拖曳後 `state.frames[i]` 內座標同步更新（不需另外按「儲存此步驟」）；套用 2-3 後 `state.customDefense === false` |
| AC-122 | 球場中央可見隊徽浮水印（`courtGroup` 內含 `isCrest` 圖片、寬 520px、透明度 0.18），序列化結果不含該圖片，`canvas.toDataURL()` 可正常輸出（無 canvas tainted 例外）**（已撤銷：球場已無水印，改由 FR-159／AC-127 驗收）** |
| AC-123 | 載入戰術「底線電梯門 · 底線發球」後按「導出 GIF」：`tacticFileName('gif')` 回傳 `底線電梯門_底線發球.gif`，toast 顯示同一檔名；名稱含檔案系統保留字元（斜線、冒號、問號、星號、雙引號、角括號、直立線、逗號、頓號、分號、驚嘆號、間隔號）或空白時會被清成安全檔名（空白移除、符號轉 `_`），空名稱回退 `MondayBeer_Tactic.gif` |
| AC-124 | 首次開啟必顯示開場首頁：`#splash` 可見、`z-index` 為 76、兩張身分卡存在；點「我是球員」後首頁關閉且 `state.mode === 'player'`（唯讀）；點頂部 `⎋ 切換身分`（`#btnHome`）首頁再次出現；點「我是教練」→ `#pwModal` 開啟（此時按 `Esc` 可關掉密碼框，首頁仍在），輸入 `COACH_PASSWORD` 後 `state.mode === 'coach'` 且首頁關閉 |
| AC-125 | 首頁開啟期間按 `Space`／`L`／`1`–`5` 不會觸發播放或新增球員；首頁與彈窗層級正確（密碼框與 toast 都浮在首頁之上），且重新整理後仍從首頁開始 |
| AC-126 | 經典戰術為 3 分類 7 套（`beat212:2 / beat32:2 / blob:3`），手冊標題顯示「7 套」、`<details class="pb-cat">` 只有 3 個且 `data-cat` 依序為 `beat212,beat32,blob`；7 套皆可載入（各 4 步、每步 ≥ 11 物件、每步有 cue 標籤）並自動循環播放 |
| AC-127 | 球場內不存在 `isCrest` 物件、也沒有任何 `MONDAY`／`BEER` 地板文字；`buildCrest` / `makeCrest` / `refreshCourtCrest` 皆未定義；序列化結果不含水印且 `canvas.toDataURL()` 仍可正常輸出 |
| AC-128 | 右側面板順序為「球員名單 → 防守陣型 → 戰術線條 → 動作 → 防守與球」，`#defBallPanel` 是 `<details>`、預設 `open === false`（收合高度 38px、展開 226px、內容含 6 顆節點鈕），且為側欄最後一個面板**（原順序含「快捷鍵」，已由 AC-143 取代）** |
| AC-129 | 名單 18 人按背號升冪（`0,1,5,6,7,8,9,10,11,12,14,21,31,34,35,50,87,99`）且每人顯示位置；`#posChips` 4 顆 chips，點 `PG/SG` 只剩 `0,1,5,6,8,9,12`、點 `PF/C` 只剩 `10,14,21,31,34,35,50,87,99`、點「全部」回復 18 人，`state.rosterFilter` 同步 |
| AC-130 | **（已撤銷：卡片已於本輪整塊刪除，改由 AC-143 驗收）** 原條文：≤1100px 時 `.panel-tips` 為 `display:none`，>1100px 為可見 |
| AC-131 | 左側手冊 `.pb-head` 下方可見「➕ 新增戰術」按鈕與「戰術名稱」輸入框（`placeholder === '請輸入戰術名稱'`），提示行不溢出容器（`scrollWidth === clientWidth`）；球員模式下整個 `.pb-new-row` 不進版面（`display:none`、`offsetParent === null`）；**【US-133 更新】球員不必再借用這顆按鈕**——手機／桌機右上角的「＋ 新增戰術」（`#btnNewTactic`）對所有身分開放，手冊內那顆仍為教練專用（見 AC-167～AC-169） |
| AC-132 | 教練在有多個步驟／自訂線條時按「➕ 新增戰術」先跳確認框；確認後 `state.frames.length === 1`、`frames[0].name === '步驟 1'`、`state.tacticId === null`、`state.tacticName === ''`、畫布為 5 攻 5 守 1 球、`#defGrid .def-btn.is-on` 為 `212`、線條數 0、名稱輸入框已清空 |
| AC-133 | 在名稱框輸入 `HARNESS-新增戰術` 後 `state.tacticName` 同步；按「💾 儲存戰術」直接存檔（`#textModal` 保持隱藏）且該名稱立即出現在「我的戰術」清單；名稱空白時仍會跳出命名彈窗 |
| AC-134 | 教練模式的「我的戰術」為空時顯示「尚無儲存的戰術，按上方「➕ 新增戰術」建立第一套。」（切換身分即重繪，不會停在球員文案「教練尚未發布戰術。」） |
| AC-135 | 教練模式拖曳持球者（球距該人 < 70px）時，籃球在 `object:moving` 期間即時跟手，且「球相對人」的偏移全程不變（實測 60,30）；放開後 `frames[currentFrame]` 內的持球者座標已在 1 幀內更新 |
| AC-136 | 拖曳任一球員／防守員放開後自動長出對應線型：持球者→`dribble` 波浪線、其他進攻球員→`cut` 實線箭頭、防守員→`def` 實線箭頭；每條新線 `autoLine === true` 且幾何座標無 `NaN`；位移 < 34px（微調）或小於防手震門檻（滑鼠 < 6px、觸控 < 10px）不生成線條 |
| AC-137 | 拖球途中 54px 內最近的進攻球員亮起橙色虛線候選圈（`kind='ghost'`，不在 `serializeCanvas()` 內、放開後立刻移除）；放開在隊友身上→球吸附到該人 `+22/+18`、生成 `pass` 虛線並換人持球（`getBallHandler()` 換人）；放回同一人手上只吸附不畫線 |
| AC-138 | 傳球後若存在下一步且該步的球仍黏在舊持球者手上（≤70px），下一步的球自動改由新持球者持有（實測 `+22,+18`）；若該步的球已被移到別處（>70px）則完全不覆寫（保持 120,120） |
| AC-139 | 按「＋ 新增步驟」後新步驟內不存在任何 `autoLine === true` 的線（自動軌跡不繼承），但教練手畫的切入／傳球／擋拆線仍在，5 名進攻球員座標完整複製 |
| AC-140 | 拖曳後按 `Ctrl+Z`（或 `undo()`）可回到拖曳前的畫面與座標（實測 `def4` 回 390,165），且該次拖曳確實進過復原堆疊 |
| AC-141 | 球員模式或播放中拖曳任何節點：線條數量不變、不寫回步驟、球不動（`beginNodeDrag()` 與 `onNodeModified()` 皆被守門擋下） |
| AC-142 | 球被拖到球場外會 clamp 回球場內（實測 -140,1200 → 18,922）並提示「目前無人持球」，不會停留在畫布外 |
| AC-143 | 原始碼內完全沒有「快捷鍵」卡片：`document.querySelector('.panel-tips') === null`、全頁 `kbd` 元素數為 0、`#sidebar` 文字不含「快捷鍵」與 `SHORTCUTS`；側欄面板順序 `球員名單>防守陣型>戰術線條>動作`、`#defBallPanel` 仍是最後一個面板（桌機／手機尺寸皆成立） |
| AC-144 | 桌機 1484 與手機 500 寬實測 `.board-holder .canvas-container canvas` 的 `touch-action === 'none'`；`dragEpsOf(null) === 6`、`dragEpsOf({touch:true}) === 10`；以 `{type:'touchstart'}` 起始的拖曳 `state.nodeDrag.touch === true`、`{type:'mousedown'}` 則為 `false`；球心落在隊友圓圈內時 `nearestOffense(pt, 0)` 仍回傳該球員（真 hit-test 生效） |
| AC-167 | 球員身分點右上角「＋ 新增戰術」→ `state.editing === true`、`canEdit() === true`、`body.dataset.edit === '1'`、`#editRow` 不再 `hidden` 且 `#editRowAdd`／`#editRowSave` 可見、`#btnApprove`／`#btnApproveEdit` 隱藏；**`#pwModal` 全程未開啟**（不需要教練密碼）；390×844／375×667 下 `#playbook` 會自動收起 |
| AC-168 | 唯讀球員（`state.mode==='player'`、未進繪製模式）點 `[data-tool]` 節點鈕／線條工具／`#btnSaveStep`：只出現「需要繪製模式…」提示（`gate.toolBlocked`／`gate.toolToast`）、`#pwModal` 不開（`gate.noPasswordModal`）、畫布物件數不變（`gate.noNodeAdded`，實測拖曳後仍 12 顆）；手冊抽屜 `#pbTools` 給「唯讀模式…」提示（`gate.toolsToast`） |
| AC-169 | `#editRow` 三態：唯讀 → 不進版面；繪製中 → 顯示「＋ 加步驟／💾 儲存」；教練看未批核 → 換成「✅ 批准／✏️ 修改後批核」（`approveEdit.shown`）；390×844 與 375×667 下 `.stepbar` 與 `#editRow` 皆 `scrollWidth === clientWidth`（無水平溢出）、底部 4 鍵 `#btnPlay`／`#btnLoop`／`#pbToggle`／`#btnShare` 都在視窗內、球場高度 ≥ 120px |
| AC-170 | 球員開儲存對話框：`.role-btn[data-role="player"]` 為 `is-active`、`#savePlayerWrap` 可見、`#saveCoachWrap` `hidden`、`#saveOk` 文字「提交提案」（`save.rolePlayer`／`save.playerWrapShown`／`save.coachWrapHidden`／`save.okLabel`／`save.namePrefilled`）；切到教練 → 反過來且 `#saveOk` 變「發布」（`saveCoachWrap`／`coachSave.roleCoach`／`coachSave.playerHidden`／`coachSave.codeShown`／`coachSave.okLabel`） |
| AC-171 | 球員送出後寫入一筆 `meta.status === 'pending'` 的紀錄（`save.pending`／`save.recordId`），手冊出現「未批核」膠囊與提案人「by #0 陳生」（`list.pendingTag`／`list.authorShown`／`list.hasRecord`）；教練按「✅ 批准」後該筆 `meta.status === 'approved'`、`#btnApprove` 收起、`#editRowAdd` 回來、toast「已批准…」 |
| AC-172 | 教練身分用暗號儲存：錯的暗號（如 `9999`）→ 彈窗不關、`#saveError` 顯示「教練暗號不正確，請再試一次。」（`coachSave.wrongCodeStays`）；輸入 `1234` → 彈窗關閉、該筆為 `approved`（`coachSave.approved`／`coachSave.modalClosed`）、且自動取得教練權限（`coachSave.autoCoach`） |
| AC-173 | 球員在既有戰術按「✏️ 修改提案」：`state.tacticId === null`、`state.tacticSource === null`、名稱結尾為「 提案」、`state.editing === true`、`state.tacticStatus === null`（`propose.detached`／`propose.notOfficialId`／`propose.nameSuffix`／`propose.editing`）——存檔後是另一筆紀錄，原本那筆內容不變 |
| AC-174 | 「✏️ 修改後批核」：按下後 `#btnApproveEdit` 命中、`state.approveOnSave === true`、進入編輯（`approveEdit.on`）；儲存後 `state.tacticStatus === 'approved'`、紀錄 id 與批核前相同（`approveEdit.sameId`／`approveEdit.saved`／`approveEdit.approved`）、清單筆數不增加（`approveEdit.noDuplicate`）、旗標歸零（`approveEdit.cleared`） |
| AC-175 | 分享（`#gif` 規格，`gifshot` 以 stub 取代編碼）：`captureGif()` 取得影格與 dataUrl（`gif.captureArgs`／`gif.dataUrl`）、檔名沿用戰術名稱（`gif.filename`）、流程結束後 loader 關閉、畫面回原步驟、`state.exporting === false`（`gif.loaderHidden`／`gif.frameRestored`／`gif.exportingCleared`）；不支援原生分享時會下載 GIF 並開啟 `wa.me`（`share.downloaded`／`share.whatsappOpened`／`share.frameRestoredAgain`／`share.noThrow`） |
| AC-176 | 冒煙測試（`.scratch/smoke/cdp.js`，CDP `Emulation.setDeviceMetricsOverride`）四個規格全綠：`1440x900` PASS=64／`390x844` PASS=71／`375x667` PASS=71／`gif` PASS=14，**FAIL 皆為 0**、`runtime.errors` 皆為 `[none]`；`integrity.js` 檢查無亂碼字樣、CSS 大括號 503/503 平衡、兩段 inline script `node --check` 通過、`dist/index.html` 與 `index.html` SHA256 一致 |

---

## 📊 Requirement Traceability Matrix (RTM)

| Requirement ID | 需求摘要 | Feature / Module（`index.html`） | User Story | Status |
| --- | --- | --- | --- | --- |
| FR-101 | 半場球場繪製 | §4 `buildCourt()` / `ensureCourt()` | US-101 | Complete |
| FR-102 | 球員與籃球節點 | §5 `createPlayer()` / `createBall()`、§8 `addNode()` | US-101 | Complete |
| FR-103 | 四種戰術線條 | §5 `buildLineObj()` / `waveD()`、§8 `onCanvasDown/Move/Up()` | US-101 | Complete |
| FR-104 | 選取／刪除／復原 | §6 `pushUndo()` / `undo()`、§8 `clearDrawings()`、§13 `deleteSelection()` | US-101 | Complete |
| FR-105 | 清除／重設球場 | §8 `clearDrawings()` / `resetBoard()` | US-101 | Complete |
| FR-106 | 步驟管理 | §9 `addStep()` / `duplicateStep()` / `deleteStep()` / `renameStep()` / `renderStepUI()` | US-102 | Complete |
| FR-107 | 補間播放 | §10 `playAnimation()` / `tweenToFrame()` / `applyLerp()` | US-102 | Complete |
| FR-108 | nodeId 節點對應 | §5（`group.nodeId`）、§6 `serializeCanvas()`、§10 `nodeMapFromFrame()` | US-102 | Complete |
| FR-109 | GIF 匯出 | §11 `exportGif()` | US-103 | Complete |
| FR-110 | PNG 匯出 | §11 `exportPng()` | US-103 | Complete |
| FR-111 | 雲端／本機儲存 | §3 `store`（`sbSave` / `localSave` / 自動回退） | US-104 | Complete |
| FR-112 | 戰術手冊載入 / 改名 / 刪除 | §12 `renderPlaybook()` / `renameTactic()` / `removeTactic()` / `loadTactic()`、`store.rename()` | US-104、US-111 | Complete |
| FR-113 | 雙模式與解鎖 | §7 `applyMode()`、§13 `requestCoachMode()` / `submitPassword()` / `exitCoachMode()` | US-101～104 | Complete |
| FR-114 | 鍵盤快捷鍵 | §13 `handleKeydown()` | US-101 | Complete |
| FR-115 | 示範戰術 | §14 `seedDemo()` | US-102 | Complete |
| FR-121 | 戰術手冊側欄 | §12 `renderPlaybook()`、CSS `.playbook` / `.pb-*`、`#pbList` / `#pbRefresh`；觸發點：`boot()`、儲存成功、`loadTactic()`、`removeTactic()` | US-105 | Complete |
| FR-122 | 循環播放／停止 | §10 `playAnimation()`（`do…while (state.loop && !state.stopRequested)`、`LOOP_GAP`）、`toggleLoop()` / `updateLoopBtn()`、§13 `handleKeydown()` `L`、§7 `setPlaying()` 停止標籤 | US-106 | Complete |
| FR-123 | 18 人名單 | §1 `ROSTER` / `OFF_ROSTER` / `ROSTER_SPAWN`、§5 `createPlayer(nodeId, isDef, player)`、`findRosterNode()` / `rosterSpawnSpot()` / `addRosterPlayer()` / `buildRosterPanel()` / `updateRosterPanelState()`、`serializeCanvas()` 白名單 | US-107 | Complete |
| FR-124 | 隊徽 Logo | HTML `.brand-logo > img#brandLogo`（+ `#brandLogoFallback` SVG）、CSS `.brand-logo img`（46/38px、`object-fit:cover`、`onerror` 回退） | US-108 | Complete |
| FR-125 | FIBA 半場幾何 | §1 `PX_PER_M` / `COURT` / `COURT_THREE_JOIN_Y`、§4 `buildCourt()`（地板木紋、暗角、三分與中圈金色、衝撞區、刻線）、`THEME.line` / `THEME.lineGold` | US-108 | Complete |
| FR-126 | 大節點與清晰標籤 | §5 `createPlayer()`（radius 25/24、stroke 3.5、背號 24/20/17 @800、姓名 12.5px 白字 + `scaleToWidth`）、§1 `DEF_SPOTS` / `ROSTER_SPAWN` 重排、`seedDemo()` | US-109 | Complete |
| FR-127 | 防守陣型預設 | §1 `DEFENSE_PRESETS`、§8 `applyDefensePreset()` / `defensePresetSpots()` / `manToManSpot()` / `markDefensePreset()`、HTML `#defGrid`（4 × `.def-btn`）、CSS `.def-*` | US-110 | Complete |
| FR-128 | 具名儲存 / 改名 / 刪除 | §2 `promptText()` / `settleText()`、§12 `nextTacticName()` / `openSaveDialog()` / `saveTacticNamed()` / `renameTactic()`、§3 `localRename()` / `sbRename()` / `store.rename()`、HTML `#textModal`、CSS `.pb-main` / `.pb-actions` / `.pb-act` | US-111 | Complete |
| FR-129 | 淺色白板風 token 與全站改色 | CSS `:root`（`--cream #1F2A37`、`--muted #7B8C9E`、`--line #C9D6E2`、`--brick`、`--blue`、`--ink-soft`）、`body` 背景、`.topbar` / `.stepbar` / `.panel` / `.playbook` / `.modal-card` / `.toast` / `.sidebar` 等全數轉白底；`THEME` 物件重寫；HTML 內嵌 SVG、favicon、`meta[theme-color]` | US-112 | Complete |
| FR-130 | 白板風球員與球 | §5 `createPlayer()`（進攻磚紅漸層＋白框白字、防守白底藍框＋圓內位置代號 `PG／SG／SF／PF／C`＋藍字）、`createBall()`（橙底深墨框）、`nodeStyle()` 選取框改磚紅 | US-112 | Complete |
| FR-131 | 13 套四大分類戰術庫資料 | §5.5 `LIB_SPOT` / `LIB_DEF` / `LIB_CATEGORIES` / `mkStep()` / `TACTIC_LIBRARY`（pick / motion / zone 各 3 套、transition 4 套，共 13 套 × 4 步，含 `cue`、`desc`） | US-113 | Superseded（見 FR-160） |
| FR-132 | 戰術庫 → 可播放影格 | §5.5 `materialiseTactic()`（沿用 `createPlayer` / `createBall` / `buildLineObj` / `placeCenter`，輸出 `toObject(LIB_SER_PROPS)` 與存檔同格式）、`LIB_CACHE` 快取 | US-113 | Complete |
| FR-133 | 手冊分類 UI 與一鍵載入 | HTML `.pb-scroll` + 4 × `<details class="pb-cat">` + 「我的戰術」；CSS `.pb-cat*` / `.pb-lib*`；§12 `renderLibrary()` / `loadLibraryTactic()` / `libraryTacticByKey()`（`tacticId='lib:<key>'`、`tacticSource='library'`）、`renderPlaybook()` 的 `#pbMineCount` | US-113 | Complete |
| FR-134 | 持球光暈 | §10.5 `GLOW_*` 常數 / `glowShadowRef()` / `getBallHandler()`（70px 最近進攻員）/ `updateGlow()`（80ms、blur 9↔15、alpha 0.5↔0.82）/ `startGlow()`、`prefersReducedMotion()`、`boot()` 啟動 | US-112 | Complete |
| FR-135 | 殘影軌跡 | §10.5 `makeTrailSegment()` / `startTrails()`（雙層虛線、位移 < 32px 略過、`moveTo(1)` 疊在球場上）/ `fadeOutTrails()`（260ms）、§10 `tweenToFrame()` 整合 | US-112 | Complete |
| FR-136 | 機會標籤與存檔欄位 | HTML `#cueTag`、CSS `.cue-tag` / `@keyframes cuePop`、§9 `renderCueTag()`（`aria-live`）；`saveTacticNamed()` 與 `loadTactic()` 帶 `cue` / `desc` | US-112 | Complete |
| FR-137 | 特效不污染資料 | §6 `serializeCanvas()`（過濾 `isTrail` / `isGlow`、比對 `glowShadow` 後刪除 `shadow`）、§7 `applyMode()` 跳過特效物件、§6 `loadObjects()` 重設 `glowTarget` | US-112 | Complete |
| FR-138 | 手機抽屜與步驟 dock | HTML `#pbToggle` / `#sideToggle` / `#pbClose` / `#pbScrim` / `#mobileDock`（`#defQuick`、`#stepThumbs`、`#stepCards`）、CSS `@media (max-width:1100px)` 抽屜與 `.mobile-dock`、§13 `openPlaybookDrawer()` / `closePlaybookDrawer()` / `buildDefQuick()`、§9 `thumbSvg()` / `renderStepDock()`、`handleKeydown()` Esc | US-114 | Complete |
| NFR-101 | 單檔無建置 | 全檔（`<style>` + 內嵌 `<script>` + 3 個 CDN） | 全部 | Complete |
| NFR-102 | 固定邏輯解析度 | §1 `BASE_W/BASE_H`、§3 CSS `.canvas-container` | 全部 | Complete |
| NFR-103 | 響應式 | CSS `@media (max-width:1100px/720px)` + `#fab` | US-102 | Complete |
| NFR-104 | timer 驅動動畫 | §10 `animateValue()` | US-102 | Complete |
| NFR-105 | CDN 失敗提示 | §14 `boot()` 開頭檢查 | 全部 | Complete |
| NFR-106 | 儲存回退 | §3 `lsGet()` / `lsSet()` 記憶體回退 | US-104 | Complete |
| NFR-107 | ≤1100px 手冊轉 chip 列 | CSS `@media (max-width:1100px)` `.stage{grid-template-rows:auto minmax(0,1fr)}` / `.pb-list{flex-direction:row;overflow-x:auto}` / `.pb-item{flex:0 0 auto}` | US-105 | Complete |
| NFR-108 | 公尺制球場幾何 | §1 `PX_PER_M` / `COURT`（全部由公尺常數推導）、`THEME.line` 不透明度 0.94 | US-108 | Complete |
| C-101 | 不動 starter 檔 | 僅新增/修改 `index.html`、`doc/requirements.md` | 全部 | Complete |
| NFR-109 | 淺色主題對比度 | CSS `:root` 色彩 token（`--cream` / `--ink-soft` / `--muted` / `--brick` / `--blue`）、`THEME.line` / `THEME.lineGold` | US-112 | Complete |
| NFR-110 | 特效成本可控 | §10.5 `updateGlow()`（單一共用 Shadow、80ms）、`startTrails()` / `fadeOutTrails()`、`LIB_CACHE`、`prefersReducedMotion()` | US-112、US-113 | Complete |
| C-105 | 存檔格式向後相容 | §12 `saveTacticNamed()` / `loadTactic()`（`cue` / `desc` 選填） | US-112 | Complete |
| AC-111～AC-114 | 驗收 | 見下方「驗收紀錄」本輪段落 | 全部 | Verified |
| FR-139 | 點戰術即自動播放＋預設循環 | §1 `state.loop = true`、§12 `autoPlayLoaded()`（呼叫自 `loadLibraryTactic()` / `loadTactic()`）、§7 `setPlaying()` / `updateLoopBtn()` | US-115 | Complete |
| FR-140 | 換套先停舊動畫 | §10 `stopPlayback()`（Promise 由 `playAnimation()` `finally` 的 `state.playbackEnd` 解算）、§12 `await stopPlayback()` | US-115 | Complete |
| FR-141 | 自動播放守門條件 | §12 `autoPlayLoaded()`（`frames.length < 2`、`prefersReducedMotion()`、`state.exporting`） | US-115 | Complete |
| FR-142 | 右側「防守與球」面板 | HTML `.node-grid`（X1–X5 ＋ 球）、CSS `.node-grid`（3 欄、`.node{max-width:74px}`）、`.panel-note` | US-116 | Complete |
| FR-143 | 工具列收合 / 展開 | HTML `#sideCollapse`（`.sidebar-head`）、`#sideExpand`、CSS `.side-*`、§13 `readSideCollapsed()` / `setSideCollapsed()`、`bindUI()` 綁定、`enterCoachMode()` / `exitCoachMode()` | US-116 | Complete |
| FR-144 | 收合後球場重算居中 | CSS `.stage{--side-w}`、`@media (min-width:1101px)` 的 `body.side-collapsed` 規則（`.board-wrap{--board-h-chrome:226px}`、`.board-hint{display:none}`） | US-116 | Complete |
| FR-145 | 播放狀態提示 | §7 `updateHint()`（`state.playing` 分支）、`setPlaying()` 呼叫 | US-115 | Complete |
| FR-146 | ≤1100px 不受收合影響 | CSS `@media (max-width:1100px)` `.side-collapse{display:none}`、§13 `setSideCollapsed()` 寬度守門 | US-116 | Complete |
| NFR-111 | 停止延遲 ≤1.2s | §10 `stopPlayback()` / `playAnimation()` `finally`、§2 `showLoader('載入戰術…')` | US-115 | Complete |
| NFR-112 | 尊重減少動態 | §10 `prefersReducedMotion()`、§12 `autoPlayLoaded()` | US-115 | Complete |
| NFR-113 | 版面過渡不影響 canvas | CSS `.stage{transition:grid-template-columns .22s}`、`.board-wrap` 僅 CSS 縮放 | US-116 | Complete |
| C-106 | 收合僅 >1100px | CSS `@media (min-width:1101px)` / `(max-width:1100px)`、§13 `setSideCollapsed()` | US-116 | Complete |
| AC-115～AC-118 | 驗收 | 見下方「驗收紀錄（本輪：即點即播 + 防守與球面板 + 側欄收合）」 | 全部 | Verified |
| C-102 | 前端密碼 | §1 `COACH_PASSWORD` | US-101 | Complete |
| C-103 | 僅半場 | §4 `buildCourt()` | 全部 | Complete |
| C-104 | 本機資料風險 | §3 `store` / 提示文案 | US-104 | Complete |
| AC-101～AC-110 | 驗收 | 見下方「驗收紀錄」 | 全部 | Verified |
| FR-147 | 防守位置代號 | §1 `NODE_LABELS`（`def1:'PG'`…`def5:'C'`）、`DEF_LABELS_TEXT`、§5 `createPlayer()`（代號文字 17/20px @800、深藍 `THEME.blue`）、HTML `.node-grid` 6 顆節點鈕、`.def-btn` / `.def-badge` | US-117 | Complete |
| FR-148 | 防守輪轉推導 | §1 `DEFENSE_PRESETS` / `LIB_DEF`（`zone212` / `zone32`）、§5.5 `deriveDefense()`（球位位移＋最近防守者 closeout）、沿用 `manToManSpot()` | US-118 | Complete |
| FR-149 | 每步自動帶入防守 | §5.5 `materialiseTactic()`（`step.def` 缺省時呼叫 `deriveDefense()`）、§10 補間 | US-118 | Complete |
| FR-150 | 自訂防守與拖曳即存 | §1 `DEFENSE_PRESETS.custom`（`custom:true`）、HTML `#btnCustomDef`（`data-preset="custom"`）、§8 `applyDefensePreset()`（`preset.custom` 分支 → `enableCustomDefense()` / `markDefensePreset('custom')`）、§13 `onNodeModified()` → `saveCurrentFrame()` | US-119 | Complete |
| FR-151 | 開場預設 2-1-2 | §1 `state.customDefense = false`、§14 `boot()` → `markDefensePreset('212')` | US-110、US-118 | Complete |
| FR-152 | 球場隊徽浮水印 | §5 `LOGO_DATA_URI` / `buildCrest()` / `makeCrest()` / `requestCrestImage()` / `refreshCourtCrest()`、`courtGroup` 內 `isCrest` 物件 | US-120 | Superseded（見 FR-159） |
| FR-153 | 匯出檔名＝戰術名稱 | §1 `tacticFileName(ext)`、§11 `exportGif()` 下載名稱與 toast | US-121 | Complete |
| FR-154 | 進攻繪於防守之上 | §5.5 `materialiseTactic()`（defense → offense 推入順序）、§6 `loadObjects()` | US-109、US-118 | Complete |
| FR-155 | 球避開背號 | §5.5 `ballDisplayPoint()`（偏 (22,18)，< `GLOW_REACH` 70px） | US-109 | Complete |
| NFR-114 | 浮水印不污染 canvas | §5 `LOGO_DATA_URI`（base64 data URI）、`refreshCourtCrest()` | US-120 | Superseded（見 FR-159） |
| NFR-115 | 輪轉為一次性資料運算 | §5.5 `deriveDefense()`（O(5)、僅於 materialise 時呼叫） | US-118 | Complete |
| C-107 | 自訂防守不建庫 | §8 `enableCustomDefense()`（記憶體保存最後位置） | US-119 | Complete |
| AC-119～AC-123 | 驗收 | 見下方「驗收紀錄（本輪：防守代號／輪轉／自訂防守／隊徽／檔名／13 套戰術）」 | 全部 | Verified（AC-122 已撤銷） |
| FR-156 | 開場歡迎首頁（身分選擇） | HTML `<section id="splash">`（`.splash-card` / `#enterPlayer` / `#enterCoach`）、CSS `.splash*`、JS `showSplash()` / `hideSplash()` / `isSplashOpen()` | US-122 | Complete |
| FR-157 | 身分流轉與返回首頁 | JS `enterPlayerMode()` / `enterCoachFromSplash()` / `backToSplash()`、`enterCoachMode()` 內 `hideSplash()`、HTML `#btnHome` | US-122、US-123 | Complete |
| FR-158 | 首頁期間不穿透快捷鍵 | JS `handleKeydown()`（首行 `isSplashOpen()` 守門）、`boot()` → `showSplash()` | US-122、US-123 | Complete |
| FR-159 | 球場移除全部浮水印 | §4 `buildCourt()`（漸層 `#F7FAFD → #EDF3F8 → #EBF1F6`、刪除 `markA` / `markB` / `buildCrest()`）、§5 刪除 `LOGO_DATA_URI` / `CREST` / `makeCrest()` / `requestCrestImage()` / `refreshCourtCrest()` | US-120（撤銷） | Complete |
| FR-160 | 經典戰術 3 分類 7 套 | §1 `LIB_CATEGORIES` / `TACTIC_LIBRARY`（`beat212-elbow` / `beat212-highlow` / `beat32-skip` / `beat32-shortcorner` / `blob-stack` / `blob-box` / `blob-elevator`）、HTML `#pbScroll .pb-cat` ×3、§12 `renderLibrary()` | US-124 | Complete |
| FR-161 | 右側工具列重排 | HTML `#sidebar`（名單 → 防守陣型 → 戰術線條 → 動作 → `<details id="defBallPanel">`）、CSS `.panel-collapse` / `.panel-title` / `.panel-sub` | US-116、US-124、US-128 | Complete |
| FR-162 | 名單背號升冪＋位置 | §1 `ROSTER`（18 筆含 `pos`）、§8 `buildRosterPanel()`（`sort((a,b)=>a.no-b.no)`、`<em>` 位置行） | US-125 | Complete |
| FR-163 | 名單位置篩選 | HTML `#posChips`（4 顆 `.pos-chip`）、§1 `state.rosterFilter`、§8 `ROSTER_FILTERS` / `rosterMatchesFilter()` / `syncPosChips()`、`bindUI()` chip 綁定、CSS `.pos-chip` | US-125 | Complete |
| NFR-116 | 首頁圖層與關閉可靠 | CSS `.splash{z-index:76}` / `.splash[hidden]{display:none}` / `body.splash-open .app{pointer-events:none}` | US-122 | Complete |
| NFR-117 | 首頁響應式無溢出 | CSS `@media (max-width:860px)`、`@media (max-width:720px)`（`.home-btn` 只留圖示） | US-122 | Complete |
| NFR-118 | 名單渲染成本不變 | §8 `buildRosterPanel()`（18 筆一次性重建）、`rosterMatchesFilter()` | US-125 | Complete |
| C-108 | 位置為人工靜態資料 | §1 `ROSTER[].pos` | US-125 | Complete |
| FR-164 | ~~手機／平板隱藏快捷鍵卡~~（已撤銷） | 卡片已整塊刪除，見 FR-177 | US-126 → US-128 | Superseded |
| FR-165 | 手冊頂部「＋ 新增戰術」與名稱框 | HTML `.pb-new-row.coach-only`（`#pbNewTactic` / `#pbNameInput` / `.pb-name-hint`）、CSS `.pb-new` / `.pb-new-en` / `.pb-name-field` / `.pb-name-label` / `.pb-name-input` | US-126 | Complete |
| FR-166 | 新增戰術流程 | §9 `newTactic()`（`isCoach()` 守門、`confirmDialog` 二次確認、`clearBoardObjects()` ＋ `addFormation()`、重設 `state.frames` / `tacticId` / `tacticName`） | US-126 | Complete |
| FR-167 | 名稱框同步與直接存檔 | §12 `syncTacticNameField()` / `focusTacticNameField()`、`applyMode()` 與 `renderPlaybook()` 尾端呼叫、`bindUI()` 綁 `#pbNewTactic` 與 `#pbNameInput`、`openSaveDialog()` 先讀輸入框再決定是否跳命名彈窗 | US-126 | Complete |
| FR-168 | 身分切換重繪手冊 | §13 `enterCoachMode()` / `exitCoachMode()` 內 `renderPlaybook()`、§12 `renderPlaybook()` 空清單文案 | US-126 | Complete |
| NFR-119 | 純 CSS 精簡、輸入框不觸發縮放 | CSS `@media (max-width:1100px)`、`@media (max-width:720px) .pb-name-input{font-size:16px}` | US-126 | Complete |
| C-109 | 新增戰術不會自動存檔 | §9 `newTactic()`（只重設畫布與 state，存檔仍靠 `saveTacticNamed()`） | US-126 | Complete |
| AC-124～AC-129 | 驗收 | 見下方「驗收紀錄（本輪：開場首頁／去水印／7 套 3 分類／側欄重排／名單排序與篩選）」 | 全部 | Verified |
| AC-130～AC-134 | 驗收 | 見下方「驗收紀錄（本輪：手機隱藏快捷鍵卡 + 手冊「➕ 新增戰術」）」 | 全部 | Verified |
| FR-169 | 拖曳即記錄（不需再按儲存） | §8 `bindCanvasEvents()`（`object:moving` / `object:modified`）、`onNodeModified()` → `finalizeNodeDrag()`、`onCanvasDown()` → `beginNodeDrag()` | US-127 | Complete |
| FR-170 | 持球者帶球運球＋波浪線 | §8.4 `beginNodeDrag()`（`held` / `ballDx` / `ballDy`）、`onNodeMoving()`、`DRAG_EPS` / `DRAG_LINE_MIN` | US-127 | Complete |
| FR-171 | 自動線型別（運球／切入／防守移動／傳球） | §1 `LINE_COLORS.def` / `LINE_LABELS.def`、§8.4 `makeAutoLine()`（`LINE_TRIM` 與 `len×0.2` 縮放）、§5 `buildLineObj()` | US-127 | Complete |
| FR-172 | 拖球＝傳球（候選圈／吸附／空地提示） | §8.4 `nearestOffense()` / `highlightPassTarget()` / `clearPassHighlight()` / `placeBallInHand()` / `finishBallDrop()`、`PASS_SNAP` / `BALL_IN_HAND` | US-127 | Complete |
| FR-173 | 傳球同步下一步＋護欄 | §8.4 `syncBallToNextFrame()`（`GLOW_REACH` 距離護欄） | US-127 | Complete |
| FR-174 | 「＋」不繼承自動軌跡 | §9 `addStep()`（filter `!obj.autoLine`）、§7 `serializeCanvas()`（`toObject([... 'autoLine'])`） | US-127 | Complete |
| FR-175 | 自動線圖層＋球感應區 | §8.4 `makeAutoLine()`（`canvas.moveTo(line, 1)`）、§5 `createBall()`（+13px 透明 `hit` 圓） | US-127 | Complete |
| FR-176 | 拖曳 undo 快照與守門 | §7 `pushUndo(snapshot)`、§8.4 `beginNodeDrag()` 內 `snapshot`、`onNodeModified()` / `onNodeMoving()` 的 `isCoach()` / `state.playing` / `state.exporting` / `state.tweening` 守門 | US-127 | Complete |
| NFR-120 | 同步計算、不累積監聽器 | §8.4（無 timer）、§8 `bindCanvasEvents()` 單次綁定 | US-127 | Complete |
| C-110 | `def` 不進手動工具列 | §1 `LINE_TOOLS`（仍 4 種）、§8.4 `finalizeNodeDrag()` 依 `target.kind` 決定線型 | US-127 | Complete |
| AC-135～AC-142 | 驗收 | 見下方「驗收紀錄（本輪：直覺拖曳記錄模式）」 | 全部 | Verified |
| FR-177 | 快捷鍵卡自 DOM 整塊刪除 | HTML `#sidebar`（移除 `<section class="panel panel-tips">`）、CSS（移除 `.panel-tips` / `kbd` / 媒體查詢 `.panel-tips{display:none}`） | US-128 | Complete |
| FR-178 | 手機防誤觸（touch-action ＋ 裝置別門檻） | CSS `.board-holder .canvas-container`/`canvas` 的 `touch-action:none`、§8.4 `DRAG_EPS`(6) / `DRAG_EPS_TOUCH`(10) / `dragEpsOf()` / `beginNodeDrag(target, evt)` | US-128 | Complete |
| NFR-121 | 純 CSS 宣告、無新增 JS 成本 | CSS `touch-action`、§8.4 `nearestOffense()`（`containsPoint` 優先、`PASS_SNAP` 後備） | US-128 | Complete |
| C-111 | 鍵盤快捷鍵功能保留 | §13 `handleKeydown()`（未改動） | US-128 | Complete |
| FR-189 | 手機只留一套步驟控制 | HTML 刪除 `.mobile-dock`（`#stepThumbs`／`#stepCards`／`#defQuick`）、`#lockBadge` 與「球員模式」提示字；JS 刪除 `thumbSvg()`／`renderStepDock()`／`buildDefQuick()`（含呼叫）與 lockBadge 切換；CSS 刪除 `.mobile-dock`／`.def-quick`／`.dock-*` 共 42＋9 行 | US-129 | Complete |
| FR-190 | 球場 100vw、忠實比例、無圓角 | CSS `@media (max-width:767px)`：`.stage{display:flex;flex-direction:column;padding:0}`、`.board-panel{flex:1}`、`.board-restrict{flex:0 0 auto;align-items:flex-start}`、`.board-wrap{width:100%;max-width:min(100%,calc((100dvh - 200px)*1.0638));border:0;border-radius:0;box-shadow:none}` | US-129 | Complete |
| FR-191 | Header 精簡到 44px | HTML `.brand-short`（`Monday<em>Beer</em>`）；CSS 隱藏 `.brand-han`／`.brand-title`／`.brand-sub`、`.brand-logo` 30px、`.mode-btn` 11px、`#btnHome` 只留 `⎋`（`.hb-txt` 隱藏）、`.store-pill` 隱藏 | US-129 | Complete |
| FR-192 | 底部動作列（Grid 重排，不複製 DOM） | CSS `.stepbar{display:grid;grid-template-areas:"play steps steps book tools" "acts acts acts save save"}`、球員模式 `"play steps steps book gif"`；隱藏 `#btnPrev`／`#btnNext`／`#frameCounter`／`#btnDupStep`／`#btnDelStep`／`.v-divider`／`.spacer` | US-129 | Complete |
| FR-193 | `播放／暫停` 長短標籤 | HTML `#btnPlay` 加 `.lbl-long`／`.lbl-short`；§7 `setPlaying()` 同步改寫兩個 span；CSS 桌機顯示長標籤、手機顯示短標籤 | US-129 | Complete |
| FR-194 | 步驟膠囊自動捲到中央 | §9 `renderStepUI()` 尾端 `activeChip.scrollIntoView({block:'nearest',inline:'center'})`（播放／匯出中不捲動） | US-129 | Complete |
| FR-195 | 當前步驟唯讀資訊卡 | ~~HTML `#stepInfo`；§9 `renderMobileStepInfo()`；CSS `.mobile-stepinfo`~~ **（US-132 已移除：資訊改由選取中的長卡片自己顯示，見 FR-215／FR-216）** | US-129 | Superseded |
| FR-196 | 教練工具／戰術手冊＝Bottom Sheet | CSS `.playbook,.sidebar{position:fixed;left:0;right:0;top:auto;bottom:0;max-height:var(--sheet-max,46dvh);border-radius:20px 20px 0 0;transform:translateY(calc(100% + 34px))}` ＋ `.is-open{transform:none}` ＋ `::before` 把手；`enterCoachMode()` 手機不自動彈出 | US-129 | Complete |
| FR-197 | 抽屜永不加蓋球場（動態限高） | §13 `updateSheetLimit()`：量測 `.board-wrap` 與 `.mobile-stepinfo` 下緣 → `documentElement.style.setProperty('--sheet-max', …)`；`resize`／`orientationchange`（延遲 240ms）重算 | US-129 | Complete |
| FR-198 | 下滑或點背幕關閉抽屜 | §13 `enableSheetDrag()`（把手／標題區 64px 內起拖、`scrollTop>0` 不接管、位移 >min(150px, 30%) 或 340ms 內快滑即關閉）、`syncSheetScrim()`（兩張抽屜共用 `#pbScrim`、互斥開啟）、`.pb-head,.sidebar-head{touch-action:none}`；工具抽屜關閉鈕沿用 `.side-collapse`（手機改顯 `✕`） | US-129 | Complete |
| FR-199 | GIF／複製／刪除步驟收進工具抽屜 | HTML `#btnGifSheet`／`#btnDupStepSheet`／`#btnDelStepSheet`（`.sheet-only`，僅手機顯示）；§7 `setPlaying()`／`setExporting()` 同步 `disabled`；`bindUI()` 綁定到既有 `exportGif`／`duplicateStep`／`deleteStep` | US-129 | Complete |
| NFR-122 | 桌面／平板零回歸 | 全部新規則包在 `@media (max-width:767px)`；768–1100px 維持原左右抽屜、>1100px 維持三欄＋側欄收合（實測 820×1180 與 1280×900 的 `.stage`／`--sheet-max`／資訊卡皆維持原狀） | US-129 | Verified |
| NFR-123 | 觸控目標 ≥36–40px | `.step-chip`／`#btnPlay`／`#btnLoop`／`#pbToggle`／`#sideToggle`／`#btnGif` 皆 40px，`.step-actions .icon-btn`／`#btnSaveTactic` 36px | US-129 | Complete |
| NFR-124 | 不新增重複事件綁定 | 底部列僅用 CSS Grid 重排既有 `.stepbar` 子元素（未複製按鈕、未重綁事件） | US-129 | Complete |
| C-112 | 幾何限制：1000×940 畫布在 390px 寬只能是 366px 高（43.4vh），無法同時「100vw ＋ 60–65vh ＋ 不變形」；選擇不裁切，留白交給資訊卡與 Bottom Sheet | `.board-wrap` 的 `1.0638` 比例計算 | US-129 | Accepted |
| C-113 | 景觀（寬 >767px）沿用平板抽屜規則，不套用手機版 | `@media (max-width:767px)` 邊界 | US-129 | Accepted |
| AC-143～AC-150 | 驗收 | 見「驗收紀錄（本輪：手機版專業運動 App 版面重構）」 | US-129 | Verified |
| FR-200 | 桌面預設手機框（≥768px） | `<head>` inline script 判定 → `<html class="phone-frame">`；HTML `#phoneShell > .ps-stage > .ps-device > iframe#phoneView`；CSS `html.phone-frame .phone-shell`（`position:fixed`、深色底 `#1e293b`）、`html.phone-frame body > :not(#phoneShell){display:none}` | US-130 | Complete |
| FR-201 | 框內是真實手機環境（同源 iframe） | §14 `initPhoneFrame()`：`view.src = location.pathname + '?phone=1'`；框內 `innerWidth` = 390、`100dvh` = 框高、`matchMedia('(max-width:767px)')` 命中、`isMobileSheet()` 為 `true`；外殼本體 `boot()` 不執行（不多開一份 canvas／狀態） | US-130 | Complete |
| FR-202 | 真機自動解除外框 | head script：`innerWidth < 768`、`(hover:none) and (pointer:coarse)`（手機橫向／iPad）、`?full=1`、已在 iframe 內 → 不加 `phone-frame`；§14 `initViewportGuard()` 於 `resize` 跨過 768px 時 `location.reload()` 自動換視角 | US-130 | Complete |
| FR-203 | 桌面版逃生門（`?full=1`） | `.ps-bar` 內 `#phoneExit`（`🖥 桌面視窗`）→ `location.pathname + '?full=1'`；瀏覽器上一頁即回到手機框（不寫 localStorage，預設永遠回到手機視角） | US-130 | Complete |
| FR-204 | 說明列顯示真實尺寸 | §14 `syncPhoneSizeLabel()`：量測 `#phoneView` 的 `getBoundingClientRect()` → 寫入 `#psSize`（load／resize 更新，實測 1440×900 → `390 × 760`） | US-130 | Complete |
| FR-205 | 提示條不壓底部動作列 | CSS `@media (max-width:767px)`：`.toast-stack{bottom:calc(118px + env(safe-area-inset-bottom,0px))}`、`body[data-mode="player"] …{bottom:calc(76px …)}` | US-130 | Complete |
| FR-206 | 矮視窗抽屜下限放寬 | §13 `updateSheetLimit()` 下限 `220px → 150px`（1280×720 的筆電、手機橫向仍可操作；內容本身可捲動） | US-130 | Complete |
| NFR-125 | 桌面／平板零回歸 | 新規則全部掛在 `html.phone-frame` 或 `@media (max-width:767px)` 之下；`?full=1` 與 <768px 完全不套用（實測 1440×900 `?full=1`、375×812、820×1180 皆維持原版面與原 `boot()` 流程） | US-130 | Verified |
| C-114 | 框尺寸取捨：螢幕寬固定 390，高 `min(844, 100dvh − 140)` | CSS `.ps-stage{--ps-w:min(390px,calc(100vw - 44px))}`、`--ps-h:min(844px,calc(100dvh - 140px))`；1440×900 視窗實測 390×760（不足 844 是為了容納邊框與說明列） | US-130 | Accepted |
| C-115 | 外框只在「滑鼠／觸控板為主」的裝置啟用 | head script `matchMedia('(hover: none) and (pointer: coarse)')` → 真平板（iPad）直接吃原生版面，不套框 | US-130 | Accepted |
| AC-151～AC-154 | 驗收 | 見「驗收紀錄（本輪：桌面手機框預覽模式）」 | US-130 | Verified |
| FR-207 | 手機底部只有一張白底控制卡 | CSS `@media (max-width:767px)`：`.stage{order:2;flex:0 0 auto;background:none}`（灰底漸層移除）＋ `.stepbar{order:3;flex:1 1 auto;display:grid;background:#FFFFFF;border-radius:18px 18px 0 0;box-shadow:0 -10px 26px}`；量測 390×844 `.board-wrap` 下緣 411 = `.stepbar` 上緣 411（間隙 0）、卡片高 433、`stage` `background-image:none` | US-131 | Verified |
| FR-208 | 步驟說明成為卡片第一列 | 把 `<div class="mobile-stepinfo" id="stepInfo">` 從 `.board-panel` 搬進 `.stepbar` 最前面（`grid-area:info`）；`.si-name` 15px、`.si-desc` 12px／clamp 4、底線分隔；桌機由 `.mobile-stepinfo{display:none}` 隱藏（實測 1440 寬 `offsetParent === null`） | US-131 | Complete |
| FR-209 | 步驟按鈕組改為兩欄大按鈕、吃滿卡片高度 | ~~`.steps{grid-template-columns:repeat(2,minmax(0,1fr))}`＋`.step-chip{min-height:46px}`~~ **（US-132 改為單欄長卡片，見 FR-216）** | US-131 | Superseded |
| FR-210 | 播放鍵手機顯示暫停圖示 | `#btnPlay` 內 `<span class="ico ico-full">■／▶</span><span class="ico ico-short">⏸／▶</span>`；`.ico-short{display:none}` 全域、手機 `#btnPlay .ico-short{display:inline}`＋`.ico-full{display:none}`（實測 mobile `short=block`／`full=none`，desktop 相反） | US-131 | Complete |
| FR-211 | 戰術手冊抽屜放大到 78dvh | CSS `.playbook{height:78dvh;max-height:calc(100dvh - 56px)}`；實測 390×844 → 658px（0.78）、375×667 → 520px（0.78）、360×740 → 577px（0.78）；教練工具 `.sidebar` 仍用 `--sheet-max`（390×844 實測 421px、上緣 423 > 球場下緣 411，不遮球場） | US-131 | Verified |
| FR-212 | 手冊兩層導覽：分類 → 子頁面 | DOM `.pb-views > .pb-main-view`（原 `.pb-scroll`＋`.pb-foot`）＋ `.pb-sub-view#pbSubView`（`#pbSubBack`／`#pbSubTitle`／`#pbSubEn`／`#pbSubCount`／`#pbSubList`）；§14 `openPlaybookCategory()`／`closePlaybookCategory()`／`renderPlaybookCategoryList()`／`syncSubActive()`；`$$('.pb-cat > summary')` 僅在 `isMobileSheet()` 攔截並 `preventDefault()`（`.pb-cat[data-cat]`），CSS 以 `.playbook.is-sub` 左右滑動切換、`.pb-cat-list{display:none}`；關閉抽屜一律重置回分類頁 | US-131 | Verified |
| FR-213 | 提示條一次只顯示一則、1.5 秒淡出 | §3 `toast()` 改為模組級 `toastNode`／`toastTimer`：先 `remove()` 舊節點再 append（實測連發兩則 → `#toastStack.children.length === 1`），`TOAST_MS = 1500` 後 200ms 淡出（1.8s 後實測 0 個） | US-131 | Verified |
| FR-214 | 移除會遮畫面的噪音提示 | `autoPlayLoaded()`（3 則）、`playAnimation()` 的停止／完成 2 則、`toggleLoop()`、「工具列收合」共 7 則提示刪除；保留儲存／雲端／載入／刪除／改名／匯出／錯誤提示（訊息同步縮短） | US-131 | Complete |
| NFR-126 | 桌面／平板零回歸 | 全部新規則在 `@media (max-width:767px)` 內；1440×900 `?full=1` 實測 `.stepbar` 仍 `display:flex`／高 54、`#stepInfo` 隱藏、`#playbook` `position:static` 232px、`.pb-cat-list` 可展開、`?phone=1` 手機框外殼（390×760）正常 | US-131 | Verified |
| C-116 | 兩張抽屜抽離「限高」策略 | 手冊改固定 78dvh（可覆蓋球場下半部，由 `#pbScrim` 背幕提示）；`updateSheetLimit()` 只服務教練工具，並移除對 `.mobile-stepinfo` 的依賴（該元素已移入卡片） | US-131 | Accepted |
| AC-155～AC-160 | 驗收 | 見「驗收紀錄（本輪：手機單一控制卡＋手冊兩層清單＋提示條收斂）」 | US-131 | Verified |
| FR-215 | 移除重複的當前步驟資訊列 | 刪除 HTML `<div class="mobile-stepinfo" id="stepInfo">`（`#stepInfoIdx`／`#stepInfoName`／`#stepInfoDesc`／`#stepInfoCue`）、§9 `renderMobileStepInfo()` 與 `renderStepUI()` 內的呼叫、CSS `.mobile-stepinfo` 整段（47 行）與 `.brand-short,…,sheet-only` 清單中的 `.mobile-stepinfo`；全檔已無 `stepInfo` 字樣（實測 `!document.querySelector('#stepInfo')`） | US-132 | Verified |
| FR-216 | 步驟清單＝單欄縱向長卡片 | CSS `@media (max-width:767px)`：`.steps{display:flex;flex-direction:column;gap:10px;overflow-y:auto;justify-content:safe center}`、`.step-chip{flex:1 1 auto;align-items:center;gap:10px;width:100%;min-height:78px;max-height:118px;padding:9px 12px;border-radius:14px;background:#fff;border:1px solid #F1F5F9;overflow:hidden}` | US-132 | Verified |
| FR-217 | 卡片內容＝徽章＋名稱＋機會標籤＋跑位說明＋右側指示 | §9 `renderStepUI()` 產生 `.step-idx`（28×28 圓角徽章）＋`.step-body > .step-head(.step-name 14px/800 ＋ .step-cue)`＋`.step-desc`（12px/500、`-webkit-line-clamp:2`）＋`.step-hint`（`::before{content:"›"}`）；`aria-selected`／`aria-current="step"` 同步（實測 390×844 名稱 `雙肘落位／球進左肘／底角分球／內傳內放籃`、說明 25–39 字、機會標籤 4 組皆正確帶入） | US-132 | Verified |
| FR-218 | 選取中卡片品牌高亮＋播放指示＋按壓回饋 | `.step-chip.is-active{background:linear-gradient(180deg,#C25239,#A83E28);border-color:var(--brick);box-shadow:0 8px 20px rgba(180,70,47,.26)}`＋白字（`.step-name/.step-desc/.step-cue` 覆寫）、`.step-idx` 轉白底磚紅字、`.step-hint::before{content:"●";font-size:8px}`、播放中 `.is-active.is-live` 套 `stepPulse`（1.1s 縮放＋淡出）；所有卡片 `:active{transform:scale(.98)}`；`setPlaying()` 改為一律重繪以同步 `is-live`（實測播放中 `liveChip=true`、`::before` 為 `"●"`） | US-132 | Verified |
| FR-219 | 有空間就長高、不夠就自己捲動（＋底部淡出） | 卡片 `flex:1 1 auto;max-height:118px`＋`.steps{justify-content:safe center}`（不溢出時整組垂直居中、溢出時退回起點不裁切）；`syncStepsScrollFade()`（`renderStepUI()`／`ResizeObserver`／`scroll` 觸發）在「下面還有卡片」時加 `.steps.is-scrollable`，以 20px 漸層 `mask-image` 淡出底部；`renderStepUI()` 的 `scrollIntoView` 改 `block:'nearest'`，且播放中也跟隨（僅縱向溢出時） | US-132 | Verified |
| FR-220 | Toast 貼齊控制卡上緣 | §13 `initStepbarMetrics()`：`ResizeObserver` 監看 `.stepbar` → 把高度寫進 `--stepbar-h`；手機 `.toast-stack{bottom:calc(var(--stepbar-h,101px) + 12px)}`（原本固定 96px，會壓在卡片上）；實測 390×844 `--stepbar-h=433px`、提示條下緣與卡片上緣間距 **12px** | US-132 | Verified |
| FR-221 | 矮螢幕卡片收斂 | `@media (max-width:767px) and (max-height:760px)`：`.step-chip{min-height:66px;padding:7px 11px;gap:9px}`、`.step-idx{26×26}`、`.step-desc{-webkit-line-clamp:1}`（375×667 與 360×740 實測卡片 66px，360×740 清單僅需再捲 11px） | US-132 | Verified |
| NFR-127 | 桌面／平板零回歸（同一份 DOM） | 新增的包裝層桌機用 `.step-body,.step-head{display:contents}`、`.step-desc,.step-cue,.step-hint{display:none}` 完全透明；1440×900 `?full=1` 實測 `.stepbar` 仍 `display:flex`／54px、`.step-chip` 33px 高／100px 寬／`padding:6px 11px`／12.5px 字、`.step-desc` 與 `.step-hint` 為 `display:none`、頁面無水平捲動（`docScrollWidth 1440 = innerWidth`） | US-132 | Verified |
| C-117 | 幾何限制：手機直向「球場 100vw ＋ 卡片說明」不可能全部同時看到 | 390×844 球員清單可視 358px（4 步剛好 82.1px／張、不需捲動）；教練模式只剩 314px（4×78＋gap＝342，需捲 28px）；375×667 僅 196px、360×740 僅 283px → 這兩個尺寸的步驟清單一定會捲動（已用底部淡出＋自動跟隨當前步驟處理），屬可接受取捨 | US-132 | Accepted |
| AC-161～AC-166 | 驗收 | 見「驗收紀錄（本輪：手機步驟長卡片）」 | US-132 | Verified |
| FR-222 | 繪製權限與教練特權分離 | §13 `canEdit()`／`isCoach()`／`applyMode()`（`body[data-mode]`＋`body[data-edit]`） | US-133 | Verified |
| FR-223 | 「＋ 新增戰術」免密碼 | §9 `newTactic()`（`state.editing = true`、`focusTacticNameField()`、手機收起手冊）、HTML `.new-tactic-btn` | US-133 | Verified |
| FR-224 | 唯讀統一提示、不再跳密碼框 | §9 `needDrawMode()` 掛在 `[data-tool]`／工具鈕／`#btnSaveStep`／`handleKeydown()`；`#pbTools` 另給「唯讀模式…」提示 | US-133 | Verified |
| FR-225 | ~~步驟列上方輕量列~~（已由 US-139 的編輯 4 鍵＋工具面板取代） | ~~CSS `#editRow`、§9 `syncEditRow()`~~ → `#editKeys`／`syncToolbar()` | US-133 → US-139 | Superseded |
| FR-226 | ~~手機底部 4 鍵＋手冊工具列~~（已由 US-139 的 `panel`／`steps`／`keys` 版面取代） | ~~CSS `.stepbar` `grid-template-areas`~~ → `.stepbar` `panel/steps/keys`、`#playKeys`／`#editKeys` | US-133 → US-139 | Superseded |
| FR-227 | 儲存對話框角色切換 | HTML `#saveModal`（`.role-seg`／`#savePerson`／`#saveCode`／`#saveOk`）、§12 `setSaveRole()`／`openSaveDialog()` | US-134 | Verified |
| FR-228 | 提案／發布寫入 `meta` | §12 `submitSaveForm()`、`saveTacticNamed()`（`meta.status`／`authorLabel`／`author`／`approvedAt`、`enterCoachMode(true)`） | US-134 | Verified |
| FR-229 | 手冊未批核標記與排序 | §14 `renderPlaybook()`（`.pb-pending-tag`、`by #0 陳生`、已批核優先） | US-134 | Verified |
| FR-230 | 「✏️ 修改提案」另存新紀錄 | §9 `startProposalEdit()`（`tacticId = null`、名稱加「 提案」、`tacticStatus = null`） | US-134 | Verified |
| FR-231 | 批准／修改後批核 | §9 `approveTactic()`／`approveAfterEdit()`（`state.approveOnSave`） | US-134 | Verified |
| FR-232 | 批核狀態雙路寫入 | §3 `store.setStatus()`（本機 `localSetStatus`／雲端 `sbSetStatus`，只改 `meta`） | US-134 | Verified |
| FR-233 | 載入／離開時關閉繪製 | §9 `loadTactic()`／`loadLibraryTactic()`、§13 `applyMode()`／`exitCoachMode()` | US-134 | Verified |
| FR-234 | GIF 擷取共用 | §12 `captureGif()`（`exportGif()`／`shareTactic()` 共用，`try/finally` 收尾） | US-135 | Verified |
| FR-235 | 一鍵分享到 WhatsApp | §12 `shareTactic()`、HTML `#btnShare`（原生分享 → 下載 GIF ＋ `wa.me`） | US-135 | Verified |
| NFR-128 | 單一守門來源、桌機零回歸 | 只有 `applyMode()` 寫 `body[data-edit]`；新元素桌機 `display:none` | US-133 | Verified |
| NFR-129 | 批核狀態不需 migration | `meta` JSONB 擴充欄位；缺欄位視為 `approved` | US-134 | Verified |
| NFR-130 | 分享／匯出共用擷取、必定收尾 | §12 `captureGif()` 的 `try/finally`（loader／`state.exporting`／畫面還原） | US-135 | Verified |
| C-118 | 繪製模式非權限控管 | 前端便利性設計；真正保護＝提案不覆寫＋批核暗號 | US-133 | Accepted |
| C-119 | 暗號為前端比對 | §1 `COACH_APPROVE_CODE`／`COACH_PASSWORD` | US-134 | Accepted |
| C-120 | 提案不做 diff／不主動推送 | `saveTacticNamed()` 另存一筆；教練需重整或按 `↻` | US-134 | Accepted |
| AC-167～AC-176 | 驗收 | 見下方「驗收紀錄（本輪：免帳號繪製＋提案批核＋一鍵分享）」 | US-133～135 | Verified |
| AC-143～AC-144 | 驗收 | 見下方「驗收紀錄（本輪：移除快捷鍵卡 + 手機防誤觸）」 | 全部 | Verified |

---

## ✅ 驗收紀錄（headless Chrome 自動化測試）

以 Chrome headless（`--headless` ＋ `--dump-dom` ＋ `--virtual-time-budget`）載入 `index.html`，注入測試腳本模擬真實滑鼠事件與 API 呼叫，結果 **86/86 PASS**（原有 44 項回歸全數保留，另新增 42 項本輪檢查）：

| 檢查項 | 結果 |
| --- | --- |
| fabric.js / gifshot / supabase-js CDN 載入 | PASS |
| 球場＋節點物件數 12（球場群組 1 + 10 球員 + 1 球） | PASS |
| 預載步驟數 2、步驟 chip 2 個 | PASS |
| `.canvas-container` 縮放 693×651（畫布 1000×940） | PASS |
| 教練模式解鎖、工具列顯示 | PASS |
| 以合成 `mousedown/mousemove/mouseup` 繪製切入線（物件 12 → 13） | PASS |
| 線條標記 `kind=line` / `lineType=cut` / `nodeId` | PASS |
| 拖曳移動節點並寫回座標 | PASS |
| 新增步驟（2 → 3）、步驟物件序列化 12 筆 | PASS |
| `store.save` / `list` / `load` / `remove`（localStorage） | PASS |
| 播放動畫完成且回到原步驟 | PASS |
| `canvas.toDataURL()` 輸出正常（約 370KB） | PASS |
| 序列化來回一致、載入後球場仍在 | PASS |
| 戰術手冊渲染清單項目、名稱正確 | PASS |
| 點擊手冊項目即載入該戰術（`state.tacticId` 對應） | PASS |
| 循環播放預設關閉；開啟／關閉與 `aria-pressed` 同步 | PASS |
| 播放中按鈕變「停止播放」，再按一次確實中止並回到原步驟 | PASS |
| 名單面板渲染 18 顆背號按鈕 | PASS |
| `off3` 自動帶入名單身份（34 / Kenny）、節點內含背號＋姓名兩個文字物件 | PASS |
| 名單面板 `is-on` 狀態與場上球員一致 | PASS |
| 點背號 99 派上場（`nodeId=p99`）、進攻節點數 +1 | PASS |
| 序列化保留 `rosterNo` / `playerName` | PASS |
| 重新載入步驟後名單身份仍存在（`雞`） | PASS |
| 切回球員模式且「已鎖定」提示可見 | PASS |

本輪（US-108～111）新增的 42 項檢查：

| 檢查項 | 結果 |
| --- | --- |
| 隊徽 `<img>` 實際載入（`naturalWidth` 1408、渲染 46×46 圓形） | PASS |
| `PX_PER_M` = 66.667、籃框 y = 105、三分 r = 450、底角 x = 60 | PASS |
| 三分直線與弧線交會 y = 199.34（由 √(r²−d²) 推導） | PASS |
| 球場群組 21 個子物件、且不進入序列化 | PASS |
| 有名球員節點外框 53.5px（≈50 + 3.5 stroke）、3 個子物件 | PASS |
| 姓名 12.5px、寬度 38.6px 未超出圓直徑 | PASS |
| 防守節點外框 51.5px（≈48 + 3.5 stroke） | PASS |
| `#defGrid` 有 4 顆 `.def-btn` | PASS |
| 2-1-2 → X1(500,340)、X2(300,505)、X4 y=165 | PASS |
| 2-3 → X1 y=150、X4 x=300 | PASS |
| 3-2 → X1 y=465、X2 x=290 | PASS |
| 套用後按鈕 `.is-on` 標記 | PASS |
| 人盯人 → X1 落在 (500,540)，與自己的人距離 120px（≥52） | PASS |
| 套用防守陣型後寫入目前步驟（`state.frames[i].objects`） | PASS |
| 套用後 `undo()` 可回到前一個陣型 | PASS |
| `Ctrl+Z` 鍵盤復原節點位置 | PASS |
| `#btnLibrary` 已移除、GIF／PNG 匯出仍在 | PASS |
| 儲存對話框開啟、預設名稱「新戰術 1」、`nextTacticName()` 遞增 | PASS |
| 送出表單後 `state.tacticName` 更新、手冊出現同名列（含 2 顆動作鈕） | PASS |
| ✎ 改名：對話框帶入原名 → 重新命名後清單與 localStorage 紀錄同步 | PASS |
| 🗑 刪除：二次確認 → 該列消失、清單索引同步、空清單顯示提示 | PASS |
| `Esc` 可取消命名對話框（Promise 回傳 `null`） | PASS |
| 球員模式下 `.pb-actions` 為 `display:none` | PASS |

**未經自動化驗證**：GIF 實際編碼（headless 環境的 Web Worker 與虛擬時間會互相干擾，無法穩定取得結果）。此路徑已有 `typeof gifshot` 檢查、`try/catch` 與進度條保護，建議在真實瀏覽器按一次「導出 GIF」確認。

**視覺／版面驗收**：桌面 1500×950、1200×1000 與行動版 500×900 三種尺寸實測通過（FIBA 半場比例 15m×14.1m 正確、三分弧與底角位置正確、右側工具列 4+4+3 節點排列、防守陣型 2×2 面板、手冊列 ✎／垃圾桶圖示、線條圖示、步驟 chip、鎖定提示皆正常）：

| 尺寸 | `.stage` 欄寬 | 戰術手冊 | `body.scrollWidth` |
| --- | --- | --- | --- |
| 1484×855（球員模式） | `232px / 1206px` | 左欄 232×707，直立清單 | 1484（＝視窗寬，無溢出） |
| 1484×855（教練模式） | `232px / 874px / 318px` | 左欄 232×707 | 1484（無溢出） |
| 1184×905（教練模式） | `232px / 574px / 318px` | 左欄 232×757 | 1184（無溢出） |
| 500×805 | `480px`，列高 `auto / 1fr`（舊版） | 舊版為橫向 chip 列；本輪已改為左側抽屜＋底部 dock（見下節） | 500（無溢出） |

名單面板 18 顆按鈕（4 欄 × 5 列）完整顯示、五名先發（1 / 5 / 34 / 0 / 31）自動標示 `is-on`；場上球員圓圈上半背號、下半姓名皆清晰可讀。

---

## ✅ 驗收紀錄（本輪：淺色白板風 + 特效 + 12 套戰術庫 + 手機 RWD）

> 註：此節保留當時（戰術庫 12 套）的驗收結果作為歷史紀錄；戰術庫後來擴充到 13 套（3／3／3／4），最新結果見本文件最後一節。

同一套 headless Chrome harness（`.scratch/run-test.ps1` + `.scratch/test.js`，注入 `--dump-dom` 讀回結果），三種視窗寬度各跑 33 項檢查，全部 **PASS / 0 FAIL**：

| 檢查項 | 1484×900 | 1184×800 | 500×900 |
| --- | --- | --- | --- |
| fabric.js 已載入 | PASS | PASS | PASS |
| `TACTIC_LIBRARY` 12 套、四大分類、每類 3 套 | PASS | PASS | PASS |
| 每套 4 個步驟 | PASS | PASS | PASS |
| 每格至少 11 個物件（實測最小 11：5 攻 5 守 1 球＋線條） | PASS | PASS | PASS |
| 每步都有機會標籤（`cue`） | PASS | PASS | PASS |
| 進攻員帶名單背號 `1,5,34,0,31` | PASS | PASS | PASS |
| 一鍵載入 `horns`：4 步、`tacticId='lib:horns'`、畫布 11 物件 | PASS | PASS | PASS |
| `#cueTag` 顯示該步文案（`雙高位就位`）、無 `cue` 時隱藏 | PASS | PASS | PASS |
| 手冊縮圖 4 個、解說卡 4 張、分類清單 12 筆 | PASS | PASS | PASS |
| `getBallHandler()` 偵測到持球者（`off1`） | PASS | PASS | PASS |
| 光暈 `shadow.blur` 落在 9–15 呼吸區間（實測 14.77 / 14.90） | PASS | PASS | PASS |
| 序列化不含光暈陰影 | PASS | PASS | PASS |
| `tweenToFrame()` 產生殘影（4 條）、序列化不含殘影、結束後自動清除 | PASS | PASS | PASS |
| 套用 2-3 聯防 → `def2` = (330, 490) | PASS | PASS | PASS |
| 名單 18 人 | PASS | PASS | PASS |
| 回歸：`store.save` → `load` 保留 `cue` / `desc`，`remove` 後清單不含測試檔 | PASS | PASS | PASS |
| 回歸：球員模式無可選取物件且顯示「已鎖定」 | PASS | PASS | PASS |
| 回歸：新增步驟 / 刪除步驟後步驟數正確 | PASS | PASS | PASS |
| 回歸：`playAnimation()` 結束後回到播放前的步驟 | PASS | PASS | PASS |
| 無水平溢出（`scrollWidth === innerWidth`） | PASS 1468/1468 | PASS 1168/1168 | PASS 500/500 |
| 無 JS 例外 | PASS | PASS | PASS |

**視覺驗收（截圖比對）**：桌面 1484×900（教練模式）、1184×780（球員模式）、500×900（教練模式，含抽屜展開 / 收合）皆確認：

- 全站無深藍底殘留；白底、深墨字、灰線、磚紅／藍雙色點位一致。
- 球場為紙白＋深墨灰線＋磚紅籃框與衝撞區；防守員白底藍框帶淡「✕」；持球者圓盤外可見橙色柔光（放大 6 倍比對確認）。
- 手冊四大分類展開、目前戰術以磚紅左側色條標示；球場右上機會標籤（`擋拆成形` / `雙擋預備` / `中軸站位`）正常。
- 手機：`☰`／`🛠` 在步驟列，抽屜滑入＋背幕，底部 dock（防守快捷 chip → 迷你球場縮圖 → 解說卡）不與球場重疊。

**未經自動化驗證**：GIF 實際編碼（同前輪原因）、真人手指滑動手感（僅以 CSS `overflow-x:auto` 與 `scrollIntoView` 驗證行為）。

---

## ✅ 驗收紀錄（本輪：即點即播 + 防守與球面板 + 側欄收合）

同一套 headless Chrome harness（`.scratch/run-test.ps1` + `.scratch/test.js`，`--dump-dom` 讀回 `#testout`），三種視窗寬度各跑一輪（桌面 1484／1184 為 57 項、手機 500 為 50 項——收合組在 ≤1100px 改由兩項專屬檢查取代），全部 **PASS / 0 FAIL**：

| 檢查項 | 1484×900 | 1184×820 | 500×900 |
| --- | --- | --- | --- |
| 進攻節點鈕 `[data-tool^="off"]` 數量為 0 | PASS | PASS | PASS |
| 防守與球共 6 顆節點鈕 | PASS | PASS | PASS |
| 名單 18 顆按鈕（`#rosterGrid .roster-btn`） | PASS | PASS | PASS |
| 點戰術即自動播放（`state.playing === true`） | PASS | PASS | PASS |
| 自動播放預設循環（`state.loop === true`、`∞` 鈕亮起） | PASS | PASS | PASS |
| 播放鈕文字變「停止播放」 | PASS | PASS | PASS |
| 按「停止播放」即停下（`state.playing === false`） | PASS | PASS | PASS |
| 播放中改載入 Give & Go：`tacticId='lib:give-go'`、4 步、仍自動播放 | PASS | PASS | PASS |
| 換套後可按停止停下 | PASS | PASS | PASS |
| 收合後 `.stage` 第三軌 = `0px` | PASS `232px / 1204px / 0px` | PASS `232px / 904px / 0px` | n/a（手機不適用） |
| 收合後 `#sidebar` = `display:none` | PASS | PASS | n/a |
| 收合後 `#sideExpand` 可見 | PASS | PASS | n/a |
| 收合狀態寫入 `localStorage['mbab:sideCollapsed']` | PASS | PASS | n/a |
| 收合後球場變寬（588.3 → 615.9px） | PASS | PASS 503.2 → 530.8px | n/a |
| 收合後球場水平居中（左右留白差 ≤ 2px） | PASS 294.0／294.0 | PASS 186.6／186.6 | n/a |
| 收合後球場未被裁切（高度 ≤ 容器） | PASS 579.1 ≤ 657.4 | PASS 499.1 ≤ 577.4 | n/a |
| 展開後恢復三欄（`232px / 858px / 318px`） | PASS | PASS `232px / 558px / 318px` | n/a |
| 展開後 `#sidebar` 可見 | PASS | PASS | n/a |
| ≤1100px 不顯示 `#sideCollapse` / `#sideExpand` | n/a | n/a | PASS / PASS |
| 點 34 號即派上場、名單按鈕標記 `is-on` | PASS | PASS | PASS |
| 原有回歸（戰術庫／光暈／殘影／存檔／球員模式／步驟／播放回原位）全數保留 | PASS | PASS | PASS |

增補的測試做法（供後續沿用）：`run-test.ps1` 注入的樣式會關閉 CSS transition（`*{transition:none!important}`），使 grid 軌寬／球場尺寸量測不受 0.22s 過渡影響；收合相關檢查以 `window.innerWidth > 1100` 分流成「桌面組」與「≤1100px 組」，兩組一律輸出結果，避免某一寬度少跑而誤判。

**視覺驗收（截圖比對）**：

- 1484×900 展開：右側為「教練工具 TOOLS」標題列（右緣 `›`）＋「防守與球」6 顆節點鈕（X1–X5 藍框、籃球橙框）＋註記「進攻球員請由下方名單派上場」，下方「球員名單 ROSTER 18」與「防守陣型」不受影響；球場正在自動播放（`∞` 亮、按鈕為「停止播放」、機會標籤 `順下吃餅`）。
- 1484×900 收合：右欄完全消失、右緣中段出現 `‹` 把手，球場放大並居中，球場下方播放提示自動隱藏。
- 1184×820 收合：同樣居中放大，左側手冊仍可捲動，無水平溢出。
- 500×900 球員模式：載入 Floppy 後直接自動播放（`∞` 亮、提示「播放中：按『■ 停止播放』即可停止」），底部縮圖／解說卡與 `☰`／`🛠` 不受影響；收合鈕與把手皆不出現。

**未經自動化驗證**：GIF 實際編碼、真人手指手勢，以及 `localStorage` 關閉（私密模式）時的收合狀態持久化（僅以 try/catch 回退驗證不會拋錯）。

---

## ✅ 驗收紀錄（本輪：防守代號／輪轉／自訂防守／隊徽浮水印／GIF 檔名／13 套戰術）

> **歷史紀錄**：本節為 2026-11-05 前（戰術庫 13 套、球場有隊徽水印）的驗收結果，保留作為軌跡。之後戰術庫精簡為 3 分類 7 套、球場水印全部移除、新增開場首頁與名單位置篩選，最新結果見文件最後一節「驗收紀錄（本輪：開場首頁／球場去水印／7 套 3 分類／側欄重排／名單排序與位置篩選）」。

同一套 headless Chrome harness（`.scratch/run-test.ps1` ＋ `.scratch/test.js`）於 1484×900（桌面）、1184×900（平板）、420×880（手機）三種視窗執行，全部 **0 FAIL**（原 44 項回歸全數保留）：桌面／平板各 92 項 PASS、手機 85 項 PASS（收合與球場寬度量測在 ≤1100px 不適用而略過）。實測結果另行確認為 `PASS=92/FAIL=0`、`PASS=92/FAIL=0`、`PASS=85/FAIL=0`；註：headless Chrome 的 `--window-size` 最小寬度會被夾到 500px，故手機場次的實際版面寬為 500px，390／420px 以 `.scratch/narrow.html`（iframe）補測。

| 檢查項 | 結果 |
| --- | --- |
| `TACTIC_LIBRARY` 共 13 套、每套 4 步、每步 ≥ 11 物件（5 攻 5 守 1 球） | PASS |
| 分類套數 `pick:3 / motion:3 / zone:3 / transition:4`，手冊標題顯示「13 套」 | PASS |
| 三套 BLOB 戰術存在（`blob-line` / `blob-box` / `blob-elevator`）且可載入 4 步 | PASS |
| 場上防守節點文字為 `PG/SG/SF/PF/C`（深藍、800） | PASS |
| 整份 HTML 不含 `✕` 與 `X1`–`X5` 字樣 | PASS |
| 右側節點鈕、`#defGrid`、手機 dock chip 文字同步為位置代號 | PASS |
| `deriveDefense()` 在球換邊時整組滑動、負責撲防者改站「持球者→籃框」連線（步驟間有補間） | PASS |
| 戰術庫每一步都帶防守座標（`step.def` 未寫死時自動推導） | PASS |
| 自訂防守按鈕存在、點擊後 `state.customDefense === true`、按鈕 `.is-on`、整顆不被裁切（可捲到） | PASS |
| 拖曳防守者後目前步驟座標同步（`onNodeModified` → `saveCurrentFrame()`） | PASS |
| 套用 2-3 後 `state.customDefense === false` | PASS |
| 球場群組含 `isCrest` 隊徽（寬 520px、透明度 0.18）、不進入序列化 | PASS |
| `canvas.toDataURL()` 可輸出（data URI 不污染 canvas） | PASS |
| `tacticFileName('gif')` 取戰術名稱（`直線排開·底線發球` → `直線排開_底線發球.gif`）、清除不合法字元、空名稱回退 `MondayBeer_Tactic` | PASS |
| 球偏在持球者手側（偏移量介於 12～`GLOW_REACH` 70px 之間，不遮背號） | PASS |
| 進攻物件排在防守之後（重疊時進攻在上） | PASS |
| 原有回歸（存檔／改名／刪除／球員模式／步驟／播放回原位／收合／名單）全數保留 | PASS |
| 無水平溢出（1484／1184／420 寬；headless 實測 500 寬、390／420 另以 iframe 補測）與無 JS 例外 | PASS |

**視覺驗收（截圖）**：

- 1484×900 教練模式：左欄「經典戰術 13 套」四大分類標題（`PICK & ROLL 3`／`MOTION 3`／`ZONE OFFENSE 3`／`TRANSITION 4`）皆單行不換行，`快攻 · 底線發球` 未被截斷；右側「防守陣型」四顆預設 ＋ 全寬「自訂防守」按鈕完整顯示（不再被切掉）；球場中央可見淡淡隊徽浮水印，不干擾路線與背號。
- 載入 `blob-elevator` 第 4 步：持球者背號與球並排（球偏在手側），5 名進攻磚紅盤疊在防守白盤之上，`PG/SG/SF/PF/C` 全數可讀。
- 420×880 球員模式：載入 `zone-vs-212` 後自動播放，防守代號在手機上仍清楚，底部縮圖／解說卡與 `☰`／`🛠` 正常。
- 窄螢幕補測（390／420px）：headless Chrome 的 `--window-size` 最小寬度會被夾到 500px，故改用 iframe 容器（390×844、420×880）量測真實版面——`innerW=390/420`、`wrapW=370/400`、`courtRight=379/409`（`fitsInViewport=yes`），即球場在 390px 也不被裁切；`body{overflow:hidden}` 讓抽屜的 `translateX` 不產生水平捲軸。

**未經自動化驗證**：GIF 實際編碼（headless 環境 Web Worker 與虛擬時間互相干擾）與真人拖曳手感；建議在真實瀏覽器按一次「導出 GIF」確認檔名與內容。

---

## ✅ 驗收紀錄（本輪：開場首頁／球場去水印／7 套 3 分類／側欄重排／名單排序與位置篩選）

同一套 headless Chrome harness（`.scratch/run-test.ps1` ＋ `.scratch/test.js`）於 1484×900（桌面）、1184×900（平板）、500×820（手機，headless Chrome 的最小寬）三種視窗執行：**桌面 117 PASS / 0 FAIL、平板 117 PASS / 0 FAIL、手機 110 PASS / 0 FAIL**（手機場次略過 7 項側欄收合量測）。上一輪的 92 項回歸全部保留，另新增 25 項。

| 檢查項 | 結果 |
| --- | --- |
| 開場首頁預設顯示、`z-index` 為 76、兩張身分卡（`#enterPlayer` / `#enterCoach`）存在 | PASS |
| 點「我是球員」→ 首頁關閉、`state.mode === 'player'`（唯讀） | PASS |
| 點頂部 `⎋ 切換身分`（`#btnHome`）→ 首頁再次出現 | PASS |
| 點「我是教練」→ `#pwModal` 開啟；按 `Esc` 可關掉密碼框而首頁仍在；重新點並輸入 `coach888` → `state.mode === 'coach'` 且首頁關閉 | PASS |
| `TACTIC_LIBRARY` 共 7 套；`LIB_CATEGORIES` 3 類且標籤為 `破 2-1-2 聯防／破 3-2 聯防／底線開球` | PASS |
| 分類套數 `beat212:2 / beat32:2 / blob:3`；手冊標題「7 套」、`.pb-cat` 3 個、`data-cat` 依序 `beat212,beat32,blob` | PASS |
| 7 套皆 4 步、每步 ≥ 11 物件、每步都有 cue 標籤；`beat212-elbow` 載入後 cue＝`肘區空檔` 並自動循環播放 | PASS |
| 換套 `beat32-skip` 仍在自動播放、4 步、可停止 | PASS |
| 球場無 `isCrest` 物件、無 `MONDAY`／`BEER` 地板文字、`buildCrest` / `makeCrest` / `refreshCourtCrest` 皆未定義 | PASS |
| 移除 data URI 水印後 `canvas.toDataURL()` 仍可輸出（畫布未被污染） | PASS |
| 側欄面板順序 `球員名單>防守陣型>戰術線條>動作>快捷鍵`，`#defBallPanel` 為 `<details>`、`open=false`、且是側欄最後一個面板 | PASS |
| 名單 18 人、背號升冪 `0,1,5,…,87,99`、每顆按鈕都有位置行（`<em>`） | PASS |
| `#posChips` 4 顆；`PG/SG` → 7 人（`0,1,5,6,8,9,12`）、`PF/C` → 9 人（`10,14,21,31,34,35,50,87,99`）、`全部` → 18 人；`state.rosterFilter` 同步 | PASS |
| 原有回歸（球場／節點／步驟／播放／補間／殘影／光暈／存檔／改名／刪除／球員模式／側欄收合／名單派上場／GIF 檔名）全部保留 | PASS |
| 無水平溢出（1484／1184／500）與無 JS 例外 | PASS |

**視覺驗收（截圖存放於 `.scratch/`）**：

- `shot-splash-desktop.png`（1484×900）：首頁置中卡片、圓形隊徽、`MONDAY BEER & BASKETBALL` 主標、兩張身分卡並排（球員藍／教練磚紅）、底部提示單行。
- `shot-splash-mobile.png`（500×820）：身分卡改單欄、字級縮小；另以容器 360px 實測卡片寬 328px、`scrollWidth === clientWidth`，無水平溢出。
- `shot-sidebar.png` / `shot-sidebar-bottom.png`（教練模式）：右側上方為「球員名單」18 顆（背號＋姓名＋位置，4 欄）＋位置 chips；下方依序「防守陣型 → 戰術線條 → 動作 → 快捷鍵 → 防守與球（`▸` 收合，實測 38px／展開 226px）」。左欄手冊 3 個分類 7 套。
- `shot-roster.png`：點 `PG/SG` 後名單只剩 `0,1,5,6,8,9,12`，該 chip 亮起、`SF/PF`／`PF/C` 未選。
- 球場實測：無隊徽／地板文字浮水印，底層漸層為 `#F7FAFD → #EDF3F8 → #EBF1F6`，木紋與縫線維持 3%～5.5% 極淡紋理。

**已知落差（harness 限定）**：腳本產生的預覽檔位於 `.scratch/`，相對路徑的 `WhatsApp Image …jpeg` 抓不到，截圖因此顯示 `MB` 後備字樣；把 `index.html` 與該 JPEG 放在同一資料夾（實際使用情況）時實測 `naturalWidth=1408`，隊徽正常顯示。

---

## ✅ 驗收紀錄（本輪：手機隱藏快捷鍵卡 + 手冊「➕ 新增戰術」）

同一套 headless Chrome harness（`.scratch/run-test.ps1` ＋ `.scratch/test.js`，`--dump-dom` 讀回 `#testout`）於 **1484×900（桌面，138 PASS / 0 FAIL）** 與 **500×844（手機，131 PASS / 0 FAIL —— headless Chrome 會把 `--window-size` 的寬度夾到 500，390 寬的實際版面另以截圖驗證）** 執行；上一輪 117／110 項回歸全數保留，本輪新增 21 項（含分流後的桌面／手機各一組）。

| 檢查項 | 桌面 1484 | 手機 500 |
| --- | --- | --- |
| `.panel-tips` 節點存在（桌機說明不被刪） | PASS | PASS |
| `>1100px` 快捷鍵卡片可見（`display:block`） | PASS | n/a |
| `≤1100px` 快捷鍵卡片 `display:none` | n/a | PASS |
| 手冊有「➕ 新增戰術」按鈕（`#pbNewTactic`） | PASS | PASS |
| `.pb-new-row` 帶 `coach-only`（球員模式自動隱藏） | PASS | PASS |
| 名稱框 `placeholder === '請輸入戰術名稱'` | PASS | PASS |
| 提示行 `.pb-name-hint` 不溢出（實測 210/210、295/295） | PASS | PASS |
| 教練模式看得到新增戰術（`display:flex`） | PASS | PASS |
| 教練模式空清單文案引導按「新增戰術」 | PASS | PASS |
| 有未存內容（多步驟＋線條）時先跳確認框 | PASS | PASS |
| 確認後只剩「步驟 1」（`frames.length===1`） | PASS | PASS |
| 新增後 `tacticId === null`、`tacticName === ''` | PASS | PASS |
| 預設 5 攻 5 守 1 球 | PASS | PASS |
| 預設防守標記回到 2-1-2 | PASS | PASS |
| 線條數歸零 | PASS | PASS |
| 名稱輸入框已清空 | PASS | PASS |
| 名稱輸入框可聚焦／可見 | PASS（`activeElement = INPUT`） | PASS |
| 輸入名稱即同步 `state.tacticName` | PASS | PASS |
| 有名字時「儲存戰術」直接存檔、不跳命名彈窗（`#textModal` 保持隱藏） | PASS | PASS |
| 新戰術立即出現在「我的戰術」清單 | PASS | PASS |
| 球員模式整區隱藏（`display:none`、`offsetParent === null`），切回教練恢復 | PASS | PASS |
| 原有回歸（首頁身分／戰術庫 7 套／cue／存檔改名刪除／球員模式／步驟／播放回原位／側欄收合／名單篩選／節點／光暈／殘影／無水平溢出／無 JS 例外） | PASS | PASS |

**視覺驗收（截圖存放於 `.scratch/`）**：

- `shot-desk-pb.png`（1484×900 教練模式）：左欄手冊最上方為磚紅「➕ 新增戰術 NEW TACTIC」全寬按鈕 ＋「戰術名稱」小標 ＋ 白底輸入框（placeholder「請輸入戰術名稱」）＋ 單行提示；下方仍是 3 分類 7 套；右側工具列「快捷鍵 SHORTCUTS」卡片照常顯示。
- `shot-mob-pb.png`（390×844 教練模式，手冊抽屜展開）：抽屜一打開就先看到「➕ 新增戰術」與名稱框，單手可及；分類清單與「我的戰術」在其下，輸入框字級放大到 16px（iOS 聚焦不縮放）。
- `shot-mob-tools.png`（390×844，🛠 工具列抽屜展開）：面板依序「球員名單 → 防守陣型 → 戰術線條 → 動作 → 防守與球」，**「快捷鍵 SHORTCUTS」卡片不再出現**，少了一整塊用不到的說明。

**未經自動化驗證**：iOS Safari 實際聚焦輸入框時的縮放行為（僅以 `font-size:16px` 規則與 CSS 計算值確認）、真人在 390px 用手指點「➕ 新增戰術」→ 打字的整體手感。

---

## ✅ 驗收紀錄（本輪：直覺拖曳記錄模式 US-127）

同一套 headless Chrome harness（`.scratch/run-test.ps1` ＋ `.scratch/test.js`，`--dump-dom` 讀回 `#testout`）於 **1484×900（桌面，165 PASS / 0 FAIL）** 與 **500×844（手機，158 PASS / 0 FAIL —— headless Chrome 會把 `--window-size` 的寬度夾到 500）** 執行；上一輪全部回歸項保留（桌面多出的 7 項為 >1100px 寬度分流檢查），本輪新增 28 項斷言，0 FAIL。

| 檢查項 | 桌面 1484 | 手機 500 |
| --- | --- | --- |
| 預設陣型中 `off1` 為持球者（`getBallHandler()`） | PASS | PASS |
| 拖曳持球者：球跟著手移動且「球相對人」偏移不變（實測 60,30） | PASS | PASS |
| 拖曳持球者放開後自動生成 1 條 `dribble` 線 | PASS | PASS |
| 拖曳後立即寫回目前步驟座標（`380,480`） | PASS | PASS |
| 自動軌跡線標記 `autoLine === true` | PASS | PASS |
| 自動運球線幾何有效（無 NaN 座標） | PASS | PASS |
| 拖曳後仍由同一人持球 | PASS | PASS |
| 拖曳非持球者生成 `cut` 線 | PASS | PASS |
| 非持球者拖曳不會帶走球（球座標不變 440,510） | PASS | PASS |
| 拖曳防守員生成 `def` 防守移動線 | PASS | PASS |
| 微幅拖曳（+5,+3）不生成線條 | PASS | PASS |
| 拖球途中亮起傳球候選圈（`kind='ghost'`） | PASS | PASS |
| 拖球到隊友身上生成 `pass` 虛線（線數 +1） | PASS | PASS |
| 球吸附到隊友手上 +22/+18 | PASS | PASS |
| 自動傳球線幾何有效（無 NaN 座標） | PASS | PASS |
| 傳球後由新隊友持球（`getBallHandler()` 換人） | PASS | PASS |
| 傳球後候選圈立刻清除，且不在 `serializeCanvas()` 內 | PASS | PASS |
| 球放回同一人手上只吸附、不畫線 | PASS | PASS |
| 「＋ 新增步驟」不繼承自動軌跡線（新步驟只剩 `screen`） | PASS | PASS |
| 「＋ 新增步驟」保留教練手畫的線條 | PASS | PASS |
| 「＋ 新增步驟」複製 5 名進攻球員座標 | PASS | PASS |
| 下一步的球已被教練移走時不覆寫（保持 120,120） | PASS | PASS |
| 下一步的球原本黏在舊持球者手上時自動改由新持球者持有（+22/+18） | PASS | PASS |
| 拖曳已推入復原堆疊 | PASS | PASS |
| `undo()` 後回到拖曳前位置（`def4` 390,165） | PASS | PASS |
| 球員模式拖曳不生成線條（線數不變） | PASS | PASS |
| 播放中拖曳不生成線條 | PASS | PASS |
| 球被丟到場外會 clamp 回球場內（-140,1200 → 18,922） | PASS | PASS |
| 原有回歸（首頁身分／戰術庫 7 套／cue／存檔改名刪除／球員模式／步驟／播放回原位／側欄收合／名單篩選／節點／光暈／殘影／無水平溢出／無 JS 例外） | PASS | PASS |

**視覺驗收（截圖存放於 `.scratch/`）**：

- `shot-desk-drag.png`（1484×900 教練模式，模擬拖曳）：`1 Isaac` 從弧頂帶球往左下＝一條橙色波浪運球線（畫在球員下層、不壓圓圈）；`9 Mike` 往左上移動＝磚紅實線箭頭切入線；球被拖到 `31 Sang` 身上＝藍色虛線空心箭頭傳球線，球停在 `31 Sang` 右下（+22/+18），持球光暈同時換人；提示列同步顯示「拖曳球員＝自動記錄移動（持球者會帶球運球）· 拖曳籃球到隊友身上＝傳球」。
- `shot-mob-drag.png`（500×844 教練模式）：同一組動作在手機寬度下三條線與球的位置都正確，球場未被裁切、提示文字完整換行、底部步驟縮圖與解說卡照常。

**已知落差（harness 限定）**：腳本以 `canvas.fire('object:moving' / 'object:modified')` 模擬拖曳，不經真實 pointer／touch 事件，因此「拖曳中即時跟手」是以事件後的座標驗證；真人在手機上手指抓球的手感（感應區由 26px 擴大到 52px）、iOS Safari 的 `touch` → `object:moving` → `object:modified` → `mouse:up` 順序，仍未經實機驗證。

**本輪修正的實作缺陷（由測試抓出）**：

1. `makeAutoLine()` 原本收到 fabric 物件而非 `{x,y}`，導致自動線座標全是 `NaN`（線數照樣 +1 但畫不出來）——改為呼叫端傳 `{ x: target.left, y: target.top }`，並在 `makeAutoLine()` 內加 `isFinite` 守門。
2. 線頭縮排固定 28px，短距離（如 78px）會被裁到畫不出來——改為 `Math.min(LINE_TRIM, len × 0.2)`。
3. `pushUndo()` 在 `object:moving` 才取快照，但 fabric 是「先移動物件、再觸發事件」，`Ctrl+Z` 會還原成「已移動」的畫面——改為 `mouse:down` 當下就把快照存進 `state.nodeDrag.snapshot`，第一次真的移動才 `pushUndo(snapshot)`。

---

## ✅ 驗收紀錄（本輪：移除快捷鍵卡 + 手機防誤觸）

**日期**：2026-11-05 ｜ **方式**：`.scratch/run-test.ps1`（headless Chrome 載入 `index.html` 後注入 `.scratch/test.js`）＋ `.scratch/shoot2.ps1` 截圖目視

### 一、修正前後對照

| 項目 | 修正前 | 修正後 |
| --- | --- | --- |
| `index.html` 內 `.panel-tips` 卡片 | 1 張（`<h2>快捷鍵</h2>` ＋ 4 列 `<kbd>`） | **0（DOM 直接刪除，非 CSS 隱藏）** |
| 側欄面板順序 | 名單 → 防守陣型 → 戰術線條 → 動作 → **快捷鍵** → 防守與球 | 名單 → 防守陣型 → 戰術線條 → 動作 → 防守與球 |
| 全頁 `<kbd>` 元素 | 12 | **0** |
| 死 CSS | `.panel-tips .tips`、`.panel-tips li`、`@media(max-width:1100px) .panel-tips{display:none}`、`kbd{}` | **全部移除** |
| 畫布 `touch-action` | `auto`（拖曳時頁面可能跟著滾） | **`none`**（`.canvas-container` ＋ `canvas`） |
| 滑鼠拖曳門檻 `DRAG_EPS` | 3px | **6px** |
| 觸控拖曳門檻 | 無（沿用 3px，指尖易誤觸） | **`DRAG_EPS_TOUCH` = 10px**（`dragEpsOf(drag)` 依裝置取） |
| 傳球判定 | 只有 54px 距離 | **`obj.containsPoint()` 真 hit-test 優先 ＋ 54px 後備** |
| 桌機側欄垂直空間 | — | **＋約 118px**（少一張卡片） |
| 鍵盤快捷鍵功能 | 可用 | **可用（`§13 handleKeydown()` 未改動）** |
| 自動化測試 | desktop 165 PASS／mobile 158 PASS／0 FAIL | **desktop 171 PASS／mobile 164 PASS／0 FAIL** |

### 二、本輪新增／改寫的斷言（皆 PASS）

| 斷言 | 實測值 |
| --- | --- |
| 側欄面板順序（已無快捷鍵卡） | `球員名單>防守陣型>戰術線條>動作` |
| 快捷鍵卡片已從 DOM 移除（無 `.panel-tips`） | `0 個殘留` |
| 側欄已無「快捷鍵 / SHORTCUTS」字樣與 `<kbd>` | `0 個 kbd` |
| 畫布 `touch-action:none`（手機拖曳不滾頁） | `none` |
| 滑鼠防手震門檻 6px | `dragEpsOf(null) === 6` |
| 觸控防手震門檻 10px | `dragEpsOf({touch:true}) === 10` |
| 觸控拖曳會記下 `touch` 旗標 | `true`（`beginNodeDrag(target, {type:'touchstart'})`） |
| 滑鼠拖曳不會誤標為觸控 | `false` |
| 球心落在隊友圓圈內即判定命中（`radius=0`） | `off4 @300,200` → 回傳該球員 |

### 三、截圖（`.scratch/`）

- `shot-desk-nokbd.png`（1484×900 教練模式）：右側工具列為「球員名單 → 防守陣型 → 戰術線條 → …」，原本的「快捷鍵 SHORTCUTS」卡片已不存在。
- `shot-desk-sidebar-bottom.png`（1484×900，側欄捲到底）：**「動作 ACTIONS」下方直接接「防守與球 DEFENSE & BALL」**，中間沒有任何卡片。
- `shot-mob-drawer.png` / `shot-mob-drawer-bottom.png`（500×844，`🛠` 抽屜展開／捲到底）：手機抽屜同樣是 名單 → 防守陣型 → 戰術線條 → 動作 → 防守與球。
- `shot-mob-nokbd.png`（500×844）：球場滿寬、無水平溢出，拖曳說明列正常。
- `shot-desk-drag2.png`（1484×900，拖曳後）：自動運球波浪線（持球者 `1 Yukka`）與切入磚紅箭頭（`0 陳生`）都正常長出，移除卡片未影響拖曳記錄。

### 四、結論

US-128 完成：快捷鍵說明卡自原始碼整塊移除（含死 CSS），桌機多出約 118px 可用高度；手機端加上 `touch-action:none` 與觸控專用 10px 門檻，並把傳球判定升級為 `containsPoint()` 真 hit-test（保留 54px 容錯），172→**desktop 171／mobile 164 全部 PASS、0 FAIL**。Git／Vercel 部署依指示延後，待使用者切換階段後執行。

---

## ✅ 驗收紀錄（本輪：桌面手機框預覽模式）

**日期**：2026-11-06 ｜ **方式**：`npm run build` ＋ `scripts/serve-dist.mjs`（`http://localhost:4173/`）＋ headless Chrome 以 CDP（`tmp_frame.mjs`）在 1440×900、1280×720、375×812（`mobile:true`）三種 viewport 實際載入並截圖；框內操作（進球員模式、開手冊抽屜、解鎖教練、開工具抽屜）皆以 `iframe.contentDocument` 真實點擊觸發。

### 一、實測結果

| 量測 | 1440×900（預設） | 1280×720（矮視窗） | 1440×900 `?full=1` | 375×812（真機） |
| --- | --- | --- | --- | --- |
| `<html>` class | `phone-frame` | `phone-frame` | （無） | （無） |
| `#phoneShell` | `display:flex`（`hidden=false`） | `display:flex` | `display:none` | `display:none` |
| `.app`（外殼本體） | `display:none`（未 `boot()`） | `display:none` | `display:flex` | `display:flex` |
| 框內 viewport | **390 × 760** | 390 × 580 | — | 375 × 812（全螢幕） |
| 框內 `.board-wrap` | 390 × 367（比例 1.0638） | 390 × 367 | — | 375 × 353 |
| 框內 `.topbar` / `.mobile-stepinfo` | 44 / 54 | 44 / 54 | — | 44 / 54 |
| 框內 `.stepbar` | 59（球員）／101（教練） | 59 | — | 59 |
| 抽屜頂端 vs 資訊卡下緣 | **485 vs 473 → 不重疊** | 430 vs 473（矮視窗下限 150，僅壓到資訊卡、球場仍完整） | — | 同手機版 |
| 水平溢出 | 無 | 無 | 無 | 無 |
| `#psSize` 顯示 | `390 × 760`（實測值，非寫死） | `390 × 580` | — | — |

### 二、行為驗收

| ID | 檢查 | 結果 |
| --- | --- | --- |
| AC-151 | 桌面 1440×900 開啟 `/` → 深色底（`body` 背景 `rgb(30,41,59)`）＋ 390 寬圓角手機框，框內顯示手機版（Header 44px、球場 100vw、單一底部列）；外殼文件本身 `.app` 為 `display:none` 且未建立 canvas | PASS |
| AC-152 | 框內點「我是球員」→ 正常進站（`body[data-mode=player]`）；點 `☰` 開手冊、`🛠` 開教練工具皆為 Bottom Sheet、球場未被遮住；框內輸入 `coach888` 可解鎖教練模式（底部列變兩排、`.stepbar` 101px） | PASS |
| AC-153 | 1440×900 開 `/?full=1` → 無外框、`html` 無 `phone-frame`、`.app` 為 `display:flex`、桌機首頁與三欄版面完全照舊；框下「🖥 桌面視窗」按鈕導向同一網址 | PASS |
| AC-154 | 375×812（`mobile:true`）開 `/` → 完全沒有外框、`#phoneShell` 為 `display:none`，版面即真機全螢幕；縮放視窗跨過 768px 會自動 reload 換視角（`initViewportGuard()`） | PASS |

### 三、截圖（`.scratch/`）

- `frame-1440-idle.png`：桌面 1440×900 首頁，App 裝在手機框內（深色底＋圓角邊框＋陰影＋下方說明列 `手機版預覽 390 × 760`）。
- `frame-1440-player.png`：框內球員模式——球場滿版、資訊卡、底部單列 `播放／∞／步驟膠囊／☰／⬇`。
- `frame-1440-coach.png` / `frame-1440-coach-sheet.png`：框內教練模式（底部兩排）與 `🛠` 工具抽屜。
- `frame-1440-sheet.png`：框內 `☰` 戰術手冊抽屜。
- `frame-1440-full.png`：`?full=1` 的原大螢幕版面（零回歸對照）。
- `frame-375-real.png`、`frame-1280-laptop.png`：真機 375×812（無外框）與 1280×720 筆電（框內 390×580）。

### 四、已知取捨

1. 框內是**同源 iframe 載入同一份 `index.html?phone=1`**（不是用 CSS 縮放假裝手機）：好處是 `dvh`、`matchMedia`、`pointer` 事件與真機完全一致；代價是 CDN（fabric／gifshot／supabase）會多載入一次，且外殼文件仍需解析完整份 HTML（外殼端已 `return` 前跳過 `boot()`，不建立 canvas）。
2. 螢幕寬固定 390；高度受限於視窗（`min(844, 100dvh − 140)`）。1440×900 視窗下是 390×760，視窗高度 ≥984 才會剛好 844。
3. 視窗高 <620px 時說明列自動收起（`.ps-bar{display:none}`），只留手機框。
4. 矮視窗（框內高度 580）時抽屜下限 150px 會壓到「步驟資訊卡」約 43px，但球場（下緣 411）仍完整可見；此為可用性下限取捨。
5. 尚待真機（iOS Safari／Android Chrome）驗證：`dvh` 隨網址列收合、`pointer:coarse` 判斷、iPad 分屏（寬 768–834 且為觸控 → 不套框）。

---

## ✅ 驗收紀錄（本輪：手機版專業運動 App 版面重構）

**日期**：2026-11-06 ｜ **方式**：`npm run build` ＋ headless Chrome（`scripts/serve-dist.mjs` 起本機預覽），以 iframe harness 固定 390×844／430×932／360×740 的真實 viewport 截圖，並用 `--dump-dom` 取 `getBoundingClientRect()` 實測幾何

### 一、修正前後對照（≤767px）

| 項目 | 修正前 | 修正後 |
| --- | --- | --- |
| 步驟控制 | 底部 chips ＋ `.mobile-dock` 縮圖（`#stepThumbs`）＋ 解說卡（`#stepCards`）三套並存 | **只剩底部列一套**；`#stepThumbs`／`#stepCards`／`#defQuick` 已自 DOM 刪除 |
| 球場寬度 | 100% 但外框有 16px 圓角＋邊框＋16px 內距 | **100vw 滿版、無圓角、無邊框**（`.stage` padding 0） |
| 球員模式解說 | 球場下方長期顯示「目前為球員模式：點左側戰術即自動循環播放…」 | **不再顯示**（`setHint('')`） |
| 鎖定徽章 | 球員模式顯示「🔒 已鎖定 · 僅供閱覽」 | **整顆移除** |
| Header | 73px，隊徽 44–52px ＋ 三段品牌字 | **44px**：30px 隊徽 ＋ `Monday Beer` ＋ 11px 身分切換 |
| 教練工具／手冊 | 左右側滑抽屜（86–88vw），會蓋住球場大半 | **底部 Bottom Sheet**：20px 圓角、把手、`--sheet-max` 動態限高 |
| 抽屜關閉 | 只有背幕或 ✕（僅手冊有） | 背幕／✕／**把手下滑**（>30% 或 340ms 內快滑） |
| 抽屜高度 | 內容多長就多長（可蓋到球場中段） | 由 `updateSheetLimit()` 依「球場＋資訊卡下緣」算出；**390×844 實測抽屜頂端 462px、資訊卡下緣 460px → 完全不碰球場** |

### 二、實測幾何（headless Chrome 實測值，非推算）

| 量測 | 390×844 | 360×740 | 500×749（Chrome 最小視窗） | 820×1180（平板） | 1280×900（桌面） |
| --- | --- | --- | --- | --- | --- |
| `.topbar` 高度 | 44 | 44 | 44 | 73 | 73 |
| `.board-wrap` | 390×366（100vw、比例 1.0638） | 360×338 | 500×470 | 772×726 | 582×547 |
| `.mobile-stepinfo` | 54px 高 | 54px | 54px | **0（隱藏）** | **0（隱藏）** |
| `.stepbar` 高度 | 59（球員）／100（教練） | 59／100 | 59／97 | 98 | 54 |
| `--sheet-max` | 有值（220–367px） | 有值 | 有值 | **空字串（不套用）** | **空字串（不套用）** |
| 水平溢出（`scrollWidth === innerWidth`） | ✓ | ✓ | ✓ | ✓ | ✓ |
| 步驟控制組數 | 1 | 1 | 1 | 1 | 1 |

### 三、截圖（`.scratch/`）

- `shot-mob2-court.png`（390×844 球員模式）：球場滿版無圓角、下方單一資訊卡（`1/2 起始陣型`）、底部單列 `播放／∞／步驟膠囊／☰／⬇`。
- `shot-mob2-coach-bar.png`（390×844 教練模式）：底部多一列 `＋ … 💾 儲存戰術`，🛠 在右上。
- `shot-mob2-tools-sheet.png`（390×844，🛠 展開）：把手 ＋ `教練工具 TOOLS` ＋ `✕`，抽屜頂端緊貼資訊卡下緣，球場完整可見。
- `shot-mob2-playbook-sheet.png`（390×844，☰ 展開）：把手 ＋ `戰術手冊` ＋ ↻／✕ ＋ `＋ 新增戰術` ＋ 名稱框 ＋ 我的戰術清單。
- `shot-mob2-360.png`、`shot-mob2-430.png`：360×740 與 430×932 皆無溢出、比例正確。

### 四、已知取捨

1. 1000×940 的畫布在 390px 寬只能是 366px 高（43.4vh）。「100vw ＋ 60–65vh ＋ 不變形」幾何上不可能；裁到 62vh 會切掉 13.8%（兩側底角三分），故不採用。下方留白與球場地板同色系延伸，同時就是 Bottom Sheet 的展開空間。
2. 抽屜展開時仍以共用背幕（`rgba(31,42,55,.12)`）覆蓋球場，與舊抽屜行為一致。
3. 真機（iOS Safari）手勢與 `dvh` 行為未經實機驗證；headless Chrome 已確認支援 `dvh`。
4. 寬 >767px 的景觀手機沿用平板抽屜規則（本輪刻意不動），短高度下球場仍可能被垂直裁切，屬既有行為。

---

## ✅ 驗收紀錄（本輪：手機單一控制卡＋手冊兩層清單＋提示條收斂）

**日期**：2026-11-06 ｜ **方式**：`npm run build` → `scripts/serve-dist.mjs`（`http://localhost:4173/`，PID 35492）→ headless Chrome（`--headless=new`，DevTools 協定直連 `:9333`／`:9334`）以 `Emulation.setDeviceMetricsOverride` 在 390×844／375×667／360×740（`mobile:true`）與 1440×900（`?full=1`、`?phone=1`）實際載入、量測、點擊並截圖；`index.html` 與 `dist/index.html` SHA256 一致（`BEB30C7B…96F148B1574`）。

### 一、實測結果（390 × 844 球員模式）

| 量測 | 改版前 | 改版後 |
| --- | --- | --- |
| `#stepInfo` 父節點 | `board-panel`（球場內、卡片外） | **`stepbar`（卡片第一列）** |
| 球場下緣 → 底部列上緣 | 有 8px 灰底間隙（`.stage` 漸層留白） | **0px（`411 = 411`）** |
| `.stage` 背景 | `linear-gradient(...)` | **`none`** |
| 底部區塊 | 資訊卡（54px）＋浮動動作列（59／101px） | **單一白卡 433px（`border-radius:18px 18px 0 0`、`rgb(255,255,255)`、上緣陰影）** |
| `.stepbar` 排版 | `grid` 兩列（`play steps steps book tools`／`acts acts acts save save`） | **`grid` 三～四列：`info` / `steps`（1fr、兩欄 46px 大按鈕）/ `play＋acts＋book＋tools` / `save`** |
| 水平溢出 | 無 | 無（`docScrollWidth 390 = innerWidth 390`，`.stepbar` `scrollWidth 390 = clientWidth 390`；375／360 亦同） |
| 戰術手冊高度 | `--sheet-max` 約 367px（只露一小截） | **658px = 0.78 視窗**（375→520／0.78、360→577／0.78） |
| 手冊分類 | 3 個 `<details open>` 原地展開 | **分類列（`›` 入口）→ 子頁面**：點「破 2-1-2 聯防」→ `.playbook.is-sub`、`#pbSubView.hidden=false`、標題 `破 2-1-2 聯防`／`BEAT 2-1-2`／`2`、清單 2 列；點子頁面戰術 → `is-open=false`、`is-sub` 重置、`#pbSubView` 收起、`state.playing=true`（4 步自動播放） |
| 提示條 | 可同時堆疊多則、2800ms | **連發兩則後 `#toastStack.children.length = 1`，1.8 秒後 `0`** |
| 教練工具抽屜 | 依球場下緣限高 | 不變（390×844 實測 421px、上緣 423 > 球場 411 → 不遮球場） |

### 二、行為驗收

| ID | 檢查 | 結果 |
| --- | --- | --- |
| AC-155 | 390×844 進站：球場下緣與白卡上緣 **零間隙**、卡片填到螢幕底（`barBottom 844 = innerHeight`）、無灰底殘留、頁面無水平捲動 | PASS |
| AC-156 | 卡片第一列為當前步驟（`1/2 起始陣型`，教練模式 `1/4 雙肘落位`＋說明 2 行＋機會標籤），第二列兩欄大按鈕（`1 起始陣型` 磚紅選取／`2 擋拆切入` 白底），第三列 `▶ 播放`（手機顯示 `⏸` 於播放中）＋`∞`＋`＋`＋`☰`＋`🛠`，教練模式第四列滿版 `💾 儲存戰術` | PASS |
| AC-157 | `☰` 開手冊 → 高度 78dvh；分類列不再原地展開（點 `summary` 由 JS `preventDefault()` 改切子頁面），子頁面有 `‹ 返回分類`；`‹ 返回分類` 滑回第一層；點任一戰術 → 手冊自動收起＋自動循環播放 | PASS |
| AC-158 | 提示條連發只留最後一則、1.5 秒後淡出移除；載入戰術不再連跳「自動播放中…／已停止播放／播放完成／循環播放：開」等字樣 | PASS |
| AC-159 | 375×667 與 360×740：卡片不溢出（`barScrollHeight = barClientHeight`）、卡片貼底、手冊 0.78 高、無水平溢出 | PASS |
| AC-160 | 1440×900 `?full=1`：`.stepbar` 仍是單列 `display:flex`（54px）、`#stepInfo` 隱藏、`#playbook` 為 `position:static` 232px、`.pb-cat-list` 仍可展開（Accordion 未受影響）、`播放動畫` 全形標籤與 `▶` 正常；預設 `/` 的手機框外殼（`html.phone-frame`、iframe `?phone=1`、390×760）照舊 | PASS |

### 三、截圖（`.scratch/`，2× DPR）

- `v2-mob-card-390.png`：球員模式單一白卡（步驟說明 → 兩欄步驟鈕 → 播放／∞ → ☰／⬇）。
- `v2-mob-coach-390.png`：教練模式白卡（資訊＋2×2 步驟鈕＋播放／∞／＋／☰／🛠＋滿版儲存）。
- `v2-mob-pb-cat-390.png`：78dvh 手冊第一層（三個分類入口＋我的戰術）。
- `v2-mob-pb-sub-390.png`：第二層子頁面（`‹ 返回分類`／`BEAT 2-1-2`／2 套戰術）。
- `v2-mob-toast-390.png`、`v2-mob-375.png`、`v2-mob-pb-375.png`、`v2-mob-360.png`、`v2-mob-pb-360.png`、`v2-mob-tools-390.png`。
- `v2-desk-1440.png`（零回歸對照）、`v2-desk-phoneframe.png`（桌面手機框外殼）。
- 量測原始資料：`.scratch/v2-verify-report.json`、`.scratch/v2-verify-report2.json`。

### 四、已知取捨

1. 390×844 的卡片高 433px，只有 2 個步驟時下半部會有留白（白卡本身延伸到底，屬刻意設計）；步驟多時步驟區自身捲動，不會把底部按鈕推走。
2. 手冊放大到 78dvh 後會蓋住球場下半部，這是「要看得清楚清單」換來的；`#pbScrim` 仍提供「點一下收起」。
3. 教練工具抽屜維持限高（不遮球場），與手冊策略不同（C-116）。

---

## ✅ 驗收紀錄（本輪：手機步驟長卡片）

**日期**：2026-11-06 ｜ **方式**：`npm run build` → `scripts/serve-dist.mjs`（`http://localhost:4173/`）→ headless Chrome 155（`--headless=new`，DevTools 協定直連 `:9335`）以 `Emulation.setDeviceMetricsOverride` 在 390×844／375×667／360×740（`mobile:true`、觸控模擬）與 1440×900（`mobile:false`、`?full=1` 與預設手機框外殼）實際載入、進站（`#enterPlayer`）、載入戰術 `lib:beat212-elbow`（4 步）、播放、量測並截圖；`index.html` 與 `dist/index.html` SHA256 一致（`6CEC3F35…A3BF1`），CSS 大括號 472／472 平衡，兩段 inline script 皆通過 `node --check`。

### 一、實測結果（卡片尺寸／捲動）

| 量測 | 390×844 球員（預設 2 步） | 390×844 球員（4 步） | 390×844 教練（4 步） | 375×667（4 步） | 360×740（4 步） |
| --- | --- | --- | --- | --- | --- |
| `.stepbar` 高度 | 433px | 433px | 433px | 270px | 358px |
| 清單可視高（`clientHeight`） | 358 | 358 | 314 | 196 | 283 |
| 清單內容高（`scrollHeight`） | 358 | 358 | **342（捲 28px）** | **294（捲 98px）** | **294（捲 11px）** |
| 單張卡片高 | **118（上限）** | 82.1 | 78 | 66 | 66 |
| `is-scrollable` 淡出 | 否 | 否 | **是** | **是** | **是** |
| 水平溢出 | 無（390 = 390） | 無 | 無 | 無（375 = 375） | 無（360 = 360） |
| `儲存戰術` 高度 | –（隱藏） | – | **36px** | – | – |

- 390×844 只有 2 步時卡片停在 118px 上限、整組以 `justify-content:safe center` 垂直居中（上下留白平均分攤），不再出現「一張卡被拉成 174px 高」的空洞感。
- 播放鍵 `#btnPlay` 仍為 44px，卡片 `min-height 78px／矮螢幕 66px` 皆遠大於 44px 觸控門檻。

### 二、行為驗收

| ID | 檢查 | 結果 |
| --- | --- | --- |
| AC-161 | 全檔已無 `#stepInfo`／`renderMobileStepInfo`／`.mobile-stepinfo` 殘留；`#stepList` 直接是 `.stepbar` 第一列（`grid-area:steps`），卡片 4 張依序 `雙肘落位／球進左肘／底角分球／內傳內放籃`，每張都有 `1`–`4` 編號徽章、`14px` 名稱、機會標籤（`肘區空檔／罰球線策應／底角 3 分／籃下真空`）與 2 行跑位說明 | PASS |
| AC-162 | 選取中的卡片＝磚紅漸層（`linear-gradient(rgb(194,82,57), rgb(168,62,40))`）＋白字＋`rgb(180,70,47)` 邊框，右側指示為 `"●"`；其他卡片為白底＋`rgb(241,245,249)` 邊框，右側為 `"›"`；`aria-selected="true"` 與 `aria-current="step"` 只在選取項上 | PASS |
| AC-163 | 按 `▶ 播放`：`state.playing=true`、活動卡片取得 `is-live`（指示燈 `●` 1.1s 脈動）、播放鍵變 `⏸ 暫停`；再按一次停止後 `is-live` 立即移除（`setPlaying()` 一律重繪） | PASS |
| AC-164 | 教練模式（`body[data-mode=coach]`）：清單縮到 314px、4 張卡 78px、底部出現 20px 淡出（`.is-scrollable`）、滿版 `💾 儲存戰術` 36px 仍在最下方且不擋卡片；球員模式無儲存列（`getBoundingClientRect().height = 0`） | PASS |
| AC-165 | 375×667／360×740：卡片自動收成 66px＋單行說明（`-webkit-line-clamp:1`），360×740 僅需再捲 11px；兩個尺寸皆無水平捲動、卡片群與播放列不重疊 | PASS |
| AC-166 | 1440×900 `?full=1`：`.stepbar` 仍 `display:flex`／54px、`.step-chip` 33px 高（`padding:6px 11px`、12.5px）、`.step-body`／`.step-head` 為 `display:contents`、`.step-desc`／`.step-hint` 為 `display:none`（視覺與改版前一致）；預設 `/` 的手機框外殼（`html.phone-frame`、iframe `390×760`）正常載入新卡片 | PASS |
| 補充 | 提示條位置：`--stepbar-h` 由 `ResizeObserver` 即時更新（390×844 → `433px`、375×667 → `271px`、360×740 → `358px`），提示條下緣固定在卡片上緣上方 12px，不再壓住步驟卡片 | PASS |

### 三、截圖（`.scratch/`，2× DPR）

- `v3-mob-cards-390.png`：球員模式 2 步（118px 卡片 ＋ 垂直居中 ＋ 提示條貼卡片上緣）。
- `v3-mob-cards4-390.png`：載入 4 步戰術（82px／張，剛好填滿不需捲動）。
- `v3-mob-live-390.png`：播放中（活動卡片 `●` 脈動、播放鍵變暫停）。
- `v3-mob-cards-coach-390.png`：教練模式（78px／張 ＋ 底部淡出 ＋ 滿版儲存）。
- `v3-mob-cards-375.png`、`v3-mob-cards-360.png`：矮螢幕（66px ＋ 單行說明 ＋ 淡出）。
- `v3-desk-1440.png`（桌面零回歸對照）、`v3-desk-phoneframe.png`（桌面手機框外殼）。
- 量測原始資料：`.scratch/v3-verify-report.json`。

### 四、已知取捨

1. 手機直向的卡片高度受「球場 100vw」壓縮：390×844 球員模式可放 4 步（82px／張），教練模式與 375／360 的螢幕一定得捲動（見 C-117）。已用底部 20px 淡出提示「下面還有」＋播放／切換步驟時自動把當前卡片捲進視野降低影響。
2. 長說明（>46 字）會被 `-webkit-line-clamp` 截斷（矮螢幕只給 1 行）；完整文案仍在 `frame.desc` 內，桌機以 `title` 與手冊呈現，不另開彈窗。
3. 卡片上限 118px 是刻意的：2 步時不會被拉成半個螢幕高的巨卡，留白改由垂直居中吸收。

---

## ✅ 驗收紀錄（本輪：免帳號繪製模式＋提案批核＋一鍵分享）

**日期**：2026-11-06 ｜ **方式**：`npm run build`（`index.html` → `dist/`）→ **Node + CDP 冒煙測試** `.scratch/smoke/cdp.js`（內建 `fetch` ＋ `WebSocket` 直連 Edge `--remote-debugging-port`，用 `Emulation.setDeviceMetricsOverride` 取得真正的 390／375 寬視窗；Windows 的 `--window-size` 會被夾到約 500px，量不到手機寬度）。每次執行前清空 `localStorage`，四個規格各自開一個瀏覽器實例，跑完列印 `PASS=n FAIL=n` 與失敗明細。

### 一、規格與結果

| 規格 | 視窗 | 斷言數 | 結果 |
| --- | --- | --- | --- |
| `default` | 1440×900（`?full=1` 桌機） | 64 | **PASS=64 · FAIL=0** · `runtime.errors [none]` |
| `390x844` | 390×844（`mobile:true`、5 觸點） | 71 | **PASS=71 · FAIL=0** · `runtime.errors [none]` |
| `375x667` | 375×667（矮螢幕） | 71 | **PASS=71 · FAIL=0** · `runtime.errors [none]` |
| `gif` | 390×844 ＋ `#gif`（`gifshot` stub） | 14 | **PASS=14 · FAIL=0** · `runtime.errors [none]` |

> 390／375 比桌機多 7 項＝手機版面斷言（底部 4 鍵、`#editRow` 不溢出、球場高度、手冊工具列等）。

### 二、行為驗收

| ID | 檢查 | 結果 |
| --- | --- | --- |
| AC-167 | 球員點「＋ 新增戰術」→ `state.editing=true`、`body[data-edit="1"]`、`#editRow` 顯示、`#btnApprove*` 隱藏、`#pwModal` 未開啟 | PASS |
| AC-168 | 唯讀球員點工具鈕／節點鈕／`#btnSaveStep` → 只出現「需要繪製模式…」提示，`#pwModal` 不開、畫布物件數維持 12（`gate.toolBlocked`／`gate.toolToast`／`gate.noPasswordModal`／`gate.noNodeAdded`／`gate.toolsToast`） | PASS |
| AC-169 | `#editRow` 三態（唯讀隱藏／繪製顯示／教練審批換成批准鍵）；390／375 下 `.stepbar`、`#editRow` 無水平溢出、4 鍵皆在視窗內 | PASS |
| AC-170 | 儲存對話框角色切換：球員＝`提交提案`＋名單下拉、`#saveCoachWrap` 隱藏；教練＝`發布`＋暗號欄、`#savePlayerWrap` 隱藏（`save.*`／`coachSave.roleCoach` 等 6 項） | PASS |
| AC-171 | 球員送出 → 紀錄 `meta.status='pending'`；手冊顯示「未批核」＋「by #0 陳生」；教練按「✅ 批准」後轉 `approved`、批准鍵收起、加步驟鍵回來（`list.pendingTag`／`list.authorShown`／`list.hasRecord`） | PASS |
| AC-172 | 錯暗號 `9999` → 彈窗不關並顯示錯誤（`coachSave.wrongCodeStays`）；`1234` → 關閉、`approved`、自動取得教練權限（`coachSave.approved`／`modalClosed`／`autoCoach`） | PASS |
| AC-173 | 「✏️ 修改提案」→ `tacticId=null`、`tacticSource=null`、名稱結尾「 提案」、`editing=true`（`propose.detached`／`notOfficialId`／`nameSuffix`／`editing`）——官方紀錄不被覆寫 | PASS |
| AC-174 | 「✏️ 修改後批核」→ `approveOnSave=true`、儲存後 `approved`、id 不變、清單不重複、旗標歸零（`approveEdit.on`／`saved`／`approved`／`sameId`／`noDuplicate`／`cleared`） | PASS |
| AC-175 | `#gif`：擷取取得影格與 dataUrl、檔名沿用戰術名稱、結束後 loader 關閉／畫面還原／`exporting=false`；fallback 下載 GIF 並開 `wa.me`（`gif.*` 6 項 ＋ `share.*` 4 項） | PASS |
| AC-176 | 靜態檢查 `node .scratch/smoke/integrity.js`：無亂碼字樣、CSS 大括號 **503／503** 平衡、兩段 inline script `node --check` 通過、`index.html` 與 `dist/index.html` SHA256 一致（`575EF66FBDA5…96B40`） | PASS |

### 三、已知取捨／限制

1. `gif` 規格以 stub 取代 `gifshot.createGIF`：headless 環境的 Web Worker 編碼永遠不會 resolve，因此只驗證「影格擷取 → dataUrl → 畫面還原 → 分享／下載路徑」，**不驗證 GIF 位元組本身**（真機行為不變）。
2. 原生 `navigator.share` 無法在 headless 觸發，測到的是 fallback（下載 ＋ `wa.me`）；手機原生分享面板需真機驗證。
3. 提案沒有即時推播：教練要按 `↻` 或重新開啟手冊才會看到新提案（C-120）。
4. 「繪製模式」不是權限控管（C-118）：它只讓球員能動手，真正的保護是「提案另存一筆」與「批核需要暗號」。

---

## 🆕 本輪需求（US-136：頂部 Header 重構 —［球員｜教練］滑塊 ＋ ［＋ 新增］）

**日期**：2026-11-06

### 使用者故事

> **As a** 球員／教練（同時在桌機與手機上使用）
> **I want** 頂部右側固定是「［球員模式｜教練模式］滑塊 ＋ ［＋ 新增］」兩顆相鄰的元件
> **so that** 我不用為了切換身分去翻手機抽屜，而且畫新戰術永遠在同一個位置、一眼就看到。

原本的 `⎋ 切換身分` 是一個圓形小圖示鈕、又落在最右端，和「回到開場首頁」混在一起，語意不清；而手機版更把整個身分滑塊 `display:none` 藏進手冊抽屜（`.pb-tools-row` 的 `⎋ 切換身分`），切換身分要三步。本輪把 Header 收斂成「左：品牌／右：滑塊＋新增」的單一排列。

### 功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| FR-236 | 桌機 Header 右側順序固定為 **身分切換滑塊 → ＋ 新增 → 本機儲存膠囊**；原本最右側的 `⎋` 圓形鈕（`#btnHome`／`.home-btn`）連同 CSS 規則（含 ≤720px 的縮小版）與 `bindUI()` 內的 `#btnHome → backToSplash` 綁定一併刪除 | `index.html` §1 `.topbar-right`／`#topbar-actions` |
| FR-237 | 「＋ 新增」沿用既有 `#btnNewTactic` 與 `newTactic()`，只改外觀（橘色漸層膠囊 ＋ `＋` 圖示）與位置；行為（清畫布成 2-1-2、進繪製模式、必要時先跳確認框）完全不變 | `.new-tactic-btn` ＋ 既有 `newTactic` 綁定 |
| FR-238 | 手機（≤767px）同樣**並排**顯示：滑塊改短標籤「球員／教練」（`.mb-short` 顯示、`.mb-full` 隱藏）、按鈕改「＋ 新增戰術」（`.ntb-long`）；390px 與 360px 都不得換行或溢出，`本機儲存` 膠囊手機仍隱藏 | §6.5 `@media (max-width:767px)` |
| FR-239 | 兩顆元件**等高**：`.topbar-actions{display:flex;align-items:stretch}` ＋ `.new-tactic-btn{align-self:stretch}`，不寫死高度（實測桌機 37／37px、手機 29／29px）；≤380px 再加一級縮小（`.mode-btn` padding 8px／`10.5px`、`.new-tactic-btn` padding 9px／`11px`） | `@media (max-width:380px)` |

### 非功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| NFR-131 | **桌機零回歸**：只動 Header 區塊與相關文案，工具列、球場、手冊、右側工具與既有 64 項斷言全數維持 PASS | 冒煙測試五種尺寸 |
| NFR-132 | **無水平溢出**：`topbar.scrollWidth <= topbar.clientWidth` 在 1440／1184／900／768／390／375／360 皆成立 | `topbar.noOverflow` |

### 限制

| ID | 限制 | 說明 |
| --- | --- | --- |
| C-121 | 移除 `⎋` 後桌機沒有「回首頁（splash）」入口 | 手機仍可在手冊抽屜按 `⎋ 切換身分`（`#pbSwitchRole`）；`backToSplash()` 保留給它使用。桌機要回首頁目前只能重新載入頁面；若日後需要，可把 splash 掛在品牌隊徽點擊（未實作） |
| C-122 | 文案必須跟著按鈕標籤走 | 教學提示與空狀態字串由「按右上角『＋ 新增戰術』」改為「按右上角『＋ 新增』」（`toast()` 兩處、手冊空狀態兩處、`splash-foot` 一句），避免手機／桌機標籤不同造成找不到按鈕 |

### 驗收標準

- **AC-177** 桌機 1440：`#btnNewTactic` 可見、`nextElementSibling` 就是滑塊 → 兩者同一列（top 差 ≤2px）、按鈕在滑塊右方、且 `.topbar-right` 右緣與 Header padding 差 ≤2px（右對齊）。
- **AC-178** 滑塊與 `＋ 新增` **等高**（桌機 37／37、手機 29／29，差 ≤1px）。
- **AC-179** 手機 390／375／360：滑塊可見且顯示短標籤「球員」、`.mb-full` 為 `display:none`、按鈕文字含「新增戰術」。
- **AC-180** `document.querySelector('.home-btn')` 與 `#btnHome` 皆不存在（元素、CSS、JS 綁定都已移除）。
- **AC-181** 點「＋ 新增」行為不變：唯讀球員按下 → `state.editing=true`、`#editRow` 出現、`#btnApprove*` 隱藏（既有 `draw.*` 斷言）。

### Requirement Traceability Matrix（RTM）

| Requirement ID | 需求描述 | Feature/Module | User Story | Status |
| --- | --- | --- | --- | --- |
| FR-236 | 桌機右側＝滑塊→＋新增→儲存膠囊，移除 `⎋` | `.topbar-right` / `.topbar-actions` | US-136 | Verified |
| FR-237 | 「＋ 新增」沿用 `#btnNewTactic`／`newTactic()` 只改外觀 | `.new-tactic-btn` | US-136 | Verified |
| FR-238 | 手機並排、短標籤「球員／教練」＋「＋ 新增戰術」 | §6.5 `max-width:767px` | US-136 | Verified |
| FR-239 | 兩顆等高（stretch）＋ ≤380px 再縮一級 | §6. 媒體查詢 | US-136 | Verified |
| NFR-131 | 桌機零回歸 | 冒煙測試 | US-136 | Verified |
| NFR-132 | Header 無水平溢出 | `topbar.noOverflow` | US-136 | Verified |
| C-121 | 桌機失去「回首頁」入口 | — | US-136 | Accepted |
| C-122 | 提示文案對齊「＋ 新增」 | `toast()` / 空狀態 / `splash-foot` | US-136 | Verified |
| AC-177～AC-181 | 驗收 | 見下方「驗收紀錄（本輪：頂部 Header 重構）」 | US-136 | Verified |

---

## ✅ 驗收紀錄（本輪：頂部 Header 重構 US-136）

**日期**：2026-11-06 ｜ **方式**：`npm run build`（`index.html` → `dist/`）→ `node .scratch/smoke/integrity.js`（靜態檢查）→ `node .scratch/smoke/build.js` ＋ `node .scratch/smoke/cdp.js`（Node CDP 直連 Edge，`Emulation.setDeviceMetricsOverride` 取得真正的 390／375／360 寬視窗）→ `node .scratch/smoke/shot.js`（PNG 截圖目視）。本次並在 `cdp.js` 的 `SPECS` 新增 **`360x740`**（超窄機），以及新的截圖腳本 `shot.js`（乾淨頁面＋自動進站＋Header 2x 特寫裁切）。

### 一、規格與結果

| 規格 | 視窗 | 斷言數 | 結果 |
| --- | --- | --- | --- |
| `1440x900` | 1440×900（`?full=1` 桌機） | 77 | **PASS=77 · FAIL=0** · `runtime.errors [none]` |
| `1184x820` | 1184×820（`?full=1` 中桌機） | 77 | **PASS=77 · FAIL=0** · `runtime.errors [none]` |
| `900x900` | 900×900（平板，`本機儲存` 隱藏） | 77 | **PASS=77 · FAIL=0** · `runtime.errors [none]` |
| `768x1024` | 768×1024（平板最小寬，品牌顯示全名） | 77 | **PASS=77 · FAIL=0** · `runtime.errors [none]` |
| `390x844` | 390×844（iPhone 14 尺寸） | 87 | **PASS=87 · FAIL=0** · `runtime.errors [none]` |
| `375x667` | 375×667（矮螢幕） | 87 | **PASS=87 · FAIL=0** · `runtime.errors [none]` |
| `360x740` | 360×740（**新增**超窄機） | 87 | **PASS=87 · FAIL=0** · `runtime.errors [none]` |
| `gif` | 390×844 ＋ `#gif`（`gifshot` stub） | 14 | **PASS=14 · FAIL=0** · `runtime.errors [none]` |

> 本輪新增 13 項 `topbar.*`（桌機／手機共用）＋ 4 項 `mobile.mode*`／`mobile.newLabelLong`；桌機由 64 → 77、手機由 71 → 87。

### 二、行為驗收

實測幾何（`shot.js` 的 probe 與 `topbar.*` 斷言）：

| 寬度 | 滑塊（寬×高） | ＋ 新增（寬×高） | 間距 | Header 溢出 |
| --- | --- | --- | --- | --- |
| 1440 | 179 × **37** | 73 × **37** | 10px | 無（1440／1440） |
| 1184 / 900 / 768 | 179 × **37** | 73 × **37** | 10px | 無（768／768） |
| 390 | 93 × **29** | 88 × **29** | 6px | 無（390／390） |
| 375 | 93 × **29** | 88 × **29** | 6px | 無（375／375） |
| 360 | 83 × **29** | 82 × **29** | 6px | 無（360／360） |

| ID | 檢查 | 結果 |
| --- | --- | --- |
| AC-177 | `topbar.adjacent [new-tactic-btn]`、`topbar.newRightOfSwitch`、`topbar.sameRow [18/18]`（桌機）／`[7/7]`（手機）、`topbar.rightAligned [18px gutter]`（桌機）／`[12px gutter]`（手機）、`topbar.storePillAfterNew [12px gap]`（桌機） | PASS |
| AC-178 | `topbar.heightMatch [37 vs 37]`（1440／1184）、`[29 vs 29]`（390／375／360） | PASS |
| AC-179 | `mobile.modeSwitchVisible`、`mobile.modeLabelShort [球員]`、`mobile.modeLabelFullHidden`、`mobile.newLabelLong [＋新增新增戰術]` | PASS |
| AC-180 | `topbar.homeRemoved`（`.home-btn`／`#btnHome` 都不存在）；`Select-String 'home-btn|btnHome|hb-txt'` 在 `index.html` 已無任何命中 | PASS |
| AC-181 | 既有 `draw.editing`／`draw.bodyEdit`／`draw.editRowShown`／`draw.addVisible`／`draw.saveVisible`／`draw.approveHidden`／`draw.approveEditHidden` 全數維持 PASS（點「＋ 新增」行為不變） | PASS |
| AC-177～181 補充 | `topbar.leftBrandFirst`、`topbar.switchRetained`、`topbar.newVisible`、`topbar.noOverflow`（五種寬度）、`topbar.platformDesktop` | PASS |
| — | 靜態檢查：無亂碼字樣、CSS 大括號 **516／516** 平衡、兩段 inline script `node --check` 通過（702／146750 chars）、`index.html` 與 `dist/index.html` SHA256 一致（`BF9634D0F97C`） | PASS |

### 三、目視驗證（截圖）

| 檔案 | 內容 | 結果 |
| --- | --- | --- |
| `.scratch/v4-topbar-1440.png` / `-hdr.png` | 桌機：左隊徽＋`MONDAY BEER & BASKETBALL`；右「球員模式｜教練模式」滑塊 →「＋ 新增」橘色膠囊 →「本機儲存」膠囊 | 符合 |
| `.scratch/v4-topbar-390.png` / `-hdr.png` | 手機 390：隊徽＋`MondayBeer`；右「球員｜教練」短標籤滑塊 →「＋ 新增戰術」；球場、步驟長卡、底部 4 鍵均未受影響 | 符合 |
| `.scratch/v4-topbar-360-hdr.png` | 360 超窄機：仍並排、不換行、不裁切 | 符合 |
| `.scratch/v4-topbar-768-hdr.png` / `-900-hdr.png` | 平板 768／900：品牌顯示全名、`本機儲存` 已因 ≤1100px 隱藏，滑塊＋「＋ 新增」仍貼右對齊 | 符合 |

### 四、已知取捨／限制

1. **桌機失去「回首頁（splash）」入口**（C-121）：`⎋` 鈕已移除，`backToSplash()` 只剩手機手冊抽屜的 `⎋ 切換身分`（`#pbSwitchRole`）在用。若日後要補回，建議掛在品牌隊徽點擊，而不是再塞一顆小圖示鈕。
2. **手冊抽屜的 `⎋ 切換身分` 保留**：手機使用者要回開場頁仍有入口，只是不再從 Header 進來。
3. **`本機儲存` 膠囊位置不動**：仍在最右端（≤1100px 與手機皆隱藏），維持原本的「狀態顯示」語意，不與動作按鈕混在一起。
4. **按鈕高度靠 `stretch` 對齊**：沒有寫死 `height`，之後改字級／padding 時兩顆會自己保持一致；代價是若未來在 `.topbar-actions` 內加入第三顆較高元件，另兩顆會跟著長高。

---

## 🆕 本輪需求（US-137：手冊精簡＋「＋ 新增」建立對話框＋隊徽回首頁＋存檔鍵分身分）

**日期**：2026-11-06

### 使用者故事

> **As a** 球員／教練（手機與桌機都用）
> **I want** 左側「戰術手冊」就只是「標題 ＋ 關閉 ＋ 清單」，開新戰術一律從右上「＋ 新增」跳一張小表單（名稱／提議球員／防守陣型），隊徽按一下就回開場首頁，存檔鍵則依我的身分顯示「提交審核」或「儲存」
> **so that** 手冊不再塞一堆工具鈕、我不會因為找不到「新戰術」而放棄，也不會在球員模式下誤按到「儲存」而不清楚那是送審。

原本手冊抽屜／側欄把「➕ 新增戰術／✏️ 修改提案／⎋ 切換身分／↻ 重新整理」四顆工具鈕塞在標題下方（`.pb-tools-row`），手機還多一列 `.pb-new-row`；「新戰術」是清空畫布後直接進繪製模式，名稱要等存檔才知道；回首頁只有手機抽屜的 `⎋`；存檔鍵在球員模式仍寫「儲存」。本輪把入口收斂到 Header 的「＋ 新增」，並用一張對話框把「這套戰術是什麼」問清楚。

### 功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| FR-240 | 戰術手冊（`.playbook`）只剩三段：`.pb-head`（`h2 戰術手冊` ＋ `#pbClose ✕`）＋ `#pbList` ＋ 底部提示；刪除 `.pb-tools-row`（`#pbTools`／`#pbPropose`／`#pbSwitchRole`）、`.pb-new-row`（`#pbNewTactic`）、`.pb-refresh`（`#pbRefresh`）與 `#pbNameInput`，連同 CSS（`.pb-new-*`／`.pb-refresh`／`.pb-tools-row`）與 `bindUI()` 綁定 | `index.html` §5.6（CSS）／「戰術手冊側欄」（HTML）／`bindUI()` |
| FR-241 | 右上「＋ 新增」改為**開對話框** `#createModal`：`#createName`（預設 `nextTacticName()`）／`#createPerson`（名單 18 人，記住上次選擇）／`#createDefense`（`2-1-2` 首選／`2-3`／`3-2`／`人盯人`）＋ `#createError`；名稱空白不關框，`submitCreateForm()` → `startDrawingFlow(name, personNo, defenseKey)` | `openCreateDialog()`／`fillCreateOptions()`／`submitCreateForm()`／`startDrawingFlow()` |
| FR-242 | `startDrawingFlow()` 承接原本 `newTactic()` 的清畫布流程：必要時先跳確認框（沿用 `#confirmModal`），清成 2-1-2／步驟 1、寫入 `state.tacticName`／`state.tacticAuthor`／`state.tacticDefense`，非 `212` 時以 340ms 補間套上防守預設 | `startDrawingFlow()` |
| FR-243 | `.brand`（隊徽＋`MONDAY BEER & BASKETBALL`／手機 `MondayBeer`）改為 `<button type="button" id="brandHome">`，點擊 `backToSplash()`；加上 `.brand:hover`／`:active`／`cursor:pointer` 與 `:focus-visible` 焦點環 | `.brand` CSS ＋ `bind('#brandHome', …)` |
| FR-244 | ~~存檔鍵依身分與狀態切換：教練／繪製中＝`💾 儲存`、球員＝`💾 提交審核`~~ **已被 US-138／FR-249 取代**：改由「作者」決定語意（`📤 提交審核`／`📢 發布`），唯讀時 `#btnSaveTactic` 仍 `hidden`，手機 `#btnQuickSave` 已移除。`syncEditRow()` 統一處理 `#editRowSave`／`#editRowTools`／`#btnSaveTactic`／`#btnQuickSave`／`#btnShare` 的顯隱與文案 | `syncEditRow()` |
| FR-245 | ~~手機把「儲存」放進底部 4 鍵的第 4 格~~ **已被 US-138／FR-250 取代**：底部 4 鍵永久固定（`#btnQuickSave` 已刪除，`#btnShare` 不再讓位） | ~~§6.5 `#btnQuickSave` 規則~~ → §6.5 `#btnShare` |
| FR-246 | 繪製中的教練工具在任何寬度都到得了：`>1100px` 走三欄（`.playbook ｜ stage ｜ .sidebar`）；`768–1100px` 由步驟列的 `#sideToggle` 開右側抽屜（`body[data-edit="1"] .sidebar{display:flex!important}` ＋ `body[data-edit="1"] #sideToggle{display:grid}`）；`≤767px` 用輕量列新增的 `🛠 名單`（`#editRowTools` → `openSidebar(true)`） | `@media (max-width:1100px)`／`(max-width:767px)` ＋ `#editRow .er-tools` |
| FR-247 | 防守陣型存進 `meta.defense`（**不動 DB schema**）：`openSaveDialog()` 寫入、載入戰術時回填 `state.tacticDefense` 與 `#createDefense` 上次選擇；`meta.defense` 缺漏／未知值一律 fallback `212` | `openSaveDialog()`／`loadTactic()`／`startDrawingFlow()` |
| FR-248 | 移除「✏️ 修改提案」路徑：`startProposalEdit()`／`syncTacticNameField()`／`focusTacticNameField()` 與 `#pbPropose` 綁定全數刪除；球員要改既有戰術就是「重新建立一套並送審」 | `index.html` JS |

### 非功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| NFR-133 | **零回歸**：8 個 spec（1440／1184／900／768／390／375／360／gif）全部 `FAIL=0`，且 `runtime.errors [none]` | `node .scratch/smoke/cdp.js` |
| NFR-134 | **無水平溢出**：`topbar.scrollWidth <= clientWidth` 在 7 種寬度成立；手機 `#editRow` 也必須 `scrollWidth <= clientWidth`（三顆按鈕不能撐破） | `topbar.noOverflow`／`mobile.editRowNoOverflow` |
| NFR-135 | **存檔向後相容**：既有紀錄沒有 `meta.defense` 也能正常載入（防守維持畫面上的 2-1-2），舊資料不必遷移 | `loadTactic()` 的 `defenseOf()` |

### 限制

| ID | 限制 | 說明 |
| --- | --- | --- |
| C-123 | 桌機（>1100px）手冊**看不到 `✕`** | 桌機手冊是版面固定的一欄，關掉就沒有再打開的入口；`.pb-close` 只在 `≤1100px`（抽屜模式）`display:block`。要收起桌機右側工具仍用側欄上的 `›`／`‹` |
| C-124 | `768–1100px` 的工具抽屜**沒有獨立關閉鈕** | 抽屜會蓋住步驟列上的 `🛠`，關閉靠點一下變暗的球場（`#pbScrim` → `openSidebar(false)`）；`≤767px` 的抽屜仍有把手下滑／`☰` 切換 |
| C-125 | 球員「改既有戰術」不再是原地另存提案 | 「✏️ 修改提案」已移除，流程改成「＋ 新增 → 重新建立 → 💾 提交審核」，成本是球員要重新畫一遍（換來手冊與程式都少一條分支） |

---

### 驗收標準

- **AC-182** 手冊只剩「標題＋`✕`＋清單」：`.playbook .pb-tools-row`、`.pb-new-row`、`.pb-refresh` 皆不存在，`#pbTools`／`#pbPropose`／`#pbSwitchRole`／`#pbNewTactic`／`#pbRefresh`／`#pbNameInput` 皆為 `null`，`.pb-head` 內只剩一顆 `#pbClose`，`#pbList` 仍在。
- **AC-183** 按「＋ 新增」→ `#createModal` 開啟、`#createName` 有預設值、`#createPerson` 18 個選項、`#createDefense` 預設 `212` 且有 4 個選項。
- **AC-184** 名稱清空送出 → 對話框不關、`#createError` 有錯誤文字；填好並選 `34`／`23` → 關框、`state.tacticName`／`state.tacticAuthor.no === 34`／`state.tacticDefense === '23'`、只剩「步驟 1」、進入繪製模式。
- **AC-185** 繪製模式：`body.dataset.edit === '1'`、`#editRow` 出現、`#editRowAdd`／`#editRowTools`／`#editRowSave` 可見、`#editRowSave` 文案含「提交審核」、`#btnSaveTactic` 可見、`#btnApprove*` 隱藏。
- **AC-186** 工具入口：`>1100px` 側欄 `display !== none`；`≤1100px` `#sideToggle` 可見，點一下開抽屜（`#rosterGrid` ≥ 10 項、`#defGrid .def-btn` = 5），再點一下收起。
- **AC-187** ~~手機繪製中：`#btnQuickSave` 可見且文字含「提交」、與 `#btnShare` 同格（`quickSaveSameCell`）、`#btnShare` 隱藏~~ → **已被 US-138／AC-191 取代**（底部 4 鍵永久固定、`#btnQuickSave` 已移除）；`#editRowTools` 可見、點它會開工具抽屜（`#sidebar.is-open`），關閉後 `is-open` 移除（仍有效）。
- **AC-188** 隊徽是 `<button id="brandHome">`、不在其他 button 內；點擊後 `#splash` 出現、`body` 離開編輯狀態，再按「我是球員」可回到球員模式。
- **AC-189** 唯讀球員：`#btnSaveTactic` 仍 `hidden`、`#btnShare` 一直可見（US-138 起沒有 `#btnQuickSave` 讓位）、手冊沒有「修改提案」入口；載入含 `meta.defense` 的紀錄時 `state.tacticDefense` 正確回填。

### Requirement Traceability Matrix（RTM）

| Requirement ID | 需求描述 | Feature/Module | User Story | Status |
| --- | --- | --- | --- | --- |
| FR-240 | 手冊只剩標題＋✕＋清單，移除四顆工具鈕與 `#pbNameInput` | `.playbook` / §5.6 | US-137 | Verified |
| FR-241 | 「＋ 新增」→ 建立新戰術對話框（名稱／提議球員／防守陣型） | `#createModal` | US-137 | Verified |
| FR-242 | `startDrawingFlow()` 清畫布／套防守預設／寫入 state | `startDrawingFlow()` | US-137 | Verified |
| FR-243 | 隊徽改按鈕，點擊回首頁 | `.brand` / `#brandHome` | US-137 | Verified |
| FR-244 | ~~存檔鍵依身分切「儲存／提交審核」、唯讀隱藏~~ | `syncEditRow()` | US-137 | Superseded（US-138 / FR-249） |
| FR-245 | ~~手機第 4 鍵＝`#btnQuickSave`（與 `#btnShare` 互斥同格）~~ | §6.5 `grid-area:share` | US-137 | Superseded（US-138 / FR-250） |
| FR-246 | 繪製中工具入口：三欄／`🛠` 抽屜／`🛠 名單` | `.stage` ＋ media queries | US-137 | Verified |
| FR-247 | `meta.defense` 存取與 fallback `212` | `openSaveDialog()` / `loadTactic()` | US-137 | Verified |
| FR-248 | 移除「✏️ 修改提案」整條路徑 | `index.html` JS | US-137 | Verified |
| NFR-133 | 8 個 spec 全綠、無 runtime error | 冒煙測試 | US-137 | Verified |
| NFR-134 | Header／`#editRow` 無水平溢出 | `topbar.noOverflow` / `mobile.editRowNoOverflow` | US-137 | Verified |
| NFR-135 | 舊紀錄無 `meta.defense` 仍可載入 | `defenseOf()` | US-137 | Verified |
| C-123 | 桌機手冊無 `✕` | — | US-137 | Accepted |
| C-124 | 768–1100 抽屜靠 scrim 關閉 | `#pbScrim` | US-137 | Accepted |
| C-125 | 球員改戰術＝重新建立 | — | US-137 | Accepted |
| AC-182～AC-189 | 驗收 | 見下方「驗收紀錄（本輪：US-137）」 | US-137 | Verified |


## ✅ 驗收紀錄（本輪：手冊精簡 ＋ 建立對話框 ＋ 隊徽回首頁 US-137）

**日期**：2026-11-06 ｜ **方式**：`npm run build` → `node .scratch/smoke/integrity.js`（靜態）→ `node .scratch/smoke/build.js`（重建測試頁）→ `node .scratch/smoke/cdp.js`（8 spec）→ `node .scratch/smoke/shot.js`（PNG 目視）。

### 一、規格與結果

| 規格 | 視窗 | 斷言數 | 結果 |
| --- | --- | --- | --- |
| `1440x900` | 1440×900（`?full=1` 桌機：三欄） | 102 | **PASS=102 · FAIL=0** |
| `1184x820` | 1184×820（中桌機，仍在三欄區） | 102 | **PASS=102 · FAIL=0** |
| `900x900` | 900×900（平板：工具改右側抽屜） | 106 | **PASS=106 · FAIL=0** |
| `768x1024` | 768×1024（平板最小寬／斷點邊界） | 106 | **PASS=106 · FAIL=0** |
| `390x844` | 390×844（iPhone 14 尺寸） | 120 | **PASS=120 · FAIL=0** |
| `375x667` | 375×667（矮螢幕，`is-dense`） | 120 | **PASS=120 · FAIL=0** |
| `360x740` | 360×740（超窄機） | 120 | **PASS=120 · FAIL=0** |
| `gif` | 390×844 ＋ `#gif` | 14 | **PASS=14 · FAIL=0** |

> 本輪新增 5 項 `pb.*`、11 項 `create.*`、5 項 `readonly.*`、5 項 `mobile.*`（`quickSave*`／`toolsDrawer*`／`editRowNoOverflow`）、5 項 `home.*`、5 項 `tools.*`；桌機 77 → 102／106，手機 87 → 120。

### 二、行為驗收

| ID | 檢查（斷言 id） | 結果 |
| --- | --- | --- |
| AC-182 | `pb.headOnlyTitleAndClose`、`pb.listKept`、`pb.newRowRemoved`、`pb.toolsRowRemoved`、`pb.refreshRemoved` | PASS |
| AC-183 | `create.modalOpen`、`create.namePrefilled [新戰術 1]`、`create.rosterOptions [18 opts]`、`create.defenseDefault [212]`、`create.defenseOptions [4 opts]` | PASS |
| AC-184 | `create.nameRequired`、`create.modalClosed`、`create.tacticName`、`create.authorSet [#34]`、`create.defenseStored [23]`、`create.freshStep1 [1 steps]` | PASS |
| AC-185 | `draw.editing`、`draw.bodyEdit`、`draw.canEditTrue`、`draw.editRowShown`、`draw.addVisible`、`draw.toolsVisible`、`draw.saveVisible`、`draw.saveLabelProposal [💾 提交審核]`、`draw.deskSaveShown`、`draw.approveHidden`、`draw.approveEditHidden` | PASS |
| AC-186 | `tools.entryRule`（`w=900/768 toggle=shown`、`w=1440 sidebar flex`）、`tools.toggleOpensDrawer`、`tools.drawerRoster [18 players]`、`tools.drawerDefense [5 presets]`、`tools.toggleClosesDrawer` | PASS |
| AC-187 | `mobile.quickSaveVisible`、`mobile.quickSaveLabel`、`mobile.quickSaveSameCell`、`mobile.shareHiddenWhileDrawing`、`mobile.toolsDrawerReachable`／`Opens`／`Closes`、`mobile.editRowNoOverflow` | PASS |
| AC-188 | `home.brandIsButton`、`home.notNestedInButton`、`home.splashOpened`、`home.splashedBodyMode`、`home.backToPlayer` | PASS |
| AC-189 | `readonly.deskSaveHidden`、`readonly.quickSaveHidden`、`readonly.noProposeEntry`、`readonly.shareBack`、`readonly.metaDefenseKept` | PASS |
| NFR-133 | 8 spec 全 `FAIL=0`（見上表），`runtime.errors [none]` | PASS |
| NFR-134 | `topbar.noOverflow`（1440／1184／900／768／390／375／360）、`mobile.editRowNoOverflow` | PASS |
| — | 靜態：CSS 大括號 **512／512** 平衡、兩段 inline script `node --check` 通過（702／149445 chars）、`index.html` 與 `dist/index.html` SHA256 一致（`4EFB55E7F348`） | PASS |

### 三、目視驗證（截圖，2× DPR）

| 檔案 | 內容 | 結果 |
| --- | --- | --- |
| `.scratch/us137-book-1440.png` | 桌機唯讀：左側手冊只剩「戰術手冊」＋清單＋底部提示（`↻`／`➕ 新增戰術`／工具列全消失）；Header 右側仍是滑塊＋「＋ 新增」 | 符合 |
| `.scratch/us137-create-1440.png` | 「建立新戰術」對話框：`戰術名稱 新戰術 1`／`提議球員 #0 陳生 PG`（18 人）／`防守陣型 2-1-2 聯防・首選`／`取消`＋`開始繪製` | 符合 |
| `.scratch/us137-draw-1440.png` | 建立後直接進繪製模式：三欄（手冊｜球場｜教練工具）、步驟列只有「步驟 1」、右上 `⬇ 導出 GIF`＋`💾 提交審核`、底部 toast 提示按「💾 提交審核」 | 符合 |
| `.scratch/us137-draw-900.png` | 平板（900）：點步驟列 `🛠` 後工具從右側滑入（球員名單／防守陣型／戰術線條），球場變暗可點擊關閉 | 符合 |
| `.scratch/us137-draw-390.png` | 手機繪製中：輕量列「＋ 加步驟／🛠 名單／💾 提交審核」、底部 4 鍵第 4 格換成 `💾 提交審核`、步驟卡只有 1 張 | 符合 |

### 四、已知取捨／限制

1. **桌機看不到 `✕`**（C-123）：`.pb-close` 只在抽屜寬度出現，桌機手冊是固定欄位。
2. **768–1100px 抽屜只能點球場關閉**（C-124）：抽屜蓋住步驟列的 `🛠`，靠 `#pbScrim` 關；若之後覺得卡，可在 `.sidebar-head` 補一顆 `✕`（手機版已有把手下滑）。
3. **「✏️ 修改提案」整條移除**（C-125）：球員改戰術＝重新建立；存檔一律新增一筆，不會覆蓋官方紀錄。
4. **`meta.defense` 只存在 `meta` 裡**：Supabase／本機存檔都走同一個 JSON 欄位，沒有 migration；舊資料載入時維持畫面預設 2-1-2。
5. **`shot.js` 新增 `pre`／`post` 勾子**：`pre` 在頁面載入後執行、`post` 再等 1.2 秒；`draw*` 規格靠它自動走完「＋ 新增 → 送出 → 確認清空」。**改 `index.html` 或 `harness.js` 後一定要先 `node .scratch/smoke/build.js`**，否則 `cdp.js` 會偷偷測到舊的暫存頁。

---


## 🧭 使用說明

1. **開啟**：直接雙擊 `index.html`（`file://` 可用），或放到任何靜態伺服器／Netlify／GitHub Pages。一進來是**開場首頁**：上方圓形隊徽（讀取同資料夾的 `WhatsApp Image …jpeg`，找不到時顯示 `MB` 字樣）＋ `MONDAY BEER & BASKETBALL`，下面兩張卡片選身分——**我是球員**（唯讀看戰術）或 **我是教練**（需密碼）。進站後**不用回首頁也能換身分**：頂部右側固定是「球員模式｜教練模式」滑塊（手機顯示短標籤「球員｜教練」），右邊緊接一顆橘色「＋ 新增」；要回開場首頁，**點左上角的隊徽或隊名**即可（那個區塊本身就是回首頁按鈕；手冊抽屜原本的 `⎋ 切換身分` 已移除）。球場已改為乾淨紙白漸層（不再有隊徽浮水印）。
2. **教練模式**：首頁點「我是教練」→ 輸入 `coach888`（或進站後點右上「教練模式」）。
3. **畫戰術（拖曳就會記錄）**：**直接把球員拖到想要的位置**，放開就自動長出軌跡線——持球的人拖曳時球會跟著手跑（波浪＝運球）、其他人是切入箭頭、防守員是藍色「防守移動」箭頭；**要傳球就把籃球拖到隊友身上**（靠近時會亮起橙色候選圈，放開即吸附到手上、生成傳球虛線並換人持球，下一步的持球者也會一起換）。想手動補線再用「戰術線條」工具在球場拖曳畫線 → 按「儲存此步驟」或「＋」新增下一步（**新步驟沿用目前畫面，但不會帶上自動軌跡線，手畫的線會保留**）。右側工具列由上而下是「球員名單 → 防守陣型 → 戰術線條 → 動作 → 防守與球」（原本最下方那張「快捷鍵 SHORTCUTS」說明卡已整張移除，桌機／手機都不再佔版面；鍵盤快捷鍵照樣可用，只是不再列在畫面上）；「防守與球」（`PG`／`SG`／`SF`／`PF`／`C`＋籃球）收在最下方、**預設收合**，要加防守員或球時點一下標題展開。**進攻球員請由最上方的「球員名單」點背號派上場**。
4. **套用經典戰術**：左側手冊「經典戰術 7 套」分三類（破 2-1-2 聯防 2／破 3-2 聯防 2／底線開球 3）— 手機上這三類是**入口列**（右側 `›`）：點一下整層切到該分類的子頁面（上方 `‹ 返回分類` 可滑回第一層，子頁面只列該分類的戰術），**點任一套即載入 4 個步驟、自動循環播放並收起手冊**；桌機維持原本的原地展開（Accordion），**點任一套即載入 4 個步驟並自動開始循環播放**（含路線與解說），要修改再按「■ 停止播放」；載入後目前戰術會以磚紅左側色條標示，`我的戰術` 仍保留原本存檔。播放中點另一套會先停下目前動畫再換，不會兩段交錯。
5. **讀懂每一步**：球場右上角顯示該步的「機會標籤」（例：`順下吃餅`）；持球的人會有橙色柔光（球會偏在他手側，不會蓋住背號），播放時移動中的球員會留下殘影，跟著光與殘影就知道球往哪走。
6. **排防守**：右側「防守陣型」點 2-1-2／2-3／3-2／人盯人，五位防守者會以動畫移到標準防區（可 `Ctrl+Z` 復原）；人盯人會依目前進攻球員位置自動貼防。要擺自己的陣型就按最下方 **「自訂防守」**，之後直接拖曳 `PG`–`C` 到想要的位置，放開即記進目前步驟（不必再按「儲存此步驟」），並自動留下一條藍色「防守移動」箭頭說明誰補到哪裡。
7. **派名單球員**：右側「球員名單」按背號由小到大排好（18 人），每人顯示「背號＋姓名＋位置」（例 `31 Sai PF/C`）；上方的位置 chips（`全部`／`PG/SG 後衛`／`SF/PF 前鋒`／`PF/C 中前鋒`）可一鍵只看那類人（可打多位置者會同時出現在相關分類），點背號即以「背號＋姓名」上場；同一背號再點一次只會選取既有球員。
8. **看動畫**：載入戰術會自動播放；也可按 `播放動畫`（或 `Space`）手動播放，播放中再按一次即「停止播放」；`∞`（或 `L`）循環預設開啟，練球時可一直重播（系統開啟「減少動態」時不自動播放）。戰術庫載入的聯防防守會隨球自動輪轉（最近的人關門），看起來是「活的防守」。
9. **講解時收起工具列（桌面 >1100px）**：點右側「教練工具 TOOLS」標題列右端的 `›`，工具列收起、球場自動放大並居中，右緣中段留一個 `‹` 把手；點 `‹` 即展開。狀態會記在瀏覽器裡，下次進教練模式自動還原。
10. **開一套新戰術（免教練密碼）**：右上角的 **「＋ 新增」**（手機顯示「＋ 新增戰術」；桌機／手機都在身分滑塊右邊）任何人都能按——按下先開 **「建立新戰術」對話框**：`戰術名稱`（預設「新戰術 N」，可改）＋ `提議球員 / 作者 (Author)`（名單 18 人 ＋ 置頂的「🏀 教練 (Coach)」，依身分自動帶入上次選的人／教練模式自動選教練）＋ `防守陣型`（2-1-2 首選／2-3／3-2／人盯人，預設 2-1-2）；名稱空白會留在框內提示，按 **「開始繪製」** 才真正進場。進場後：畫布清成預設 2-1-2（5 攻 5 守 1 球）＋ 只留「步驟 1」，並把剛才選的陣型用 340ms 補間套上去（選 2-1-2 則免動畫），繪製相關工具（球員名單／防守陣型／戰術線條／動作）全部可用。按「開始繪製」本身就是確認動作——畫布直接清成預設站位，**不會再跳第二次「畫布會被清空」確認框**；只想清空則用「重設球場」。**唯讀狀態下按工具鈕不會再跳教練密碼框**，只會提示「需要繪製模式…」。
11. **存檔／改名／刪除**：繪製中按步驟清單上方的 **「📤 提交審核」**（作者選了「🏀 教練」時是 **「📢 發布」**）就**直接寫入**：作者＝球員 → 存成「未批核」提案、作者＝教練 → 直接進官方手冊，**不再開存檔對話框**（名稱已在「建立新戰術」填好）。左側「戰術手冊」每列右側有 ✎（改名）與垃圾桶（刪除，需確認），點名稱即載入；手冊頂部已無 `↻`（清單載入／存檔後會自動刷新）。
12. **手機（直向 ≤767px）**：頂部 Header 只留「隊徽 ＋ `MondayBeer`」，右側並排「球員｜教練」短標籤滑塊 ＋ 橘色「＋ 新增戰術」（390／375／360 都不換行；`本機儲存` 膠囊在手機隱藏）。版面只剩三塊——**球場滿版**（100vw、比例與 FIBA 一致、不裁切、無圓角）＋**球場正下方那一張白底控制卡**（與球場下緣零間隙、卡片一路延伸到螢幕底，上方圓角＋上緣陰影）。卡片上半部是**一步一步的長條卡片清單**：每張卡左邊是編號徽章、中間是**步驟名稱＋機會標籤＋這一步的跑位說明**、右邊是 `›`（提示可切換）；**目前這一步會整張變成磚紅色**（白字、右側改成播放指示 `●`，播放中會脈動），其他步驟是白底。有空間時卡片會自動長高填滿（單張最高約 118px；只有 2 步時整組會垂直居中），步驟多到放不下時**清單自己捲動**（底部會淡出提示下面還有卡片），不會把下方按鈕推走。卡片下半部固定 **4 顆均分鍵**：`▶ 播放`／`∞`／`☰ 戰術手冊`／`💬 分享`（播放中播放鍵顯示 `⏸ 暫停`；**這 4 顆永遠固定，繪製中也不會被儲存鍵取代**）。**加步驟、名單、儲存、批核不佔底部**——它們在步驟清單上方的一列輕量條：繪製模式＝「＋ 加步驟／🛠 陣容／📤 提交審核」（作者＝教練 → `📢 發布`），教練看到未批核提案＝「✅ 批准／✏️ 修改後批核」（唯讀時整列不出現）。`☰` 是**78dvh 的大抽屜**（分類 → 子頁面，見第 4 點；抽屜只剩「標題＋`✕`＋清單」，操作全部移到右上「＋ 新增」與繪製模式，最下方仍是 `⬇ 儲存 GIF`）、`🛠` 是依球場下緣限高的工具抽屜（兩者上方都有把手，往下滑、按 `✕` 或點一下球場即收起）；提示訊息**一次只顯示一則、1.5 秒後自動淡出**，而且會浮在控制卡上緣、不會蓋住步驟卡片；教練工具面板裡有「導出 GIF／複製此步驟／刪除此步驟」三顆按鈕。**手機上同樣可以直接用手指拖曳球員跑位、把球拖到隊友身上完成傳球**（籃球感應區已比外觀放大約一倍）；畫布設 `touch-action:none`，**拖曳時整頁不會跟著滾動**，輕點（位移 < 10px）也不會被誤判成拖曳。平板（768–1100px）與桌面（>1100px）版面與功能完全沒變。
13. **分享**：手機底部第 4 鍵 **「💬 分享」** 會先把整套戰術做成 GIF——支援原生分享的裝置（大多數手機瀏覽器）直接叫出系統分享面板，選 WhatsApp 就整份 GIF 丟進群組；桌機或不支援時自動改成「下載 GIF ＋ 開啟 WhatsApp 對話」，貼上附檔即可（文案已帶好戰術名稱與步驟數）。只想存檔就用手冊抽屜最下方的 `⬇ 儲存 GIF`（桌機是右側工具列的 `導出 GIF`）；檔名就是戰術名稱（`底線電梯門 · 底線發球` → `底線電梯門_底線發球.gif`，未命名時 `MondayBeer_Tactic.gif`）。
14. **雲端存檔（選用）**：在 `index.html` 的 `SUPABASE_URL` / `SUPABASE_ANON_KEY` 填入專案金鑰，並依檔案內註解建立 `tactics` 資料表與 RLS policy，之後儲存會自動改走 Supabase（右上狀態膠囊會變成綠色「Supabase 雲端」）。
15. **桌面看「手機視角」**：在電腦瀏覽器打開時，預設會把整個 App 裝進一個 **390 寬的 iPhone 框**（深色底、圓角邊框＋陰影，下方說明列顯示框內真實尺寸，例如 `390 × 760`）。框內跑的是真正的手機版（同源 iframe 載入 `index.html?phone=1`，框內 `innerWidth` 就是 390），所以版面、Bottom Sheet、`dvh` 行為與球員手機上看到的完全一致。要暫時看原本的大螢幕版面，按框下說明列的 **「🖥 桌面視窗」**（網址會變 `?full=1`），按瀏覽器**上一頁**即回到手機框；真機（寬 <768px 或 iPad 等觸控裝置）一律全螢幕、不會出現外框。
16. **球員提案 → 教練批核（免帳號）**：球員畫完按 **「📤 提交審核」** 就直接存成一份**「未批核」**的戰術（作者＝建立時選的球員，例 `#0 陳生`；手冊清單會標示「未批核」＋ `by #0 陳生`，並排在已批核的後面）。想改教練既有的戰術時，球員請按右上 **「＋ 新增」**重新建立一套（US-137 起手冊不再有「✏️ 修改提案」入口——建立時可填名稱／提議球員／防守陣型），存檔一定是**新增一筆**，不會蓋掉官方紀錄。教練看到未批核的戰術時，步驟清單上方會出現 **「✅ 批准」**（一鍵納入官方手冊）與 **「✏️ 修改後批核」**（先改內容，按「📢 發布」時一併變成已批核）；教練也可以在「建立新戰術」的作者下拉直接選 **「🏀 教練 (Coach)」**，繪製中按 **「📢 發布」** 就免暗號直接發布；要手動輸入暗號仍可從儲存對話框切到「📋 我是教練」，輸入 `1234`（已在教練模式則免輸入）。

---

## 🔭 後續（尚未實作）

| 候選需求 | 說明 |
| --- | --- |
| FR-116 | 線條可拖曳端點微調（目前只能整條移動／刪除） |
| FR-117 | 全場版面；防守「陣型庫」（目前只有 4 種固定預設 ＋ 1 組未命名的自訂防守，無法命名保存多套） |
| FR-118 | 匯出 MP4／WebM，或匯出步驟文字說明 |
| FR-119 | 真正的身分驗證（Supabase Auth + coach role），取代前端密碼 |
| FR-120 | 多人協作編輯與版本歷史 |
| FR-121 | 首頁記住上次身分（下次開啟直接進站，不用每次重選） |
| FR-122 | 名單位置改在 UI 內編輯（目前寫死在 `ROSTER` 陣列，需改程式碼） |

---

## 🆕 本輪需求（US-138：「＋ 新增」流程收斂 ＋ Author 下拉加教練 ＋ 底部 4 鍵固定）

**日期**：2026-11-06

### 使用者故事

> **As a** 球員／教練（手機與桌機都用）
> **I want** 「＋ 新增」只問一次就把畫布備好；作者下拉裡直接有「🏀 教練 (Coach)」，按下去就依作者身分決定是「提交審核」還是「直接發布」；底部永遠是那 4 顆鍵
> **so that** 我不會被連續兩個「畫布會被清空」的確認框卡住、教練不必靠暗號也能一次發布、手機上也不會因為繪製模式而找不到分享鍵。

原本 `startDrawingFlow()` 在表單送出後**又跳一次** `#confirmModal`（「目前畫布上的 N 個步驟與 M 條線條都會被清空」），使用者要在同一件事上按兩次確認；作者下拉只有 18 位球員，教練要發布只能繞去儲存對話框切「📋 我是教練」再輸入暗號 `1234`；球員／教練的分流看的是**身分模式**（`isCoach()`）而不是**作者**；手機底部第 4 鍵在繪製中被 `#btnQuickSave` 佔走，`💬 分享` 會消失。

### 功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| FR-249 | **依「作者」決定提案／發布**：新增 `AUTHOR_COACH='coach'` sentinel 與 `isCoachAuthor()`（讀 `state.tacticAuthor.coach`，舊紀錄沒有 `meta.author` 時才 fallback `isCoach()`）；`syncEditRow()` 依此把 `#editRowSave`／`#btnSaveTactic` 標成 `📤 提交審核`（球員 → `status:'pending'`）或 `📢 發布`（教練 → `status:'approved'`），`state.approveOnSave`（✏️ 修改後批核）也算發布 | `AUTHOR_COACH`／`isCoachAuthor()`／`syncEditRow()`／`quickSubmitTactic()` |
| FR-250 | **底部 4 鍵永久固定**：刪除 `#btnQuickSave`（HTML／CSS `#btnQuickSave{grid-area:share…}`／`setPlaying()`／`bindUI()` 綁定全部移除），`#btnShare` 永遠 `hidden=false`，繪製中不再讓位 | §6.4 `.key-lbl,#btnShare,#editRow`／§6.5 `#btnShare{grid-area:share}`／`syncEditRow()` |
| FR-251 | **只確認一次**：「建立新戰術」表單送出即為確認，`startDrawingFlow()` 不再跳第二次「畫布會被清空」確認框（`#confirmModal` 保留給刪除戰術／刪除步驟等破壞性操作） | `startDrawingFlow()` |
| FR-252 | **Author 下拉加教練**：`appendAuthorOptions()` 產生「🏀 教練 (Coach)」（`value="coach"`，置頂）＋ 18 位球員，`#createPerson` 與 `#savePerson` 共用同一份（19 個選項） | `appendAuthorOptions()`／`fillCreateOptions()`／`fillSavePersonOptions()` |
| FR-253 | **身分自動連結**：`defaultAuthorValue()`＝教練模式回 `coach`，否則回 `lastPlayerAuthorValue()`（上次選的球員，沒有就 `ROSTER[0]`）；`openCreateDialog()` 每次開啟都重設作者；`#savePerson` 的 `change` 與 `setSaveRole()` 互鎖（選教練 → 作者＝教練；改回球員 → 帶回上次球員） | `defaultAuthorValue()`／`lastPlayerAuthorValue()`／`openCreateDialog()`／`setSaveRole()` |
| FR-254 | **直接寫入（不再開儲存對話框）**：新增 `quickSubmitTactic()`，`#editRowSave`／`#btnSaveTactic` 都綁它；`saveCurrentFrame()` 後以 `state.tacticName` 呼叫 `saveTacticNamed()`，`authorLabel` 依作者給「教練」或 `#背號 姓名`；只有名稱空白的極端情況才退回 `openSaveDialog()` | `quickSubmitTactic()`／`bindUI()` |
| FR-255 | 文案同步：`#editRowTools` 由 `🛠 名單` 改 `🛠 陣容`；`#createPerson`／`#savePerson` 標籤改「提議球員 / 作者 (Author)」；建立對話框說明、建立成功 toast、`approveAfterEdit()` 提示改「📤 提交審核／📢 發布」 | `index.html` HTML／`openCreateDialog()`／`startDrawingFlow()`／`approveAfterEdit()` |

### 非功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| NFR-136 | **零回歸**：`1440x900`／`390x844`／`375x667` 三個 spec `FAIL=0`、`runtime.errors [none]`；桌機三欄、手機 Sheet、GIF 分享路徑不變 | `node .scratch/smoke/cdp.js` |
| NFR-137 | **資料層不動**：仍寫 `state.tacticStatus`／`meta.author`／`meta.authorLabel`／`meta.defense`，DB schema 與 Supabase 欄位不變；`store.save()` 在沒有 Supabase 金鑰時照舊落 localStorage | `store.save()`／`saveTacticNamed()` |
| NFR-138 | **舊紀錄相容**：載入沒有 `meta.author` 的既有戰術時，`isCoachAuthor()` 退回 `isCoach()`，行為與 US-137 相同 | `isCoachAuthor()` |

### 限制

| ID | 限制 | 說明 |
| --- | --- | --- |
| C-126 | **「直接寫入」不接受臨時改名** | 名稱在「建立新戰術」對話框就決定；繪製中想改名仍走手冊每列的 ✎（或清空名稱的極端情況退回舊存檔對話框）。換來的是手機少一次全螢幕對話框 |
| C-127 | **教練「📢 發布」不走暗號，但只有 UI 約束** | 作者下拉選「🏀 教練」即可發布，等於任何人自稱教練都能發布；真正的權限仍待 FR-119（Supabase Auth + coach role） |
| C-128 | **修改後批核會把作者換成教練** | 沿用 US-137 儲存對話框「我是教練」的既有行為：`author` 會寫成 `{coach:true}`、`authorLabel='教練'`，原提案人只留在清單的歷史 `by …` |

### 驗收標準

- **AC-190** 建立流程只確認一次：表單送出後 `#confirmModal.hidden === true`（`create.noSecondConfirm`）、`create.authorDefaultPlayer`（球員模式作者 ≠ `coach`）、`create.authorDefaultCoach`（教練模式 `#createPerson.value === 'coach'`）。
- **AC-191** 手機底部 4 鍵永久固定：繪製中 `#btnPlay`／`#btnLoop`／`#pbToggle`／`#btnShare` 全部可見（`mobile.fourKeysFixed`）、`mobile.shareDuringDraw`、`mobile.quickSaveRemoved`（`#btnQuickSave` 不存在）。
- **AC-192** 作者下拉：`#createPerson`／`#savePerson` 都是 19 個選項、第一項 `value="coach"` 且文字含「教練」（`create.rosterOptions`／`create.coachOptionFirst`／`save.personOptions`），`#savePerson` 開啟時自動帶入作者（`save.authorPreselected`）。
- **AC-193** 球員提案：繪製中 `#editRowSave` 文案含「提交審核」，點一下**不開** `#saveModal`（`submit.noDialog`）、`state.tacticStatus === 'pending'`（`submit.pending`）、記錄建立（`submit.recordId`）、作者保留（`submit.authorKept`）。
- **AC-194** 教練發布：作者選 `coach` → `isCoachAuthor() === true`、`#editRowSave` 文案含「發布」（`author.publishLabel`）、點一下不開對話框（`author.coachNoDialog`）且 `state.tacticStatus === 'approved'`、清單紀錄也是 `approved`（`author.coachRecordApproved`）。
- **AC-195** 「✏️ 修改後批核」：`approveEdit.noDialog`＋`approveEdit.approved`＋`approveEdit.sameId`（原地更新、`approveEdit.noDuplicate`）；唯讀時 `readonly.deskSaveHidden`＋`readonly.shareKept`。

### Requirement Traceability Matrix（RTM）

| Requirement ID | 需求描述 | Feature/Module | User Story | Status |
| --- | --- | --- | --- | --- |
| FR-249 | 作者決定「提交審核」／「發布」（pending vs approved） | `isCoachAuthor()`／`syncEditRow()`／`quickSubmitTactic()` | US-138 | Verified |
| FR-250 | 底部 4 鍵永久固定，移除 `#btnQuickSave` | §6.4／§6.5／`syncEditRow()` | US-138 | Verified |
| FR-251 | 建立新戰術只確認一次 | `startDrawingFlow()` | US-138 | Verified |
| FR-252 | Author 下拉＝🏀 教練置頂 ＋ 18 球員（19 項） | `appendAuthorOptions()` | US-138 | Verified |
| FR-253 | 身分自動連結（教練模式預設教練、球員記住上次） | `defaultAuthorValue()`／`setSaveRole()` | US-138 | Verified |
| FR-254 | 直接寫入，不開儲存對話框 | `quickSubmitTactic()` | US-138 | Verified |
| FR-255 | 文案同步（🛠 陣容／作者 (Author)／📤📢） | `index.html` | US-138 | Verified |
| NFR-136 | 3 spec 全綠、無 runtime error | 冒煙測試 | US-138 | Verified |
| NFR-137 | 資料層不動（`meta.*` 相容） | `saveTacticNamed()` | US-138 | Verified |
| NFR-138 | 舊紀錄無 `meta.author` 仍可判斷 | `isCoachAuthor()` | US-138 | Verified |
| C-126 | 直接寫入不接受臨時改名 | — | US-138 | Accepted |
| C-127 | 教練發布無真正權限控管 | — | US-138 | Accepted |
| C-128 | 修改後批核作者換成教練 | `quickSubmitTactic()` | US-138 | Accepted |
| AC-190～AC-195 | 驗收 | 見下方「驗收紀錄（本輪：US-138）」 | US-138 | Verified |

### 驗收紀錄（本輪：US-138）

**日期**：2026-11-06 ｜ **方式**：`npm run build` → `node .scratch/smoke/integrity.js`（靜態）→ `node .scratch/smoke/build.js`（重建測試頁）→ `node .scratch/smoke/cdp.js`。

| 規格 | 視窗 | 結果 |
| --- | --- | --- |
| `1440x900` | 1440×900（`?full=1` 桌機：三欄） | **PASS=111 · FAIL=0** |
| `390x844` | 390×844（iPhone 14 尺寸） | **PASS=128 · FAIL=0** |
| `375x667` | 375×667（矮螢幕，`is-dense`） | **PASS=128 · FAIL=0** |

- 靜態檢查：無亂碼字樣、CSS 大括號 **509／509** 平衡、兩段 inline script `node --check` 通過（702／151261 chars）、`index.html` 與 `dist/index.html` 及 `frontend/site/index.html` SHA256 一致（`EA0B28A0FB7A`）。
- 移除的舊斷言：`mobile.quickSave*`（3 項）、`save.modalOpen`／`save.rolePlayer`／`save.okLabel`／`save.nameFromCreate`／`save.playerWrapShown`／`save.coachWrapHidden`／`save.modalClosed`（7 項）、`readonly.quickSaveHidden`。
- 新增的斷言：`create.coachOptionFirst`／`create.authorDefaultPlayer`／`create.authorDefaultCoach`／`create.noSecondConfirm`／`submit.noDialog`／`submit.pending`／`submit.recordId`／`submit.authorKept`／`save.personOptions`／`save.authorPreselected`／`author.coachDefaultInCreate`／`author.coachNoConfirm`／`author.coachEditing`／`author.coachIsAuthor`／`author.publishLabel`／`author.coachNoDialog`／`author.coachApproved`／`author.coachRecordApproved`／`approveEdit.noDialog`／`mobile.fourKeysFixed`／`mobile.shareDuringDraw`／`mobile.quickSaveRemoved`／`readonly.shareKept`。

### 已知取捨／限制

1. **儲存對話框退成 fallback**：只有「名稱空白」時才會開 `#saveModal`；教練暗號 `1234` 的入口仍在（切「📋 我是教練」），但日常路徑已不需要它。
2. **作者＝教練不只是 UI 提示**：`meta.author.coach` 會寫進紀錄，日後接 Supabase Auth 時可直接用它對照真實身分。
3. **`#btnQuickSave` 完全移除**：不再保留隱藏節點，`mobile.quickSaveRemoved` 直接斷言它不存在；若未來要恢復「繪製模式把分享鍵換掉」，需重新設計第 5 顆鍵而不是覆蓋第 4 顆。


---

## 🆕 本輪需求（US-139：建立對話框瘦身 ＋ 右上「＋ 新增 ⇄ ✕ 退出」＋ 底部編輯 4 鍵 ＋ 中間動態工具面板）

**日期**：2026-11-06

### 使用者故事

> **As a** 球員／教練（手機與桌機都用）
> **I want** 建立戰術時只填「名稱＋作者」就進畫布、右上角那顆按鈕在繪製中變成「✕ 退出」、底部 4 鍵在繪製中換成「加步驟／球員陣容／防守陣型／提交審核·發布」，而名單／陣型就出現在步驟清單的位置
> **so that** 我不用在建立時先猜防守陣型、不用為了加一個步驟或換陣型去翻右側工具列、想放棄這次編輯時一鍵就能回到原本在看的那套戰術。

US-138 之後，建立對話框仍有「防守陣型」下拉（但其實畫布裡就能改，等於重複問一次）；繪製中的「＋ 加步驟／🛠 陣容／📤 提交審核」擠在步驟列上方一條 30px 的輕量列 `#editRow`，手機要精準點擊很難、桌機則完全看不到（`#editRow` 只在 ≤767px 進版面），教練在桌機根本沒有批核入口；球員名單與防守陣型在右側第三欄，手機要開抽屜才找得到；想放棄這次編輯只能重新載入別的戰術（沒有「取消」概念）。

### 功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| FR-256 | **建立對話框只剩名稱＋作者**：`#createModal` 移除 `#createDefense` 與 `fillCreateOptions()` 的陣型分支；「開始繪製」一律從預設 2-1-2 開場（`startDrawingFlow(name, personNo)` 內部固定 `key='212'`） | `index.html` HTML／`fillCreateOptions()`／`startDrawingFlow()`／`submitCreateForm()` |
| FR-257 | **防守陣型改在畫布裡決定**：`applyDefensePreset(key)` 套用完把 `state.tacticDefense = key`（自訂防守走 `enableCustomDefense()`），存檔時仍寫 `meta.defense`，資訊不流失 | `applyDefensePreset()`／`saveTacticNamed()` |
| FR-258 | **右上角單一入口切換**：`#btnNewTactic` 綁 `topAction()` —— 唯讀時＝「＋ 新增」（開建立對話框）；`state.editing` 時＝「✕ 退出」（`exitEditMode()`）。標籤／icon／`aria-label`／`data-action` 由 `syncTopAction()` 統一維護，`.is-exit` 走白底磚紅字樣式 | `topAction()`／`syncTopAction()`／CSS `body[data-edit="1"] .new-tactic-btn` |
| FR-259 | **退出＝放棄這次編輯**：進編輯前 `snapshotBeforeEdit()` 記下 `frames`（深拷貝）／`currentFrame`／`tacticId`／`tacticName`／`tacticSource`／`tacticStatus`／`tacticAuthor`／`tacticDefense`／`customDefense`；`exitEditMode()` 原樣還原後 `renderFrame()`＋`renderPlaybook()`＋`renderLibrary()`，並提示「已退出編輯 · 未提交的內容已放棄」。存檔成功會把快照清空（`state.returnTo = null`），避免發布後再退出倒回舊畫面 | `snapshotBeforeEdit()`／`exitEditMode()`／`saveTacticNamed()` |
| FR-260 | **底部工具列徹底分流**：`.stepbar` 內兩個互斥群組 —— `#playKeys`（`#btnPrev`／`#btnPlay`／`#btnNext`／`#btnLoop`／`#pbToggle`／`#btnShare`）與 `#editKeys`（`#ekAdd`／`#ekRoster`／`#ekDefense`／`#ekSave`）；狀態只寫在 `body[data-keys="play"|"edit"]`（`syncToolbar()`：`canEdit() && !playing && !exporting` → `edit`），顯示全交給 CSS。移除 `#editRow` 與 `#btnSaveTactic` | HTML `#playKeys`／`#editKeys`、CSS `body[data-keys]`、`syncToolbar()` |
| FR-261 | **（Superseded by US-140）** ~~編輯 4 鍵行為~~：~~`#ekAdd`＝`addStep()`；`#ekRoster`／`#ekDefense`＝`setToolPanel(...)`；`#ekSave`＝`quickSubmitTactic()`，標籤 `📤 提交審核`／`🚀 發布`~~ → `#ekAdd` 已移出 4 鍵，改由球場下方 `.step-add` 輕量條承載（FR-265）；第 3 鍵改為 `✏️ 走位畫筆`（FR-266）；發布標籤統一為 `🚀 正式發布`（FR-268） | `bindUI()`／`setToolPanel()` → `#stepAdd`／`toggleDrawPanel()`／`syncToolbar()` |
| FR-262 | **中間動態工具面板 `#toolPanel`**：三個互斥視圖 —— `#tpStep`（預設：`步驟 N` ＋ 名稱輸入 ＋ 走位說明輸入 ＋ `▶ 預覽` ＋ `⚙ 教練工具`）、`#tpRoster`（`#posChips`＋`#rosterGrid`）、`#tpDefense`（`#defGrid` 5 顆預設）；狀態 `body[data-panel]`，`syncToolPanel()` 切 `hidden`／`aria-pressed`／`is-on`。手機 `roster`／`defense` 時面板 `grid-row:1/span 2` 吃掉 `#stepList` 的位置（省高度），回步驟視圖即恢復 → **US-140 增補**：新增第 4 個視圖 `#tpDraw`（FR-266），手機 `grid-row` 改為 `2/span 2`（第一列讓給 `.step-add`，FR-265） | HTML `#toolPanel`、CSS §6.4／§6.5、`syncToolPanel()`／`setToolPanel()` |
| FR-263 | **面板上直接編輯步驟**：`#tpStepName`（≤24 字）／`#tpStepDesc`（≤80 字）即時寫回 `frames[currentFrame].name/.desc`（`commitStepName()`／`commitStepDesc()`，打字時只換該卡片的文字 `refreshStepChipLabel()`）；雙擊步驟卡片 `renameStep()` 改為把焦點帶到 `#tpStepName`（不再跳 `window.prompt`） | `syncStepInfo()`／`commitStepName()`／`commitStepDesc()`／`renameStep()` |
| FR-264 | **批核入口搬進面板**：`✅ 批准`／`✏️ 修改後批核` 從 `#editRow` 移到 `#tpApprove`（面板最下方），`syncStepInfo()` 依 `isCoach() && status==='pending' && tacticId && !approveOnSave` 決定 `hidden`；桌機因此第一次有批核入口 | `#tpApprove`／`syncStepInfo()` |



### 非功能需求

| ID | 需求 | 實作位置 |
| --- | --- | --- |
| NFR-139 | **零回歸**：`1440x900`／`900x900`／`390x844`／`375x667`／`360x740`／`1184x820`／`768x1024`／`gif` 全部 `FAIL=0`、`runtime.errors [none]`；球場在 390×844 與 375×667 仍 `>120px`（`mobile.courtFitsViewport`） | `node .scratch/smoke/cdp.js` |
| NFR-140 | **面板不擠壞球場**：面板出現時 `body[data-keys="edit"] .board-wrap{--board-h-chrome}` 桌機 `354px`、手機 `300px`，球場依既有 `1.0638` 比例重算；`.stepbar` 與 `#toolPanel` 都 `scrollWidth === clientWidth`（`mobile.panelNoOverflow`） | CSS `--board-h-chrome`／`mobile.panelNoOverflow` |
| NFR-141 | **狀態單一來源**：`body[data-keys]`／`body[data-panel]`／`body[data-edit]` 只由 `syncToolbar()`／`syncToolPanel()`／`applyMode()` 寫入，`syncEditUI()` 一次同步三者，CSS 只讀不寫；JS 不再直接 `style.display` 切按鈕 | `syncEditUI()` |

### 限制

| ID | 限制 | 說明 |
| --- | --- | --- |
| C-129 | **退出＝丟棄，不可復原** | `exitEditMode()` 不進 `#confirmModal`（繪製中反覆確認會更煩），直接回到快照；代價是按錯就沒了，但畫布內容在「進編輯前」那一份仍完整（就是使用者當下看到的那套戰術） |
| C-130 | **面板一次只顯示一個視圖** | 名單／陣型時步驟清單暫時讓位（決策 A）；要同時看步驟就再按同一顆鍵切回。桌機因此少了「名單常駐右欄」，改由面板按需展開 |

### 驗收標準

- **AC-196** 建立對話框只剩 2 個欄位：`#createForm .save-field` 長度 2（`create.twoFields`）、`#createDefense` 不存在（`create.noDefensePicker`）、`state.tacticDefense === '212'`（`create.defenseDefault212`）。
- **AC-197** 頂部按鈕切換：繪製中 `#btnNewTactic` 文字含「退出」（`edit.exitLabel`／`topbar.exitLabel`／`mobile.exitLabelLong`／`approveEdit.exitLabel`），唯讀時含「新增」（`exit.labelBack`）。
- **AC-198** 底部 4 鍵分流：繪製中 `body[data-keys="edit"]`（`draw.editKeysShown`）、`#playKeys` 不進版面（`draw.playKeysHidden`／`mobile.playKeysHidden`）、4 顆編輯鍵都可見（`editbar.fourKeys`／`mobile.editKeysFixed`）；唯讀時 `body[data-keys="play"]`（`player.playKeysShown`／`readonly.playKeysBack`）、`#editKeys` 與 `#toolPanel` 退場（`readonly.editKeysHidden`／`readonly.panelHidden`）。
- **AC-199** 面板三視圖：預設 `data-panel="step"` 且 `#tpStep` 可見（`panel.stepDefault`／`panel.stepInfoShown`）；`👥` → `#tpRoster` 可見且 `#stepList` 讓位（`panel.rosterToggle`／`panel.rosterReplacesSteps`／`panel.rosterPressed`），再按一次恢復（`panel.rosterBack`）；`🛡` → `#tpDefense`（`panel.defenseToggle`），點 `2-3 聯防` → `state.tacticDefense === '23'`（`panel.defenseApplied`），點回 `2-1-2` → `'212'`（`panel.defenseRestored`），再按一次恢復（`panel.defenseBack`）。
- **AC-200** 面板直接改步驟：輸入名稱 → `state.frames[0].name` 同步（`panel.stepNameWrite`）、輸入走位說明 → `frames[0].desc` 同步（`panel.stepDescWrite`）、步驟卡片文字跟著變（`panel.chipFollows`）。
- **AC-201** 退出即還原：新增 → 退出後 `state.editing === false`、`body[data-keys="play"]`（`exit.restoresPlay`）、步驟數／內容／`tacticId`／`tacticName` 全部回到進編輯前（`exit.restoresFrames`／`exit.restoresFramesContent`／`exit.restoresId`／`exit.restoresName`）、播放鍵回來且編輯鍵退場（`exit.playKeysVisible`）；存檔後則清掉快照（`submit.snapshotCleared`）。

### Requirement Traceability Matrix（RTM）

| Requirement ID | 需求描述 | Feature/Module | User Story | Status |
| --- | --- | --- | --- | --- |
| FR-256 | 建立對話框只剩名稱＋作者 | `#createModal`／`startDrawingFlow()` | US-139 | Verified |
| FR-257 | 防守陣型改由畫布決定並寫回 `meta.defense` | `applyDefensePreset()` | US-139 | Verified |
| FR-258 | 右上角「＋ 新增 ⇄ ✕ 退出」 | `topAction()`／`syncTopAction()` | US-139 | Verified |
| FR-259 | 退出＝快照還原、存檔後清快照 | `snapshotBeforeEdit()`／`exitEditMode()` | US-139 | Verified |
| FR-260 | 底部播放 4 鍵 ⇄ 編輯 4 鍵（`data-keys`） | `#playKeys`／`#editKeys`／`syncToolbar()` | US-139 | Verified |
| FR-261 | 編輯 4 鍵行為（加步驟／名單／陣型／提交·發布） | `bindUI()`／`setToolPanel()` | US-139 | Verified |
| FR-262 | 中間動態工具面板三視圖（`data-panel`） | `#toolPanel`／`syncToolPanel()` | US-139 | Verified |
| FR-263 | 面板直接編輯步驟名稱／走位說明 | `commitStepName()`／`commitStepDesc()`／`renameStep()` | US-139 | Verified |
| FR-264 | 批核入口搬進面板（桌機也能批核） | `#tpApprove`／`syncStepInfo()` | US-139 | Verified |
| NFR-139 | 8 個 spec 全綠、無 runtime error | 冒煙測試 | US-139 | Verified |
| NFR-140 | 面板出現時球場重算、不溢出 | `--board-h-chrome`／`mobile.panelNoOverflow` | US-139 | Verified |
| NFR-141 | 狀態單一來源（`data-keys`／`data-panel`／`data-edit`） | `syncEditUI()` | US-139 | Verified |
| C-129 | 退出即丟棄、不跳確認 | `exitEditMode()` | US-139 | Accepted |
| C-130 | 面板一次只顯示一個視圖 | `setToolPanel()` | US-139 | Accepted |
| AC-196～AC-203 | 驗收 | 見下方「驗收紀錄（本輪：US-139）」 | US-139 | Verified |

### 驗收紀錄（本輪：US-139）

**日期**：2026-11-06 ｜ **方式**：`npm run build` → `npm run sync:site` → `node .scratch/smoke/integrity.js`（靜態）→ `node .scratch/smoke/build.js`（重建測試頁）→ `node .scratch/smoke/cdp.js`。

| 規格 | 視窗 | 結果 |
| --- | --- | --- |
| `1440x900` | 1440×900（`?full=1` 桌機：三欄） | **PASS=138 · FAIL=0** |
| `1184x820` | 1184×820（中桌機） | **PASS=138 · FAIL=0** |
| `900x900` | 900×900（平板抽屜帶） | **PASS=140 · FAIL=0** |
| `768x1024` | 768×1024（斷點邊界） | **PASS=140 · FAIL=0** |
| `390x844` | 390×844（iPhone 14 尺寸） | **PASS=159 · FAIL=0** |
| `375x667` | 375×667（矮螢幕，`is-dense`） | **PASS=159 · FAIL=0** |
| `360x740` | 360×740（超窄機） | **PASS=159 · FAIL=0** |
| `gif` | 390×844 ＋ `#gif`（GIF 擷取路徑） | **PASS=14 · FAIL=0** |

- 靜態檢查：無亂碼字樣、CSS 大括號 **550／550** 平衡、兩段 inline script `node --check` 通過（702／158190 chars）、`index.html`／`dist/index.html`／`frontend/site/index.html` SHA256 一致（`5C7BF293E6DA`）。
- 移除的舊斷言：`create.defenseDefault`／`create.defenseOptions`／`create.defenseStored`／`draw.editRowShown`／`draw.addVisible`／`draw.toolsVisible`／`draw.saveVisible`／`draw.deskSaveShown`／`draw.approveEditHidden`／`mobile.editRowVisible`／`mobile.editRowNoOverflow`／`mobile.fourKeysFixed`／`mobile.shareDuringDraw`／`mobile.toolsBtnVisible`／`mobile.toolsDrawerReachable`／`tools.drawerRoster`／`tools.drawerDefense`／`readonly.deskSaveHidden`／`player.editRowHidden`／`topbar.newLabel`／`coach.addHiddenWhileApproving`／`coach.addBackAfter`。
- 新增的斷言：`create.twoFields`／`create.noDefensePicker`／`create.defenseDefault212`／`draw.editKeysShown`／`draw.playKeysHidden`／`editbar.fourKeys`／`editbar.addStep`／`panel.stepDefault`／`panel.stepInfoShown`／`panel.stepNameWrite`／`panel.stepDescWrite`／`panel.chipFollows`／`panel.previewPlays`／`panel.playKeysDuringPreview`／`panel.previewStops`／`panel.rosterToggle`／`panel.rosterReplacesSteps`／`panel.rosterPressed`／`panel.rosterBack`／`panel.defenseToggle`／`panel.defenseApplied`／`panel.defenseRestored`／`panel.defenseBack`／`panel.desktopRoster`／`panel.desktopDefense`／`edit.exitLabel`／`topbar.exitLabel`／`mobile.exitLabelLong`／`mobile.panelVisible`／`mobile.panelNoOverflow`／`mobile.editKeysFixed`／`mobile.playKeysHidden`／`exit.*`（10 項）／`submit.snapshotCleared`／`approve.inPanel`／`coach.approveBtnsShown`／`coach.editKeysBack`／`approveEdit.btnVisible`／`approveEdit.exitLabel`／`player.playKeysShown`／`player.panelHidden`／`player.editKeysHidden`／`readonly.playKeysBack`／`readonly.editKeysHidden`／`readonly.panelHidden`。

### 已知取捨／限制

1. **「退出」不等於「取消上一步」**：它回到「進編輯前」那一份快照（含剛被清掉的畫布），中間所有操作都不保留；已存檔的內容不受影響（存檔即清快照）。
2. **批核入口只有一處**：`#tpApprove` 位於工具面板最下方，只在「教練 ＋ 載入未批核提案 ＋ 非修改後批核」時出現；切到 `roster`／`defense` 視圖時它仍可見（面板底部）。
3. **右側第三欄變瘦**：名單／防守陣型搬進面板後，教練工具列只剩「戰術線條／動作／防守與球」；平板與手機改由面板的 `⚙` 打開同一份抽屜。
4. **`body[data-keys]` 是唯一顯示開關**：任何新按鈕要跟著「播放／編輯」分流，請加在 `#playKeys` 或 `#editKeys` 內，並在 `syncToolbar()`／`syncStepInfo()` 補 `disabled`，不要另寫 `style.display`。

### 已由 US-139 取代（Superseded）

| Requirement ID | 原需求 | 取代者 | Status |
| --- | --- | --- | --- |
| FR-225 | 步驟列上方輕量列 `#editRow`（手機專用，`syncEditRow()` 三態） | FR-260～FR-262（`#editRow` 已刪除，改為編輯 4 鍵 ＋ 動態工具面板） | Superseded |
| FR-226 | 手機版面 `grid-template-areas` 為 `edit`／`steps`／`play loop book share`；加步驟／儲存／批核全收進 `#editRow` | FR-260／FR-262（areas 改為 `panel`／`steps`／`keys`，面板與 4 鍵群組自己分兩態） | Superseded |

- **AC-202** 批核入口在面板：`#tpApprove` 的父節點是 `#toolPanel`（`approve.inPanel`）、教練看到未批核提案時 `hidden === false`（`coach.approveShown`）且兩顆鍵都點得到（`coach.approveBtnsShown`），批准後收起（`coach.approveHiddenAfter`）並回到編輯 4 鍵（`coach.editKeysBack`）。
- **AC-203** 面板 ▶ 預覽＝播放動畫：`＋ 加步驟` 後有 2 步（`editbar.addStep`），按 `#tpPreview` → `state.playing === true`（`panel.previewPlays`）、播放中底部自動換回播放 4 鍵（`panel.playKeysDuringPreview`）、停止後回到編輯 4 鍵（`panel.previewStops`）。只有 1 步時 `playAnimation()` 會提示「只有一個步驟…」而不進入播放（沿用既有行為）。

---

## 🆕 本輪需求（US-140：加步驟移出底部工具列 ＋ 底部 4 鍵均分 ＋ ✏️ 走位畫筆面板）

### 使用者故事

**US-140** — 作為**教練／球員（繪製模式）**，我希望**「＋ 加步驟」變成球場正下方的一條輕量條，底部 4 鍵回到「名單／陣型／走位畫筆／提交審核·正式發布」四顆等寬的工具鍵**，這樣**新增步驟不再跟工具鍵搶同一排、每一顆鍵都一樣寬好按，而且主要的跑位線／傳球／掩護線可以直接在面板上點（不必先開 ⚙ 抽屜）**。

### 需求

#### 功能需求（Functional）

| Requirement ID | Requirement Description | Feature/Module |
| --- | --- | --- |
| FR-265 | **「＋ 加步驟」輕量條**：新增 `.step-add#stepAdd`（`#ekAdd` ＋ 右側 `#saCount` 步數），位置＝球場正下方、`#toolPanel` 之前；桌機在 `.stepbar`（flex-wrap）以 `order:5;flex-basis:100%` 獨佔一列並貼近球場，手機是 `.stepbar` grid 的第 1 列（`grid-template-areas` 新增 `add`）。`body[data-keys="edit"]` 才顯示；`syncToolbar()` 同步 `#saCount`（`共 N 步`）與 `#ekAdd.title`；`renderStepUI()` 末端補呼叫 `syncToolbar()`，加／刪／複製步驟後步數立即更新 | HTML `.step-add`／CSS `.step-add`／`syncToolbar()`／`renderStepUI()` |
| FR-266 | **底部 4 鍵＝4 顆工具鍵（均分）**：`#editKeys` 改為 `#ekRoster`（👥 球員陣容）／`#ekDefense`（🛡 防守陣型）／`#ekDraw`（✏️ 走位畫筆）／`#ekSave`（📤 提交審核）；桌機 `#editKeys{flex:1 1 auto}` ＋ `.ek-btn{flex:1 1 0;min-width:0}` 讓 4 鍵等寬，手機沿用 `grid-template-columns:repeat(4,minmax(0,1fr))`。`#ekAdd` 不再是 `.ek-btn`，搬進 `.step-add` | HTML `#editKeys`／CSS `#editKeys`／`bindUI()` |
| FR-267 | **✏️ 走位畫筆面板 `#tpDraw`**：面板第 4 個視圖，3 顆線條鍵 `class="draw-btn tool" data-tool="cut|pass|screen"`（跑位線／傳球虛線／掩護擋拆，各帶 SVG 圖示）＋ `.tp-note` 提示。沿用既有 `.tool[data-tool]` 綁定（`bindUI()` → `setTool()`）與 `applyMode()` 的 `.is-active` 標記，不新增工具狀態。`syncToolPanel()` 接受 `'draw'`；`#ekDraw.is-on` 只要「面板在 draw」或「目前工具是線條工具」就亮（側欄選線也同步） | HTML `#tpDraw`／CSS `#tpDraw`／`syncToolPanel()` |
| FR-268 | **`toggleDrawPanel()`**：按 `#ekDraw` 進入 draw 視圖並預設 `setTool('cut')`（已在線條工具則保留）；再按一次回到 `step` 視圖並把線條／橡皮放下（`setTool('select')`）。`state.toolPanel` 先寫再呼叫 `setTool()`，避免 `setTool → applyMode → syncEditUI → syncToolPanel` 遞迴；`#ekSave` 的發布標籤統一為 `🚀 正式發布`（作者＝教練時） | `toggleDrawPanel()`／`syncToolPanel()`／`syncToolbar()` |
| NFR-142 | **版面不因多一列而爆**：手機 `body[data-keys="edit"] .board-wrap{--board-h-chrome}` 由 `300px` 調到 `336px`（＋36px ＝ 加步驟條一列），桌機 `354px → 390px`；`.stepbar` 維持 `overflow-x:hidden`，`#editKeys`／`.ek-btn` 在 360／375／390 都不溢出（`mobile.keysNoOverflow`／`editbar.fourKeysFit`） | CSS `--board-h-chrome`／`#editKeys` |
| C-131 | 手機 `roster`／`defense`／`draw` 三種面板模式都以 `grid-row:2 / span 2` 吃掉 `#stepList`（第一列永遠留給 `.step-add`），面板 `overflow:hidden` | CSS `body[data-panel]` |

#### 驗收條件（Acceptance Criteria）

- **AC-204** 加步驟條位置：`#ekAdd` 的最近 `.step-add` 可見（`stepadd.inStrip`）、**不在** `#editKeys` 內（`stepadd.notInKeys`）、在 DOM 上位於 `#toolPanel` 之前（`stepadd.beforePanel`）、手機上它的下緣不高於 `#toolPanel` 的上緣（`mobile.stepAddAbovePanel`）。
- **AC-205** 步數同步：預設 `#saCount` 顯示「共 1 步」（`stepadd.count`），按 `＋ 加步驟` 後 `state.frames.length === 2`（`editbar.addStep`）且顯示「共 2 步」（`stepadd.countFollows`）。
- **AC-206** 底部 4 鍵：4 顆都可見且 `#editKeys .ek-btn` 恰為 4（`editbar.fourKeys`／`mobile.editKeysFixed`）、寬度差 ≤1.5px（`editbar.fourKeysEven`／`mobile.keysEven`）、文字不被裁切（`editbar.fourKeysFit`）、整排不溢出（`mobile.keysNoOverflow`）。
- **AC-207** 走位畫筆面板：按 `#ekDraw` → `body[data-panel="draw"]` 且 `#tpDraw` 可見／`#tpStep` 隱藏（`draw.panelToggle`）、預設工具 `cut`（`draw.defaultTool`）、面板恰有 3 顆線條鍵（`draw.threeLines`）、`#ekDraw` 亮起 `is-on` ＋ `aria-pressed="true"`（`draw.keyOn`）。
- **AC-208** 點線條即生效：點「傳球虛線」→ `state.tool === 'pass'`（`draw.toolSwitch`）、該鍵是唯一 `is-active`（`draw.toolActive`）、`#ekDraw` 仍亮（`draw.keyStillOn`）。
- **AC-209** 再按一次收回：`#ekDraw` 第二次點擊 → `data-panel="step"`、`#tpStep` 可見、`state.tool === 'select'`（`draw.backToStep`）；原有的側欄 `setTool('pass')` 路徑不受影響（`draw.toolPass`／`draw.hintShown`）。

#### Requirement Traceability Matrix

| Requirement ID | Requirement Description | Feature/Module | User Story Reference | Status |
| --- | --- | --- | --- | --- |
| FR-265 | 「＋ 加步驟」改成球場下方輕量條（含步數） | `.step-add`／`syncToolbar()` | US-140 | Verified |
| FR-266 | 底部 4 鍵＝名單／陣型／走位畫筆／提交·發布（等寬） | `#editKeys`／`bindUI()` | US-140 | Verified |
| FR-267 | ✏️ 走位畫筆面板 `#tpDraw`（3 種線條） | `#tpDraw`／`syncToolPanel()` | US-140 | Verified |
| FR-268 | `toggleDrawPanel()` 開／關與預設工具 | `toggleDrawPanel()` | US-140 | Verified |
| NFR-142 | 多一列仍不溢出（`--board-h-chrome` 補償） | CSS `--board-h-chrome` | US-140 | Verified |
| C-131 | 手機三種面板模式都吃掉 `#stepList` | CSS `body[data-panel]` | US-140 | Verified |
| AC-204～AC-209 | 驗收 | 見下方「驗收紀錄（本輪：US-140）」 | US-140 | Verified |
| FR-261 | 原「編輯 4 鍵行為」（含 `#ekAdd`） | 被 FR-265／266／268 取代 | US-139 → US-140 | Superseded |

### 驗收紀錄（本輪：US-140）

**日期**：2026-11-09 ｜ **方式**：`npm run build` → `node .scratch/smoke/integrity.js`（靜態）→ `node .scratch/smoke/build.js`（重建測試頁）→ `node .scratch/smoke/cdp.js`（8 個 spec）→ `node .scratch/smoke/shot.js`（視覺檢查）。

| 規格 | 視窗 | 結果 |
| --- | --- | --- |
| `1440x900` | 1440×900（`?full=1` 桌機：三欄） | **PASS=154 · FAIL=0** |
| `1184x820` | 1184×820（中桌機） | **PASS=154 · FAIL=0** |
| `900x900` | 900×900（平板抽屜帶） | **PASS=156 · FAIL=0** |
| `768x1024` | 768×1024（斷點邊界） | **PASS=156 · FAIL=0** |
| `390x844` | 390×844（iPhone 14 尺寸） | **PASS=178 · FAIL=0** |
| `375x667` | 375×667（矮螢幕，`is-dense`） | **PASS=178 · FAIL=0** |
| `360x740` | 360×740（超窄機） | **PASS=178 · FAIL=0** |
| `gif` | 390×844 ＋ `#gif`（GIF 擷取路徑） | **PASS=14 · FAIL=0** |

- 靜態檢查：CSS 大括號 **570／570** 平衡、兩段 inline script `node --check` 通過（702／159320 chars）、`index.html`／`dist/index.html` 內容一致（`665633B2E0B9`）。
- 新增的斷言：`editbar.fourKeysEven`／`editbar.fourKeysFit`／`stepadd.inStrip`／`stepadd.notInKeys`／`stepadd.beforePanel`／`stepadd.count`／`stepadd.countFollows`／`mobile.keysEven`／`mobile.keysNoOverflow`／`mobile.stepAddAbovePanel`／`draw.keyPresent`／`draw.panelToggle`／`draw.defaultTool`／`draw.threeLines`／`draw.keyOn`／`draw.toolSwitch`／`draw.toolActive`／`draw.keyStillOn`／`draw.backToStep`。
- 重寫的斷言：`editbar.fourKeys`／`mobile.editKeysFixed`（改以 `ekRoster`／`ekDefense`／`ekDraw`／`ekSave` 四顆判定，並要求 `#ekAdd` 不在 `#editKeys` 內）。
- 截圖：`.scratch/us140-draw-390.png`／`us140-pen-390.png`／`us140-draw-1440.png`／`us140-pen-1440.png`。

### 已知取捨／限制

1. **桌機的「正下方」是相對的**：桌機 `.stepbar` 本來就在球場**上方**，所以加步驟條是 `.stepbar` 的最後一列（緊貼球場上緣）；手機（`.stepbar` 在球場下方）才是字面上「球場正下方」的第一列。
2. **走位畫筆只放 3 種線條**：運球線／選取／橡皮仍在面板 `⚙` 的教練抽屜與右側第三欄，避免手機面板一次塞 6 顆造成溢出；`.tool[data-tool]` 兩處共用同一份狀態，任一入口選線 `#ekDraw` 都會亮。
3. **`#ekDraw` 的亮燈條件包含「目前工具是線條工具」**：從側欄選「傳球」時底部也會亮，這是刻意的（表示線條繪製中），不代表面板一定停在 `draw` 視圖。
4. **步數只在 `#saCount` 顯示**：繪製中原本的 `#frameCounter` 仍隱藏（`body[data-keys="edit"] #frameCounter{display:none}`），兩者不重複顯示。


---

## 🆕 本輪需求（US-141：走位畫筆 → 步驟 keyframe 聯動 ＋ 播放期箭咀＝運動路徑）

### 使用者故事

**US-141** — 作為**教練／球員（繪製模式）**，我希望**用 ✏️ 走位畫筆畫的跑位線／傳球虛線，會真的把球員／籃球送到箭咀終點並寫進目前這一步；播放時補間就沿著這些箭咀走**，這樣**畫布上的圖＝真實動作，不必「先畫線、再自己把球員拖到終點」做兩次，也不會出現「線畫好了、播放時球卻沒動」的圖文不符**。

### 需求

#### 功能需求（Functional）

| Requirement ID | Requirement Description | Feature/Module |
| --- | --- | --- |
| FR-269 | **畫筆即 keyframe（跑位線／運球線）**：`onCanvasUp()` 在建立線條之前先交給 `commitStrokeToStep(type, start, end)`；起筆 62px 內最近的節點（`nearestNodeOf()`，`PEN_SNAP`）直接移到 `clampPoint(end)`，位移 <8px 或起筆沒對到人 → 回 `false`，退回原本的純線條（不會誤移球員）。持球者（球距 < `GLOW_REACH`）連球一起搬，自動改畫 `dribble` 線；防守球員的線標記為 `def` | §8.5 `commitStrokeToStep()`／`commitMoveStroke()` |
| FR-270 | **傳球虛線＝換手**：終點 78px 內最近的隊友（`nearestOffense()`，`PEN_PASS_SNAP`）＝接球者 → `placeBallInHand()` ＋ `syncBallToNextFrame()`（下一步的球一起搬），並在球與接球者之間補一條 `pass` 線；終點沒人 → 球落在箭咀終點並 `toast` 警告「無人持球」；傳給自己 → 只留線條 | `commitPassStroke()` |
| FR-271 | **掩護擋拆只留線條**：`commitStrokeToStep('screen', …)` 一律回 `false`，站位不動（掩護是標記，不是位移） | `commitStrokeToStep()` |
| FR-272 | **三條寫入路徑統一收斂**：拖曳（`finalizeNodeDrag()`）、落球（`finishBallDrop()`）、畫筆（`commitStrokeToStep()`）都以 `makeAutoLine()` ＋ `saveCurrentFrame()` 收尾；`makeAutoLine()` 新增 `minLen` 參數（拖曳用 `DRAG_LINE_MIN`、畫筆用較寬鬆的 `PEN_LINE_MIN=22`）。`onCanvasUp()` 的純線條分支也會 `saveCurrentFrame()`，手畫線不再只是畫面上的塗鴉 | `makeAutoLine()`／`onCanvasUp()`／`saveCurrentFrame()` |
| FR-273 | **「＋ 加步驟」自動放下畫筆**：`addStep()` 偵測 `isLineTool(state.tool)` → `state.tool='select'`、`toolPanel` 由 `draw` 回 `step`（`syncToolPanel()`），`renderFrame()` 之後補 `applyMode()`；新步驟才能直接拖曳球員（畫筆會讓畫布 `skipTargetFind`，這也是「新增步驟後拖不動」的根因） | `addStep()` |
| FR-274 | **播放期箭咀＝運動路徑**：`tweenToFrame()` 改成 async，先 `await previewStepLines(目標步驟)` 把該步驟的 `kind:'line'` 用 `fabric.util.enlivenObjects()` 鋪上畫布（`opacity:0`、`moveTo(obj,1)`、`selectable:false`、`isPreview=true`），隨補間 `eased` 淡入；補間結束 `removePreviewLines()` 收掉；`isPreview` 物件被 `serializeCanvas()` 排除，不進存檔／匯出；fabric 版本或資料異常（`enlivenObjects` 不存在／拋錯）一律回空陣列 → 完全退回舊的淡出路徑 | `previewStepLines()`／`removePreviewLines()`／`tweenToFrame()` |
| FR-275 | **提示文案對齊新行為**：線條工具提示＝「從球員身上起筆、拖到目標位置放開 → 該球員直接跑到箭咀終點」／「從持球者拖到隊友身上放開 → 球直接傳過去（下一步同步持球）」；掩護線加註「只是標記，不會移動球員」；非畫筆模式提示補「或按 ✏️ 用走位畫筆畫路線」 | `updateHint()` |

#### 非功能需求（Non-Functional）／限制（Constraints）

| Requirement ID | Requirement Description | Feature/Module |
| --- | --- | --- |
| NFR-143 | 兩段 inline script `node --check` 通過；8 個 spec 全綠、無 runtime error；CSS 大括號平衡 | 冒煙測試／`integrity.js` |
| NFR-144 | 播放預覽是「加法」不是「改寫」：`tweenToFrame()` 對 `applyLerp()`／`startTrails()`／`GIF` 抽樣的行為零改動，預覽失敗時畫面與舊版一致 | `previewStepLines()` |
| C-132 | 畫筆只改「目前步驟」的 keyframe，不動其他步驟（唯一例外：`syncBallToNextFrame()` 同步下一步持球） | `commitStrokeToStep()` |
| C-133 | 預覽線不入庫、不入 GIF：`isPreview` 被 `serializeCanvas()` 過濾，GIF 走 `applyLerp()` 抽樣而非 canvas 內容 | `serializeCanvas()`／`exportGif()` |
| C-134 | 一支手勢＝一個位移：畫筆只取「起點節點 → 終點」，中途的曲線不入庫（路線仍是直線／虛線＋箭咀） | `commitStrokeToStep()` |

#### 驗收條件（Acceptance Criteria）

- **AC-210** 測試頁備妥：`findNode('off1')`／`off2`／`ball` 都存在（`pen.fixtures`）。
- **AC-211** 加步驟放下畫筆：`setTool('cut')` → `addStep()` → `state.tool === 'select'`（`pen.step2ToolSelect`）、`state.frames.length === 2`（`pen.step2Count`）。
- **AC-212** 跑位線＝位移：`commitStrokeToStep('cut', off1, off1+(150,40))` 回 `true`（`pen.cutHandled`），`off1` 的新座標與箭咀終點差 <1.5px（`pen.cutMovedNode`），**且 `state.frames[1]` 內的 `off1` keyframe 同步更新**（`pen.cutKeyframeSaved`），畫布多一條 `autoLine`（`pen.cutAutoLine`）。
- **AC-213** 傳球虛線換手：拖到 `off2` 回 `true`（`pen.passHandled`）、`getBallHandler().nodeId === 'off2'`（`pen.passHandlerChanged`）、球的新位置已寫回 `state.frames[1]`（`pen.passKeyframeSaved`）。
- **AC-214** 掩護／無來源不接手：`commitStrokeToStep('screen', …)` 回 `false` 且 `off2` 沒被移動（`pen.screenNoMove`）；起筆離所有節點 ≥130px 的空點回 `false`（`pen.noSourceNotHandled`）——兩者都交回 `onCanvasUp()` 走純線條。
- **AC-215** 播放期預覽：`tweenToFrame(0,1)` 進行中（約 320ms）畫布上至少 1 條 `isPreview` 的線（`play.previewLinesShown`），補間結束後全部收乾淨（`play.previewCleared`）。
- **AC-216** 零回歸：8 個 spec（`1440x900`／`1184x820`／`900x900`／`768x1024`／`390x844`／`375x667`／`360x740`／`gif`）全部 FAIL=0。

#### Requirement Traceability Matrix

| Requirement ID | Requirement Description | Feature/Module | User Story Reference | Status |
| --- | --- | --- | --- | --- |
| FR-269 | 跑位線／運球線＝把節點移到箭咀終點 | §8.5 `commitMoveStroke()` | US-141 | Verified |
| FR-270 | 傳球虛線＝換手＋同步下一步持球 | `commitPassStroke()` | US-141 | Verified |
| FR-271 | 掩護線只留標記 | `commitStrokeToStep()` | US-141 | Verified |
| FR-272 | 三條寫入路徑都 `makeAutoLine()`＋`saveCurrentFrame()` | `onCanvasUp()`／`saveCurrentFrame()` | US-141 | Verified |
| FR-273 | `＋ 加步驟`自動放下畫筆 | `addStep()` | US-141 | Verified |
| FR-274 | 播放期鋪上目標步驟箭咀當運動路徑 | `previewStepLines()`／`tweenToFrame()` | US-141 | Verified |
| FR-275 | 提示文案對齊新行為 | `updateHint()` | US-141 | Verified |
| NFR-143 | 靜態檢查＋8 spec 全綠＋無 runtime error | 冒煙測試 | US-141 | Verified |
| NFR-144 | 播放預覽為加法、失敗即回舊行為 | `previewStepLines()` | US-141 | Verified |
| C-132 | 畫筆只改目前步驟 | `commitStrokeToStep()` | US-141 | Accepted |
| C-133 | 預覽線不入庫／不入 GIF | `serializeCanvas()` | US-141 | Accepted |
| C-134 | 一支手勢＝一個位移，曲線不入庫 | `commitStrokeToStep()` | US-141 | Accepted |
| AC-210～AC-216 | 驗收 | 見下方「驗收紀錄（本輪：US-141）」 | US-141 | Verified |

### 驗收紀錄（本輪：US-141）

**日期**：2026-11-09 ｜ **方式**：`npm run build` → `npm run sync:site` → `node .scratch/smoke/integrity.js`（靜態）→ `node .scratch/smoke/build.js`（重建測試頁）→ `node .scratch/smoke/cdp.js`（8 個 spec）。

| 規格 | 視窗 | 結果 |
| --- | --- | --- |
| `1440x900` | 1440×900（`?full=1` 桌機：三欄） | **PASS=168 · FAIL=0** |
| `1184x820` | 1184×820（中桌機） | **PASS=168 · FAIL=0** |
| `900x900` | 900×900（平板抽屜帶） | **PASS=170 · FAIL=0** |
| `768x1024` | 768×1024（斷點邊界） | **PASS=170 · FAIL=0** |
| `390x844` | 390×844（iPhone 14 尺寸） | **PASS=192 · FAIL=0** |
| `375x667` | 375×667（矮螢幕，`is-dense`） | **PASS=192 · FAIL=0** |
| `360x740` | 360×740（超窄機） | **PASS=192 · FAIL=0** |
| `gif` | 390×844 ＋ `#gif`（GIF 擷取路徑） | **PASS=14 · FAIL=0** |

- 靜態檢查：CSS 大括號 **573／573** 平衡、兩段 inline script `node --check` 通過（702／165876 chars）、`index.html`／`dist/index.html`／`frontend/site/index.html` 一致（`2C9945310D44`）。
- 新增的斷言（14 條）：`pen.fixtures`／`pen.step2ToolSelect`／`pen.step2Count`／`pen.cutHandled`／`pen.cutMovedNode`／`pen.cutKeyframeSaved`／`pen.cutAutoLine`／`pen.passHandled`／`pen.passHandlerChanged`／`pen.passKeyframeSaved`／`pen.screenNoMove`／`pen.noSourceNotHandled`／`play.previewLinesShown`／`play.previewCleared`。

### 已知取捨／限制

1. **畫筆寫入的是「目前步驟」**：跑位線／傳球線改的是 `state.frames[state.currentFrame]` 的 keyframe，等於「這一步的站位」。若想保留原本站位，請先按 `＋ 加步驟` 再畫（這也正是新步驟自動放下畫筆的原因）。
2. **路線一律直線＋箭咀**：一支手勢只取「起點節點 → 終點」，中途手抖的曲線不入庫，播放補間也是直線內插；想畫曲線仍可用掩護／純線條模式當標記。
3. **傳球線終點沒對到隊友時**：球會停在箭咀終點並視為「無人持球」（`toast` 警告），不會自動猜人；把線尾拉到隊友身上（78px 內）才會換手。
4. **播放預覽只在補間期間存在**：`renderFrame()`／`applyMode()`／`serializeCanvas()` 都不會看到 `isPreview` 物件，因此存檔、匯出 GIF、複製步驟都不受影響；`fabric` 若升級到 `enlivenObjects` 行為改變，`previewStepLines()` 會回空陣列、自動退回舊版播放。


---

## 🆕 本輪需求（US-142：教練＝瀏覽同一個畫面 ＋ 🔔 待批審核中心 ＋ 球場右下批核浮條）

### 使用者故事

**US-142** — 作為**教練**，我希望**一登入就跟球員看到一模一樣的瀏覽畫面（不再一進去就被塞進編輯器、工具列與抽屜全部彈出來），要改東西才按「＋ 新增／✏️ 微調後發布」；而所有待批的提案集中到右上角「🔔 待批 (N)」的待審核清單，點一套就載入播放、右下角浮出「✅ 批准發布／✏️ 微調後發布／🗑 退回」**，這樣**「看戰術」與「改戰術」兩種心態不會互相干擾，批核也不用先開抽屜找提案、再回面板找批核鍵**。

### 需求

#### 功能需求（Functional）

| Requirement ID | Requirement Description | Feature/Module |
| --- | --- | --- |
| FR-276 | **三層狀態模型**：`state.mode`（身分：`player`／`coach`，決定批核／退回／改別人戰術的特權與教練入口）× `state.editing`（草稿 session：是否在編輯器裡）× `state.tacticStatus`（目前載入內容的批核狀態）。`canEdit()` 只看 `state.editing`（與身分完全脫鉤） | `canEdit()`／`state` |
| FR-277 | **教練進站＝瀏覽**：`enterCoachMode()` 一律 `editing=false`、`tool='select'`、`toolPanel='step'`、`draw=null`，並且**不再自動 `openSidebar(true)`**；要動手必須按右上角「＋ 新增」或浮條的「✏️ 微調後發布」 | `enterCoachMode()` |
| FR-278 | **瀏覽畫面零分歧**：所有「教練才看得到」的樣式改由 `body[data-edit="1"]`（＝正在編輯）驅動，不再看 `body[data-mode]`——側欄／教練工具列／工具面板／`.step-add`／編輯 4 鍵全部只在編輯器出現，`body[data-mode="player"]` 的視覺規則全部改寫成 `body:not([data-edit="1"])` | CSS §1／§6.4／§6.5、`applyMode()` |
| FR-279 | **🔔 待批 (N) 徽章**：`#btnPending` 插在 `.mode-switch` 與 `#btnNewTactic` 之間；只在 `isCoach() && n>0` 顯示（用 JS `hidden`，**不用 `.coach-only`**），播放／匯出中禁用；`n` 與徽章由 `state.playbookItems`（`renderPlaybook()` 的 `store.list()` 結果）算出，**不额外發請求**；手機只露 🔔＋數字（`.pend-lbl` 隱藏） | `#btnPending`／`updatePendingBadge()`／`pendingItems()` |
| FR-280 | **待審核 Bottom Sheet**：`#pendingSheet` 由 🔔 開啟（桌機置中貼底、手機由下往上滑），列出「名稱＋`未批核`標記＋提議人＋提交時間＋LOCAL／CLOUD」，新提交排前面；`syncSheetScrim()` 納入 `.pend-sheet`／`#pendingSheet` → 共用 `#pbScrim` 遮罩；`Esc`／✕／點遮罩都能關 | `openPendingSheet()`／`closePendingSheet()`／`renderPendingList()`／`syncSheetScrim()` |
| FR-281 | **點清單即載入**：`selectPendingItem()` → 關閉 sheet → `loadTactic(item)`（沿用 §12：自動播一次）→ 清 `reviewDismissed` → `syncEditUI()` | `selectPendingItem()` |
| FR-282 | **右下批核浮條**：`#reviewBar` 條件＝`isCoach() && !state.editing && state.tacticId && state.tacticStatus==='pending' && !state.reviewDismissed`；顯示名稱＋`提議／提交`＋「✅ 批准發布／✏️ 微調後發布／🗑 退回／✕ 收起」；`z-index:62`（低於 `.fab` 60 以上、抽屜 70 以下），手機貼在底部 4 鍵上方（`--stepbar-h + 10px`），播放／匯出中禁用 | `#reviewBar`／`syncReviewBar()` |
| FR-283 | **批核／退回沿用舊路徑**：`approveTactic(item)` 泛化（可傳 `{id,source,name}`，省略＝目前載入的戰術），成功後同步 `tacticStatus`、刷新清單與徽章；「✏️ 微調後發布」直接複用 `approveAfterEdit()`（`approveOnSave=true` ＋ 進編輯器，存檔即發布）；「🗑 退回」複用 `removeTactic(item, {title,desc,okText})`（新增自訂確認文字，刪除後清 `tacticStatus`／`tacticAuthor` 等狀態） | `approveTactic()`／`approveAfterEdit()`／`removeTactic()`／`rejectPending()` |
| FR-284 | **清單標記改寫**：手冊中的未批核提案標記＝`未批核 · #34 Kenny 提議`（`title` 補完整說明），meta **不再重複** `by …`；面板裡舊的「待批核提案／✅ 批准／✏️ 修改後批核」列（`#tpApprove`）整組移除；`syncStepInfo()` 在瀏覽狀態把步驟名稱／說明輸入框設 `readOnly`，並移除 approveRow 判斷 | `renderPlaybook()`／`#tpApprove`（刪除）／`syncStepInfo()` |

#### 非功能需求（Non-Functional）／限制（Constraints）

| Requirement ID | Requirement Description | Feature/Module |
| --- | --- | --- |
| NFR-145 | **瀏覽畫面像素級一致**：教練與球員在同一份資料、同一視窗下，`#playKeys`／`#editKeys`／`#toolPanel`／`#sidebar`／`.step-add` 的 `display` 與播放鍵尺寸必須完全相同（同一組 CSS 條件驅動，不是「看起來差不多」） | 冒煙測試 `parity.*` |
| NFR-146 | 徽章與浮條**零額外請求**：`n` 直接由 `state.playbookItems` 計算，只在 `renderPlaybook()`／`syncEditUI()`／`setPlaying()`／`setExporting()` 時同步；DOM 更新是改 `textContent`／`hidden`，不重建整份清單 | `updatePendingBadge()`／`syncReviewBar()` |
| C-135 | 資料格式不動：**沒有** DB migration、**沒有** `meta.status` 新欄位，`store.setStatus()` 沿用既有 `meta.status`；批核／退回在 localStorage 預覽模式即可全功能運作 | `store.setStatus()`／`store.remove()` |
| C-136 | 徽章數字上限：`store.list()` 只取最近 100 筆，因此待批數在極端情況（>100 筆紀錄且有大量舊提案）可能低估；徽章顯示 `99+` 封頂 | `pendingItems()` |
| C-137 | 批核／退回是「教練特權」，不看 `state.editing`：非教練一律 `requestCoachMode()`；播放／匯出期間四顆批核鍵 `disabled`，避免批核與動畫抽樣互相干擾 | `approveTactic()`／`rejectPending()`／`syncReviewBar()` |

#### 驗收條件（Acceptance Criteria）

- **AC-217** 教練進站即瀏覽：`enterCoachMode(true)` 後 `state.editing === false`（`coach.startsBrowsing`）、`canEdit() === false`（`coach.canEditFalse`）、`body[data-keys]==='play'`（`coach.browseKeys`）、播放鍵可見（`coach.playKeysShown`）、編輯 4 鍵／工具面板／側欄／`.step-add` 全部 `display:none`（`coach.editKeysHidden`／`coach.panelHidden`／`coach.sidebarHidden`／`coach.addStripHidden`）。
- **AC-218** 同畫面零分歧：同一頁把 `state.mode` 切到 `player`／`coach` 各取一次外框簽章，`displays + 播放鍵尺寸` 完全相同（`parity.coachVsPlayer`）；球員看不到 🔔（`parity.playerBadgeHidden`）也看不到批核浮條（`parity.playerReviewBarHidden`）。
- **AC-219** 徽章正確：教練且有 pending → 🔔 可見（`pending.badgeShown`）、數字等於 pending 筆數（`pending.countMatches`）；批准後自動 −1（`pending.badgeDecrement`）。
- **AC-220** 待審核 sheet：點 🔔 後 `#pendingSheet` 可見且帶 `is-open`（`pending.sheetOpens`）、`#pbScrim` 出現且 `aria-expanded="true"`（`pending.sheetScrim`）；列數＝pending 筆數（`pending.itemRows`），每列有名稱（`pending.itemName`）、`提議：… · 提交：…`（`pending.itemMeta`）與 `未批核` 標記（`pending.itemTag`）。
- **AC-221** 點列即載入：載入後 sheet 自動關閉（`pending.sheetClosedAfterLoad`）、`state.tacticId` 換成該提案且狀態為 `pending`（`pending.loadOnClick`）、右下浮條出現（`pending.reviewBarShown`）且三顆鍵可見（`pending.reviewBtns`）、浮條顯示提議人（`pending.reviewMeta`）。
- **AC-222** 浮條批核：停止播放後批准鍵可用（`pending.reviewBtnsEnabled`）→ 點「✅ 批准發布」後 `state.tacticStatus === 'approved'`（`pending.approved`）且浮條收起（`pending.reviewBarHiddenAfter`）。
- **AC-223** 微調後發布：把紀錄改回 `pending` 再載入 → 浮條出現（`approveEdit.reviewBarShown`）、「✏️ 微調後發布」可見（`approveEdit.btnVisible`）→ 點下去 `approveOnSave=true` ＋ `editing=true`（`approveEdit.on`）、右上角變「✕ 退出」（`approveEdit.exitLabel`）→ 按「🚀 正式發布」不跳對話框（`approveEdit.noDialog`）、同 id 變 `approved`（`approveEdit.approved`／`sameId`／`noDuplicate`）。
- **AC-224** 舊入口與標記：面板內 `#tpApprove` 已不存在（`panel.noApproveRow`）；手冊標記＝`未批核 · #34 … 提議`（`list.pendingTagAuthor`），meta 不再重複 `by`（`list.authorNotDuplicated`）；頂部順序＝滑塊 → 🔔 → 新增（`topbar.pendingBetween`）且不溢出（`topbar.noOverflow`）。

#### Requirement Traceability Matrix

| Requirement ID | Requirement Description | Feature/Module | User Story Reference | Status |
| --- | --- | --- | --- | --- |
| FR-276 | 三層狀態模型；`canEdit()` 只看 `editing` | `canEdit()`／`state` | US-142 | Verified |
| FR-277 | 教練進站＝瀏覽、不自動開抽屜 | `enterCoachMode()` | US-142 | Verified |
| FR-278 | 視覺一律由 `data-edit` 驅動 | CSS §1／`applyMode()` | US-142 | Verified |
| FR-279 | 🔔 待批 (N) 徽章（教練專屬、零請求） | `#btnPending`／`updatePendingBadge()` | US-142 | Verified |
| FR-280 | 待審核 Bottom Sheet ＋ 共用遮罩 | `#pendingSheet`／`syncSheetScrim()` | US-142 | Verified |
| FR-281 | 點列即載入並自動關閉 sheet | `selectPendingItem()` | US-142 | Verified |
| FR-282 | 右下批核浮條（條件／定位／禁用） | `#reviewBar`／`syncReviewBar()` | US-142 | Verified |
| FR-283 | 批准／微調／退回沿用舊路徑 | `approveTactic()`／`approveAfterEdit()`／`removeTactic()` | US-142 | Verified |
| FR-284 | 手冊標記改寫、刪除 `#tpApprove`、面板 readOnly | `renderPlaybook()`／`syncStepInfo()` | US-142 | Verified |
| NFR-145 | 教練與球員瀏覽外框像素級一致 | 冒煙測試 `parity.*` | US-142 | Verified |
| NFR-146 | 徽章／浮條零額外請求 | `updatePendingBadge()`／`syncReviewBar()` | US-142 | Verified |
| C-135 | 無 DB migration、localStorage 即可全功能 | `store.setStatus()` | US-142 | Accepted |
| C-136 | `store.list()` 取 100 筆 → 徽章可能低估 | `pendingItems()` | US-142 | Accepted |
| C-137 | 批核＝教練特權；播放／匯出時禁用 | `approveTactic()`／`syncReviewBar()` | US-142 | Verified |
| AC-217～AC-224 | 驗收 | 見下方「驗收紀錄（本輪：US-142）」 | US-142 | Verified |
| FR-199 | 原 `canEdit()` 語意（教練模式即視為可編輯） | 被 FR-276 取代 | US-139 → US-142 | Superseded |
| FR-262（批核段） | 原「面板內的待批核提案列」 | 被 FR-284 刪除、改由 FR-280／282 承載 | US-139 → US-142 | Superseded |

### 驗收紀錄（本輪：US-142）

**日期**：2026-11-09 ｜ **方式**：`npm run build` → `npm run sync:site` → `node .scratch/smoke/integrity.js`（靜態）→ `node .scratch/smoke/build.js`（重建測試頁）→ `node .scratch/smoke/cdp.js`（8 個 spec）→ `node .scratch/smoke/shot.js`（截圖目視）。

| 規格 | 視窗 | 結果 |
| --- | --- | --- |
| `1440x900` | 1440×900（`?full=1` 桌機：三欄） | **PASS=196 · FAIL=0** |
| `1184x820` | 1184×820（中桌機） | **PASS=196 · FAIL=0** |
| `900x900` | 900×900（平板抽屜帶） | **PASS=198 · FAIL=0** |
| `768x1024` | 768×1024（斷點邊界） | **PASS=198 · FAIL=0** |
| `390x844` | 390×844（iPhone 14 尺寸） | **PASS=220 · FAIL=0** |
| `375x667` | 375×667（矮螢幕，`is-dense`） | **PASS=220 · FAIL=0** |
| `360x740` | 360×740（超窄機） | **PASS=220 · FAIL=0** |
| `gif` | 390×844 ＋ `#gif`（GIF 擷取路徑） | **PASS=14 · FAIL=0** |

- 靜態檢查：CSS 大括號 **609／609** 平衡、兩段 inline script `node --check` 通過、`index.html`／`dist/index.html`／`frontend/site/index.html` 一致。
- 截圖：`us142-coach-browse-1440/390/360`（教練瀏覽＝球員畫面＋🔔 徽章）、`us142-pending-sheet-1440/390`（待審核 Bottom Sheet）、`us142-review-bar-1440/390`（右下批核浮條）；390／360 的 `topbarOverflow=no`。
- 取代／刪除的斷言：`topbar.adjacent`（改 `topbar.pendingBetween`）、`list.authorShown`（改 `list.pendingTagAuthor`＋`list.authorNotDuplicated`）、`draw.approveHidden`／`approve.inPanel`／`coach.approveShown`／`coach.approveBtnsShown`／`coach.approveHiddenAfter`／`coach.editKeysBack`／`approveEdit.shown`（改 `panel.noApproveRow`／`parity.*`／`pending.*`／`approveEdit.reviewBarShown`）。
- 新增的斷言（34 條）：`panel.noApproveRow`、`coach.startsBrowsing`、`coach.canEditFalse`、`coach.browseKeys`、`coach.playKeysShown`、`coach.editKeysHidden`、`coach.panelHidden`、`coach.sidebarHidden`、`coach.addStripHidden`、`parity.playerBadgeHidden`、`parity.playerReviewBarHidden`、`parity.coachVsPlayer`、`coach.badgeVisible`、`coach.reviewBarOnPending`、`pending.onePending`、`pending.badgeShown`、`pending.countMatches`、`pending.sheetOpens`、`pending.sheetScrim`、`pending.itemRows`、`pending.itemName`、`pending.itemMeta`、`pending.itemTag`、`pending.sheetClosedAfterLoad`、`pending.loadOnClick`、`pending.reviewBarShown`、`pending.reviewBtns`、`pending.reviewMeta`、`pending.reviewBtnsEnabled`、`pending.approved`、`pending.reviewBarHiddenAfter`、`pending.badgeDecrement`、`pen.coachBrowseFirst`、`pen.enteredEditor`。

### 已知取捨／限制

1. **教練登入不再自動開工具抽屜**：`enterCoachMode()` 一律 `openSidebar(false)`；編輯器裡要調線條工具請按面板 `⚙ 教練工具`（或 ≥1100px 直接看第三欄）。這是「教練＝瀏覽」的必然結果——抽屜一開就不是球員畫面了。
2. **🔔 徽章會擠壓手機品牌名**：390／360 顯示「MondayB…／Monday…」（只剩 🔔＋數字，`.pend-lbl` 已隱藏）；若之後要完全保住品牌，唯一乾淨的做法是把徽章移出 header（例如放進手冊抽屜標題）。
3. **徽章數字上限**：`store.list()` 只取最近 100 筆，`pendingItems()` 以之為母體，因此超過 100 筆紀錄時待批數可能低估（顯示封頂 `99+`）；`C-136`。
4. **浮條只在「目前載入的是待批提案」時出現**：切到已批核戰術、或按 ✕ 收起（`state.reviewDismissed`）後就不再出現，直到重新載入／換戰術；`✏️ 微調後發布` 進編輯器後浮條消失（`!state.editing`），改由底部「🚀 正式發布」完成批核。
5. **播放中不可批核**：載入提案會自動播一次，浮條三顆鍵在播放／匯出期間是 `disabled`，先按「■ 停止播放」再批核（避免批核與動畫抽樣互相干擾）。
6. **「🗑 退回」是硬刪除**：沿用 `removeTactic()`，提案人需要重新提交；沒有「駁回但保留」的狀態（未新增 `meta.status='rejected'`，維持 `C-135` 不動資料格式）。



---

## 🆕 本輪需求（US-143：PWA 安裝＋iOS「加入主畫面」引導＋一次性清除測試戰術）

### 使用者故事

**US-143** — 作為**球隊隊友（多數用 iPhone Safari）**，我希望**把戰術板「加入主畫面」變成一個有隊徽圖示、全螢幕無網址列的 App，而且第一次用 Safari 開啟時有人告訴我怎麼加**，這樣**練球時從主畫面一點就進球場，不必每次翻群組找連結、也不會手指滑到網址列就跳出；同時專案要順手清掉早期留下的測試戰術，手冊只留真正的 7 套經典戰術**。

### 需求

#### 功能需求（Functional）

| Requirement ID | Requirement Description | Feature/Module |
| --- | --- | --- |
| FR-285 | **Web App Manifest**：根目錄 `manifest.json`＝`name`「MondayBeer 戰術板」／`short_name`「MondayBeer」／`start_url` `/`／`display` `standalone`／`orientation` `portrait`／`background_color` `#0F172A`／`theme_color` `#EA580C`／icons `./icon-192.png`、`./icon-512.png`。圖示必須用 `./` 相對路徑，`scripts/build-static.mjs`／`sync-site.mjs` 才會把 manifest 與兩張 PNG 一起複製到 `dist/`、`frontend/site/` | `manifest.json`／`scripts/build-static.mjs`／`scripts/sync-site.mjs` |
| FR-286 | **iOS 主畫面 meta**：`<head>` 加入 `mobile-web-app-capable=yes`、`apple-mobile-web-app-capable=yes`、`apple-mobile-web-app-status-bar-style=black-translucent`、`apple-mobile-web-app-title=MondayBeer`、`theme-color=#EA580C`（原 `#EBF1F6`），並補 `link[rel=manifest]`（`./manifest.json`）、`apple-touch-icon`（`./icon-192.png`）、`icon` 512（`./icon-512.png`） | `index.html` §head |
| FR-287 | **主畫面圖示**：`icon-192.png`／`icon-512.png` 由隊徽原圖（`WhatsApp Image …jpeg` 1408×768）置中裁成 768×768 正方形後以 HighQualityBicubic 縮圖（不透明 PNG），避免 iOS／Android 主畫面圖示被拉長或裁掉隊名 | `icon-192.png`／`icon-512.png` |
| FR-288 | **iOS 安裝引導卡**：`#pwaTip`（`.pwa-tip`）固定貼在底部控制卡上方（`bottom: calc(var(--stepbar-h,101px) + 10px)`、`z-index:61`），內容＝「📲 安裝為原生 App 體驗」標題＋分享 inline SVG＋「加入主畫面」粗體文字＋`✕`；`showPwaTip()`／`hidePwaTip()` 用 `.is-open` 做 320ms 滑入淡出，`body.has-pwa-tip` 同步把 `.toast-stack` 上移 | `#pwaTip`／CSS §7／`showPwaTip()`／`hidePwaTip()` |
| FR-289 | **顯示條件**：只在 **iOS／iPadOS**（`/iphone|ipod|ipad/`，或 `Macintosh` UA ＋ `maxTouchPoints>1` 的 iPadOS 13+）且**非 standalone**（`navigator.standalone===true` 或 `(display-mode: standalone)`）時自動彈出；`boot()` 後延 1.5 秒，若歡迎畫面（`isSplashOpen()`）還開著就每 600ms 重試，等進站後才提示 | `initPwaTip()`／`isIosDevice()`／`isStandaloneApp()` |
| FR-290 | **✕ 記憶 7 天**：按 ✕ 收起並寫入 `mbab:pwa-tip-dismissed-until`（now ＋ 7 天）；`pwaTipMutedUntil()` 未到期就不再彈出。關閉監聽**不分平台一律綁定**（桌機／Android 若手動開啟也關得掉），只有「要不要自動彈」才是平台條件 | `initPwaTip()`／`pwaTipMutedUntil()` |
| FR-291 | **一次性清除測試戰術**：`purgeTestTacticsOnce()` 在 `boot()` 最前面執行——刪除所有 `mbab:tactic:*` 紀錄、把 `mbab:tactics:index` 設成 `[]`、寫入旗標 `mbab:migrate:purge-test-tactics:2026-11`（JSON：`{at, removed}`），並同步清 `state.memoryStore`；有清到東西才 toast「已清除 N 套測試戰術 · 手冊只留 7 套經典戰術」。程式內建的 `TACTIC_LIBRARY` 7 套經典戰術**不受影響** | `purgeTestTacticsOnce()`／`boot()` |
| FR-292 | **快取標頭**：`vercel.json` 與 `frontend/vercel.json` 對 `/manifest.json` 下 `max-age=0, must-revalidate` ＋ `Content-Type: application/manifest+json`（改版即時生效），對 `/(.*).png` 下 7 天長快取（圖示幾乎不變） | `vercel.json`／`frontend/vercel.json` |

#### 非功能需求（Non-Functional）／限制（Constraints）

| Requirement ID | Requirement Description | Feature/Module |
| --- | --- | --- |
| NFR-147 | **不與既有浮層打架**：`#pwaTip` 出場時 `.toast-stack` 自動上移（`body.has-pwa-tip`），批核浮條出現時（`body.has-review`，`z-index:62`）提示卡再往上讓開（+68px）；手機貼底、桌機（≥768px）改成右下角固定寬 360px。層級 61 ＝ 高於 `.stepbar`(40)、低於 sheet(72)／modal(80)／splash(110) | `.pwa-tip` CSS／`body.has-pwa-tip`／`body.has-review` |
| NFR-148 | **零外部依賴、零額外請求**：引導卡是純 HTML＋CSS（專案沒有 Tailwind，一律用既有 `--navy`／`--orange`／`--gold` 等 token 手寫），分享圖示用 inline SVG；不新增 CDN、不加 service worker（離線快取不在本輪範圍） | `index.html` §head／§7／`#pwaTip` |
| C-138 | **Supabase 未設定 → 自訂戰術只存在裝置端**：`SUPABASE_URL`／`ANON_KEY` 仍是 placeholder，雲端資料表不存在，因此「清掉測試戰術」只能由 App 第一次載入時在本機執行（repo 無法直接刪資料）。日後填入金鑰後，雲端請自行在 SQL Editor 執行 `delete from tactics;`——刻意不在前端自動打刪除 API，避免誤刪全隊正式戰術 | `purgeTestTacticsOnce()` |
| C-139 | **一次性、冪等**：旗標存在就不再執行（回傳 0），避免每次開站都清掉使用者新存的戰術；要重跑必須手動移除 `mbab:migrate:purge-test-tactics:2026-11` | `purgeTestTacticsOnce()` |
| C-140 | **standalone 不再提示**：已「加入主畫面」開啟時 `isStandaloneApp()` 為真，`initPwaTip()` 直接 return；`black-translucent` 只是宣告，實際狀態列樣式仍由 Safari／iOS 版本決定（深色球場背景下不刺眼） | `initPwaTip()` |

#### 驗收條件（Acceptance Criteria）

- **AC-225** `<head>` 內 manifest／apple-touch-icon／`apple-mobile-web-app-*` 三組 meta／`theme-color=#EA580C` 全部存在且值正確。
- **AC-226** `manifest.json` 為合法 JSON、icons 使用 `./` 相對路徑，且 `npm run build`／`npm run sync:site` 都把 manifest＋2 張 PNG 複製到 `dist/`、`frontend/site/`。
- **AC-227** 桌機（非 iOS）開站不會自動彈出引導卡：`#pwaTip` 維持 `hidden`、`body` 沒有 `has-pwa-tip`。
- **AC-228** 手動 `showPwaTip()` → 卡片滑入、完整落在視窗內；手機（<768px）卡片底緣不高於 `.stepbar` 頂緣（不遮住底部 4 鍵）；桌機貼右下、右緣不超出視窗。
- **AC-229** 按 ✕ → 卡片收起並回到 `hidden`，`mbab:pwa-tip-dismissed-until` 落在「now ＋ 7 天」量級（> 6 天）。
- **AC-230** 塞入假戰術後執行 `purgeTestTacticsOnce()` → 回傳 ≥ 2、`mbab:tactic:*` 全數消失、索引變 `[]`、旗標寫入；第二次呼叫回傳 0（冪等）。
- **AC-231** 7 個視窗尺寸煙霧測試 `FAIL=0`；`integrity.js` 的 CSS 大括號平衡、兩段 inline script 語法、`dist` 同步雜湊全部通過。

### RTM（本輪）

| Requirement ID | Requirement Description | Feature/Module | User Story Reference | Status |
| --- | --- | --- | --- | --- |
| FR-285 | 根目錄 `manifest.json`（standalone／portrait／`#EA580C`／`./` 圖示） | `manifest.json`＋打包腳本 | US-143 | Verified |
| FR-286 | iOS 主畫面 meta ＋ manifest／icon／apple-touch-icon 連結 | `index.html` §head | US-143 | Verified |
| FR-287 | 192／512 不透明 PNG 主畫面圖示 | `icon-192.png`／`icon-512.png` | US-143 | Verified |
| FR-288 | 底部安裝引導卡 `#pwaTip`（貼 stepbar 上方、z 61） | `.pwa-tip` CSS／`#pwaTip` | US-143 | Verified |
| FR-289 | 只在 iOS 非 standalone 且 splash 關閉後提示 | `initPwaTip()`／`isIosDevice()`／`isStandaloneApp()` | US-143 | Verified |
| FR-290 | ✕ 收起並記憶 7 天（`mbab:pwa-tip-dismissed-until`） | `initPwaTip()`／`pwaTipMutedUntil()` | US-143 | Verified |
| FR-291 | 一次性清除測試戰術（旗標 `…purge-test-tactics:2026-11`）＋ toast | `purgeTestTacticsOnce()`／`boot()` | US-143 | Verified |
| FR-292 | manifest／PNG 快取標頭 | `vercel.json`／`frontend/vercel.json` | US-143 | Accepted |
| NFR-147 | 提示卡與 toast／批核浮條互不遮擋（手機貼底、桌機右下） | `.pwa-tip` CSS／`body.has-*` | US-143 | Verified |
| NFR-148 | 純 CSS／inline SVG，不加 CDN、不加 service worker | `#pwaTip`／CSS §7 | US-143 | Verified |
| C-138 | Supabase 未設定 → 只能在本機清，雲端需手動 `delete from tactics` | `purgeTestTacticsOnce()` | US-143 | Accepted |
| C-139 | 一次性、冪等，需手動刪旗標才能重跑 | `purgeTestTacticsOnce()` | US-143 | Verified |
| C-140 | standalone 不提示；狀態列樣式仍由 Safari 決定 | `initPwaTip()` | US-143 | Accepted |
| AC-225～AC-231 | 驗收 | 見下方「驗收紀錄（本輪：US-143）」 | US-143 | Verified |

### 驗收紀錄（本輪：US-143）

**日期**：2026-11-09 ｜ **方式**：`npm run build` → `npm run sync:site` → `node .scratch/smoke/integrity.js`（靜態）→ `node .scratch/smoke/build.js`（重建測試頁）→ `node .scratch/smoke/cdp.js`（7 個 spec）。

| 規格 | 視窗 | 結果 |
| --- | --- | --- |
| `390x844` | 390×844（iPhone 14） | **PASS=236 · FAIL=0** |
| `375x667` | 375×667（矮螢幕，`is-dense`） | **PASS=236 · FAIL=0** |
| `360x740` | 360×740（超窄機） | **PASS=236 · FAIL=0** |
| `768x1024` | 768×1024（斷點邊界） | **PASS=214 · FAIL=0** |
| `900x900` | 900×900（平板抽屜帶） | **PASS=214 · FAIL=0** |
| `1184x820` | 1184×820（中桌機） | **PASS=212 · FAIL=0** |
| `1440x900` | 1440×900（`?full=1` 桌機三欄） | **PASS=212 · FAIL=0** |

- 靜態檢查：CSS 大括號 **633／633** 平衡、兩段 inline script 語法通過（`script0` 702 chars／`script1` 178037 chars）、`index.html`／`dist/index.html`／`frontend/site/index.html` 雜湊一致（`287E6F65D040`）。
- 打包：`dist/` 與 `frontend/site/` 皆為「1 個 HTML ＋ 4 個資源」＝`index.html`、隊徽 jpeg、`icon-192.png`、`icon-512.png`、`manifest.json`。
- 新增的斷言（16 條）：`pwa.manifestLinked`、`pwa.appleTouchIcon`、`pwa.metaTags`、`pwa.tipElement`、`pwa.tipIdleOnDesktop`、`pwa.tipShown`、`pwa.tipInsideViewport`、`pwa.tipAboveStepbar`、`pwa.dismissPersists`、`pwa.tipHiddenAfterDismiss`、`pwa.purgeRemoved`、`pwa.purgeNoTacticKeys`、`pwa.purgeIndexCleared`、`pwa.purgeRecordsGone`、`pwa.purgeFlagSet`、`pwa.purgeIdempotent`。
- 實測值（手機）：390×844 → `tipBottom=401 / barTop=411`；375×667 → `tipBottom=386 / barTop=397`；360×740 → `tipBottom=372 / barTop=382`，皆未遮住底部 4 鍵。
- 修正過程：360×740 曾量到 `tipBottom=386 / barTop=382`（只差 4px）——原因是步驟文字換行後 `--stepbar-h` 比控制卡實高矮 14px（`ResizeObserver` 尚未回報）。改為 `showPwaTip()` 出場前重量一次 `.stepbar` 並回寫 CSS 變數後，全部規格回到 `FAIL=0`。
- 目視：`.scratch/us143-pwa-390.png`／`us143-pwa-360.png`／`us143-pwa-1440.png`（`node .scratch/smoke/shot.js pwa390,pwa360,pwa1440`）；手機箭頭指向底部控制卡、桌機（≥768px）改右下角卡片並收掉箭頭。

### 已知取捨／限制

1. **沒有 service worker**：本輪只做「可安裝＋外觀像 App」，離線快取完全沒做（也沒有 PWA 快取陷阱要顧）。若之後要離線開圖，再補 `sw.js` 與 `fetch` 策略。
2. **iOS 沒有程式化安裝 API**：Safari 不支援 `beforeinstallprompt`，所以只能用「引導卡教學＋使用者自己按分享→加入主畫面」；卡片無法代按，也無法偵測使用者是否真的加了（只能事後用 `standalone` 判斷）。
3. **圖示是環境照片裁切**：`icon-192/512.png` 由隊徽原圖置中裁切而來，四角仍帶原圖的球場背景（圓形隊徽外）。若要 100% 乾淨的方形底，需要在設計工具重新輸出。
4. **清除測試戰術只在本機生效**：Supabase 未設定時戰術存在 `localStorage`，換裝置／換瀏覽器就清不到；雲端資料表要另外手動 `delete from tactics;`（`C-138`）。
5. **旗標是一次性的**：`mbab:migrate:purge-test-tactics:2026-11` 一旦寫入就不再清除；若之後又需要清空，得改旗標版本號（例如 `…:2027-01`）或手動刪 key。

