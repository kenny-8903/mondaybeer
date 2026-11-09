# MondayBeer 戰術板 · 冒煙測試（Node + CDP）

不需要任何 npm 套件：`cdp.js` 內建 `fetch` ＋ `WebSocket`（Node 22+）直接跟 Edge 的 DevTools 協定對話。

## 用法

```powershell
# 1) 先建置（index.html → dist/），測試跑的是 dist/
npm run build

# 2) 產生測試頁（index.html ＋ harness.js 注入到 </body> 前，輸出到 %TEMP%\mbsmoke）
#    ⚠ 只要改了 index.html 或 harness.js，就一定要重跑這一行，
#      cdp.js 讀的是暫存頁，不會自己重建（沒重跑＝偷偷測到舊版）。
node .scratch\smoke\build.js

# 3) 跑規格（可任意挑，逗號分隔）
node .scratch\smoke\cdp.js 1440x900,390x844,375x667,gif

# 只想看摘要
node .scratch\smoke\cdp.js 390x844 | Select-String -Pattern '^=====|^FAIL'
```


輸出格式：每個規格一行 `===== <spec> (<viewport>) PASS=n FAIL=0 =====`，失敗會列 `FAIL <id> [detail]`。

## 為什麼不用 `--window-size`？

Windows 上 Edge／Chrome 的視窗最小寬度會被夾到約 500px，`--window-size=390,844` 量不到真正的手機寬度。
`cdp.js` 改用 `Emulation.setDeviceMetricsOverride`（`mobile:true`、`deviceScaleFactor:2`、`maxTouchPoints:5`），
所以 `window.innerWidth` 就是 390／375，手機 RWD 斷言才有意義。

## 規格（spec）

| spec | 說明 |
| --- | --- |
| `1440x900` | 桌機（`?full=1`）零回歸 |
| `1184x820` | 中桌機（`本機儲存` 膠囊仍在） |
| `900x900` | 平板＝**768–1100px 抽屜帶**（右側工具改抽屜、`🛠` 切換鈕） |
| `768x1024` | 平板最小寬（斷點邊界） |
| `390x844` | 一般手機直向 |
| `375x667` | 矮螢幕手機（`-webkit-line-clamp` 收斂、`is-dense`） |
| `360x740` | 超窄機（≤380px 再縮一級） |
| `gif` | 390×844 ＋ `#gif`：`gifshot.createGIF` 以 stub 取代（headless 的 Worker 編碼不會 resolve），只驗證擷取 → dataUrl → 還原 → 分享／下載路徑 |

## 斷言分組（US-140 之後）

| 前置 | 說明 |
| --- | --- |
| `pb.*` | 手冊側欄只剩「標題 ＋ ✕(≤1100) ＋ 清單」：`headOnlyTitleAndClose`／`listKept`／`newRowRemoved`／`toolsRowRemoved`／`refreshRemoved` |
| `create.*` | 「＋ 新增」→ 建立對話框（US-139 只剩 **名稱＋作者**）：`modalOpen`／`namePrefilled`／`rosterOptions(19)`／`coachOptionFirst`／`authorDefaultPlayer`／`authorDefaultCoach`／`noSecondConfirm`／`twoFields`／`noDefensePicker`／`defenseDefault212`／`nameRequired`／`modalClosed`／`tacticName`／`authorSet`／`freshStep1` |
| `draw.*` | 繪製模式：`editing`／`bodyEdit`／`canEditTrue`／`editKeysShown`／`playKeysHidden`／`saveLabelProposal`／`keyPresent`／`panelToggle`／`defaultTool`／`threeLines`／`keyOn`／`toolSwitch`／`toolActive`／`keyStillOn`／`backToStep`（US-140 ✏️ 走位畫筆）／`toolPass`／`hintShown`（US-142：面板內的批核列已刪 → `draw.approveHidden` 改成 `panel.noApproveRow`） |
| `editbar.*` | US-140：底部 4 鍵＝`👥 球員陣容`／`🛡 防守陣型`／`✏️ 走位畫筆`／`📤 提交審核·🚀 正式發布` → `fourKeys`／`fourKeysEven`（桌機四鍵等寬）／`fourKeysFit`（文字不溢出）／`addStep` |
| `stepadd.*` | US-140：`＋ 加步驟` 移到球場下方輕量條（`.step-add`）→ `inStrip`／`notInKeys`（不在 `#editKeys` 內）／`beforePanel`（在工具面板之前）／`count`（共 1 步）／`countFollows`（加步驟後共 2 步） |
| `panel.*` | US-139：中間動態工具面板 —— `stepDefault`／`stepInfoShown`／`stepNameWrite`／`stepDescWrite`／`chipFollows`／`previewPlays`／`playKeysDuringPreview`／`previewStops`／`rosterToggle`／`rosterReplacesSteps`／`rosterPressed`／`rosterBack`／`defenseToggle`／`defenseApplied`／`defenseRestored`／`defenseBack`／`desktopRoster`／`desktopDefense` |
| `edit.*` | 右上角「＋ 新增」⇄「✕ 退出」：`exitLabel`（繪製中顯示「退出」） |
| `exit.*` | US-139：新增→退出 → 原樣回到進編輯前的畫面：`createOpened`／`inEdit`／`labelWhileEditing`／`restoresPlay`／`restoresFrames`／`restoresFramesContent`／`restoresId`／`restoresName`／`labelBack`／`playKeysVisible` |
| `submit.*` | US-138：`📤 提交審核` 直接寫入 —— `noDialog`／`pending`／`recordId`／`authorKept`／`snapshotCleared`（存檔後「退出」不再倒回） |
| `author.*` | US-138：作者＝🏀 教練 → 「🚀 發布」直接發布 —— `coachDefaultInCreate`／`coachNoConfirm`／`coachEditing`／`coachIsAuthor`／`publishLabel`／`coachNoDialog`／`coachApproved`／`coachRecordApproved` |
| `save.*` | 儲存對話框（fallback 路徑）：`personOptions(19)`／`authorPreselected` |
| `tools.*` | 工具入口隨寬度換：`entryRule`（>1100 第三欄、≤1100 `#sideToggle`）／`toggleOpensDrawer`／`toggleClosesDrawer` |
| `approve.*` | **（US-142 已改寫）** 舊「批核入口在工具面板內（`tpApprove`）」整套移除 → 現在是 `panel.noApproveRow`＋`parity.*`／`pending.*`／`approveEdit.reviewBarShown` |
| `coach.*` | US-142：教練進站＝瀏覽 —— `mode`／`startsBrowsing`／`canEditFalse`／`browseKeys`／`playKeysShown`／`editKeysHidden`／`panelHidden`／`sidebarHidden`／`addStripHidden`／`badgeVisible`／`reviewBarOnPending` |
| `parity.*` | US-142：教練瀏覽 vs 球員瀏覽外框簽章相同 —— `coachVsPlayer`（display＋播放鍵尺寸）／`playerBadgeHidden`／`playerReviewBarHidden` |
| `pending.*` | US-142：🔔 待批審核中心 —— `onePending`／`badgeShown`／`countMatches`／`sheetOpens`／`sheetScrim`／`itemRows`／`itemName`／`itemMeta`／`itemTag`／`sheetClosedAfterLoad`／`loadOnClick`／`reviewBarShown`／`reviewBtns`／`reviewMeta`／`reviewBtnsEnabled`／`approved`／`reviewBarHiddenAfter`／`badgeDecrement` |
| `mobile.*` | 手機控制卡：`panelVisible`／`panelNoOverflow`／`editKeysFixed`／`keysEven`／`keysNoOverflow`／`stepAddAbovePanel`（US-140 加步驟條在面板之上）／`playKeysHidden`／`quickSaveRemoved`／`courtFitsViewport`／`rosterRendered`／`defenseButtons`／`toolsDrawerOpens`／`toolsDrawerCloses`／`exitLabelLong` … |
| `readonly.*` | 唯讀球員：`playKeysBack`／`editKeysHidden`／`panelHidden`／`shareKept`／`noProposeEntry`／`shareBack`／`metaDefenseKept` |
| `home.*` | 隊徽即回首頁：`brandIsButton`／`notNestedInButton`／`splashOpened`／`splashedBodyMode`／`backToPlayer` |

## GIF／截圖

```powershell
node .scratch\smoke\shot.js pb1440,create1440,draw1440,draw900,draw390
# US-139：動態工具面板（步驟資訊 / 球員陣容 / 防守陣型）
node .scratch\smoke\shot.js draw1440step,draw390roster,draw390defense
# US-140：加步驟輕量條 ＋ 底部 4 鍵 ＋ ✏️ 走位畫筆面板
node .scratch\smoke\shot.js add390,add390pen,add1440,add1440pen,coach390
# US-142：教練＝瀏覽（＋🔔 徽章）／待審核 Bottom Sheet／球場右下批核浮條
node .scratch\smoke\shot.js coach1440,coach390,coach360,pend1440,pend390,review1440,review390
```

`shot.js` 支援 `pre`／`post` 兩個 evaluate 勾子（`pre` 在載入後執行、`post` 再等 1.2 秒後執行），
`draw*` 規格就是靠它自動「＋ 新增 → 填名稱 → 送出 → 進入繪製模式（US-139 只剩名稱＋作者，不再跳確認框）」，
面板規格再用 `post` 按 `#ekRoster`／`#ekDefense` 切到名單／防守視圖。

## 靜態檢查（不開瀏覽器）

```powershell
node .scratch\smoke\integrity.js
```

檢查：亂碼字樣（`functfon` / `dfsplay` …）、CSS 大括號平衡、inline script `node --check`、
`index.html` 與 `dist/index.html` SHA256 是否一致。改完 `index.html` 記得 `npm run build`，否則這項會 FAIL。

## 檔案

- `cdp.js` — CDP 驅動（開瀏覽器 → 設裝置指標 → 載入暫存測試頁 → 等 `#SMOKE` 節點 → 印摘要）
- `build.js` — 產生測試頁（把 `harness.js` 注入到 `index.html` 的 `</body>` 前，寫到 `%TEMP%\mbsmoke`）
- `harness.js` — 斷言本體（`gate.*` / `pb.*` / `create.*` / `draw.*` / `tools.*` / `mobile.*` / `readonly.*` / `home.*` / `gif.*` / `share.*` …）
- `shot.js` — 截圖（乾淨頁面、自動進站；支援 `pre`／`post` evaluate 勾子）
- `report.js` — 輸出 `#SMOKE` 文字區塊
- `integrity.js` — 上面的靜態檢查
