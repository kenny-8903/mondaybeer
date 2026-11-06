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

**狀態：已實作（2026-11-06）** — ≤767px 重排為 Header 44px → 球場 100vw（忠實比例、不裁切、無圓角）→ 唯讀步驟資訊卡 → 底部動作列；教練工具與戰術手冊改為 Bottom Sheet（把手、下滑關閉、動態限高，永不加蓋球場）；`.mobile-dock`（步驟縮圖＋解說卡＋防守快捷 chip）與 `#lockBadge` 整組移除。桌面（>1100px）與平板（768–1100px）版面完全未動，見 FR-189～FR-198。

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
| FR-113 | Functional | 雙模式：球員模式（唯讀，可切換步驟／播放）與教練模式（全功能），教練模式以密碼 `coach888` 解鎖，解鎖狀態存於 sessionStorage |
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
| FR-166 | Functional | `newTactic()` 流程：先守門 `isCoach()`（非教練改走 `requestCoachMode()` 要密碼）、播放／匯出中擋下並提示；`state.frames.length > 1` 或畫布上有自訂線條時先 `confirmDialog('新增戰術', …, '清空並新增')`（無未存內容則一鍵直接新增）；確認後清 `state.undo`、`clearBoardObjects()` → `addFormation()`（5 攻 5 守 1 球、防守預設 2-1-2）→ `state.frames` 重設成單一步驟「步驟 1」→ `tacticId = null`、`tacticName = ''`、`tacticSource = null` → `applyMode()`／`renderLibrary()`（清掉經典戰術的 `is-active`）／清 `#pbList .pb-item.is-active`／`renderStepUI()` → `focusTacticNameField()` |
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
| C-109 | Constraint | 「➕ 新增戰術」只重設畫布與狀態，**不會自動存檔**（仍需按「💾 儲存戰術」才寫入清單／Supabase）；未命名就存檔時沿用既有「新戰術 N」預設命名，`maxlength=60` 與既有命名彈窗一致 |

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
| AC-131 | 左側手冊 `.pb-head` 下方可見「➕ 新增戰術」按鈕與「戰術名稱」輸入框（`placeholder === '請輸入戰術名稱'`），提示行不溢出容器（`scrollWidth === clientWidth`）；球員模式下整個 `.pb-new-row` 不進版面（`display:none`、`offsetParent === null`） |
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
| FR-195 | 當前步驟唯讀資訊卡 | HTML `#stepInfo`（`#stepInfoIdx`／`#stepInfoName`／`#stepInfoDesc`／`#stepInfoCue`）；§9 `renderMobileStepInfo()`（由 `renderStepUI()` 呼叫）；CSS `.mobile-stepinfo`（桌機 `display:none`） | US-129 | Complete |
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

## 🧭 使用說明

1. **開啟**：直接雙擊 `index.html`（`file://` 可用），或放到任何靜態伺服器／Netlify／GitHub Pages。一進來是**開場首頁**：上方圓形隊徽（讀取同資料夾的 `WhatsApp Image …jpeg`，找不到時顯示 `MB` 字樣）＋ `MONDAY BEER & BASKETBALL`，下面兩張卡片選身分——**我是球員**（唯讀看戰術）或 **我是教練**（需密碼）；進站後頂部右側的 `⎋ 切換身分` 可隨時回到首頁。球場已改為乾淨紙白漸層（不再有隊徽浮水印）。
2. **教練模式**：首頁點「我是教練」→ 輸入 `coach888`（或進站後點右上「教練模式」）。
3. **畫戰術（拖曳就會記錄）**：**直接把球員拖到想要的位置**，放開就自動長出軌跡線——持球的人拖曳時球會跟著手跑（波浪＝運球）、其他人是切入箭頭、防守員是藍色「防守移動」箭頭；**要傳球就把籃球拖到隊友身上**（靠近時會亮起橙色候選圈，放開即吸附到手上、生成傳球虛線並換人持球，下一步的持球者也會一起換）。想手動補線再用「戰術線條」工具在球場拖曳畫線 → 按「儲存此步驟」或「＋」新增下一步（**新步驟沿用目前畫面，但不會帶上自動軌跡線，手畫的線會保留**）。右側工具列由上而下是「球員名單 → 防守陣型 → 戰術線條 → 動作 → 防守與球」（原本最下方那張「快捷鍵 SHORTCUTS」說明卡已整張移除，桌機／手機都不再佔版面；鍵盤快捷鍵照樣可用，只是不再列在畫面上）；「防守與球」（`PG`／`SG`／`SF`／`PF`／`C`＋籃球）收在最下方、**預設收合**，要加防守員或球時點一下標題展開。**進攻球員請由最上方的「球員名單」點背號派上場**。
4. **套用經典戰術**：左側手冊「經典戰術 7 套」分三類（破 2-1-2 聯防 2／破 3-2 聯防 2／底線開球 3），**點任一套即載入 4 個步驟並自動開始循環播放**（含路線與解說），要修改再按「■ 停止播放」；載入後目前戰術會以磚紅左側色條標示，`我的戰術` 仍保留原本存檔。播放中點另一套會先停下目前動畫再換，不會兩段交錯。
5. **讀懂每一步**：球場右上角顯示該步的「機會標籤」（例：`順下吃餅`）；持球的人會有橙色柔光（球會偏在他手側，不會蓋住背號），播放時移動中的球員會留下殘影，跟著光與殘影就知道球往哪走。
6. **排防守**：右側「防守陣型」點 2-1-2／2-3／3-2／人盯人，五位防守者會以動畫移到標準防區（可 `Ctrl+Z` 復原）；人盯人會依目前進攻球員位置自動貼防。要擺自己的陣型就按最下方 **「自訂防守」**，之後直接拖曳 `PG`–`C` 到想要的位置，放開即記進目前步驟（不必再按「儲存此步驟」），並自動留下一條藍色「防守移動」箭頭說明誰補到哪裡。
7. **派名單球員**：右側「球員名單」按背號由小到大排好（18 人），每人顯示「背號＋姓名＋位置」（例 `31 Sai PF/C`）；上方的位置 chips（`全部`／`PG/SG 後衛`／`SF/PF 前鋒`／`PF/C 中前鋒`）可一鍵只看那類人（可打多位置者會同時出現在相關分類），點背號即以「背號＋姓名」上場；同一背號再點一次只會選取既有球員。
8. **看動畫**：載入戰術會自動播放；也可按 `播放動畫`（或 `Space`）手動播放，播放中再按一次即「停止播放」；`∞`（或 `L`）循環預設開啟，練球時可一直重播（系統開啟「減少動態」時不自動播放）。戰術庫載入的聯防防守會隨球自動輪轉（最近的人關門），看起來是「活的防守」。
9. **講解時收起工具列（桌面 >1100px）**：點右側「教練工具 TOOLS」標題列右端的 `›`，工具列收起、球場自動放大並居中，右緣中段留一個 `‹` 把手；點 `‹` 即展開。狀態會記在瀏覽器裡，下次進教練模式自動還原。
10. **開一套新戰術**：左側「戰術手冊」最上方的 **「➕ 新增戰術」**＝一鍵把畫布清成預設 2-1-2（5 攻 5 守 1 球）＋ 只留「步驟 1」，並取消目前載入的戰術；下方「戰術名稱」直接打名字（`Enter` 或點一下球場即完成輸入），接著畫線、按「＋」加步驟，最後「💾 儲存戰術」就用這個名字存檔（不必再在彈窗打一次）。若畫布上已經有多個步驟或自訂線條，會先跳確認框避免誤觸；只想清空則用「重設球場」。
11. **存檔／改名／刪除**：`儲存戰術` 若手冊上方已填名稱就直接存，沒填才跳命名框（預設「新戰術 N」）；左側「戰術手冊」每列右側有 ✎（改名）與垃圾桶（刪除，需確認），點名稱即載入；`↻` 可重新整理清單。
12. **手機（直向 ≤767px）**：版面只剩三塊——**球場滿版**（100vw、比例與 FIBA 一致、不裁切、無圓角）、**當前步驟卡**（第幾步／名稱／說明／機會標籤，唯讀）、**底部動作列**（`播放`／`∞`／可左右滑的步驟膠囊／`☰ 戰術手冊`／`🛠 教練工具`；教練模式多一列 `＋` 與 `💾 儲存戰術`，球員模式右側是 `⬇` 匯出 GIF）。`☰`／`🛠` 現在都是**從底部滑出的面板**（上方有把手，往下滑、按 `✕` 或點一下球場即收起），面板高度依球場下緣自動計算，**永遠不會蓋住球場**；教練工具面板裡多了「導出 GIF／複製此步驟／刪除此步驟」三顆按鈕（原本重複在底部列的那些按鈕已移除）。**手機上同樣可以直接用手指拖曳球員跑位、把球拖到隊友身上完成傳球**（籃球感應區已比外觀放大約一倍）；畫布設 `touch-action:none`，**拖曳時整頁不會跟著滾動**，輕點（位移 < 10px）也不會被誤判成拖曳。平板（768–1100px）與桌面（>1100px）版面與功能完全沒變。
13. **分享**：`導出 GIF` 下載的檔名就是戰術名稱（`底線電梯門 · 底線發球` → `底線電梯門_底線發球.gif`，未命名時 `MondayBeer_Tactic.gif`），可直接貼群組。
14. **雲端存檔（選用）**：在 `index.html` 的 `SUPABASE_URL` / `SUPABASE_ANON_KEY` 填入專案金鑰，並依檔案內註解建立 `tactics` 資料表與 RLS policy，之後儲存會自動改走 Supabase（右上狀態膠囊會變成綠色「Supabase 雲端」）。

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

