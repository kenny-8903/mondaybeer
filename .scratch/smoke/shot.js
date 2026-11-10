/* 用 CDP 截圖（不注入 harness：乾淨頁面 ＋ 自動按「我是球員」進站）
   輸出：.scratch/<name>.png（整頁）與 .scratch/<name>-hdr.png（Header 2x 特寫）
   用法：node .scratch/smoke/shot.js [spec,spec...]（預設 desk1440,phone390） */
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');

const EDGE = process.env.EDGE_BIN ||
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = Number(process.env.SHOT_PORT || 9393);
const root = path.resolve(__dirname, '..', '..');
const outDir = path.join(os.tmpdir(), 'mbshot');
const PROFILE = path.join(os.tmpdir(), 'mbshot-profile');

/* US-137／US-139：先按「＋ 新增」→ 填名稱 → 送出 → 進入繪製模式（只剩名稱＋作者，不再有陣型下拉） */
const CREATE_THEN_DRAW = '(function(){' +
  'document.getElementById("btnNewTactic").click();' +
  'setTimeout(function(){' +
  'var n=document.getElementById("createName");if(n)n.value="US139 測試戰術";' +
  'var f=document.getElementById("createForm");if(f)f.requestSubmit();' +
  '},260);})()';

/* US-141：畫一條跑位線（＝直接把 1 號送到箭咀終點），截圖看「線＋人已在終點＋寫入步驟 2」 */
const PEN_SHOT_SETUP = '(function(){' +
  'setTool("cut");' +
  'addStep();' +
  'var p=findNode("off1");var x=p?Math.round(p.left):-1;' +
  'var handled=p?commitStrokeToStep("cut",{x:p.left,y:p.top},{x:p.left+140,y:p.top+70}):false;' +
  'return "frames="+state.frames.length+" from="+x+" handled="+handled+" to="+(p?Math.round(p.left):"n/a");})()';

/* US-141：回到步驟 1 再播放 → 截圖剛好落在補間中（球員沿著步驟 2 的箭咀走）
   延後 600ms 起播：截圖（post 後約 1s）剛好落在 900ms 補間的中段 */
const PEN_PLAY_SETUP = '(function(){' +
  'setTool("select");' +
  'addStep();' +
  'var p=findNode("off1");' +
  'if(p) commitStrokeToStep("cut",{x:p.left,y:p.top},{x:p.left+140,y:p.top+70});' +
  'setTimeout(function(){ renderFrame(0).then(function(){ tweenToFrame(0,1); }); },600);' +
  'return "mid-tween";})()';

/* US-141：只鋪「步驟 2 的箭咀預覽」並把透明度拉滿 —— 檢查播放時看到的路徑外觀 */
const PEN_PREVIEW_SETUP = '(function(){' +
  'setTool("select");' +
  'addStep();' +
  'var p=findNode("off1");' +
  'if(p) commitStrokeToStep("cut",{x:p.left,y:p.top},{x:p.left+140,y:p.top+70});' +
  'renderFrame(0).then(function(){ return previewStepLines(state.frames[1]); })' +
  '.then(function(ls){ ls.forEach(function(o){ o.set("opacity",1); }); canvas.requestRenderAll();' +
  ' window.__pv=ls.map(function(o){ return "op="+o.opacity+" sx="+o.scaleX+" kids="+' +
  '(o._objects||[]).map(function(c){ return c.type+":"+(c.stroke||"-")+":"+c.strokeWidth+"@"+' +
  'Math.round(c.left)+","+Math.round(c.top); }).join(" / "); }); });' +
  'return "preview-only";})()';

/* US-142：先做一套「球員提案」（未批核），再以教練身分進站 → 🔔 待批 (N) 與右下批核浮條才有資料 */
const SEED_PENDING = '(async function(){' +
  'try { window.localStorage.clear(); } catch (e) { /* noop */ }' +
  'await startDrawingFlow("Kenny 低位單打","23");' +
  'await quickSubmitTactic();' +
  'await new Promise(function(r){ setTimeout(r, 900); });' +
  'enterCoachMode(true);' +
  'await renderPlaybook();' +
  'syncEditUI();' +
  'return "pending=" + pendingItems().length;})()';

const SPECS = {
  desk1440: { name: 'v4-topbar-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68 },
  phone390: { name: 'v4-topbar-390', width: 390, height: 844, mobile: true, query: '', hdr: 52 },
  phone360: { name: 'v4-topbar-360', width: 360, height: 740, mobile: true, query: '', hdr: 52 },
  tab768: { name: 'v4-topbar-768', width: 768, height: 1024, mobile: false, query: '?full=1', hdr: 68 },
  tab900: { name: 'v4-topbar-900', width: 900, height: 900, mobile: false, query: '?full=1', hdr: 68 },

  /* US-137：手冊精簡 / 建立對話框 / 繪製模式（工具第三欄、💾 換鍵） */
  pb1440: { name: 'us137-book-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68 },
  create1440: {
    name: 'us137-create-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: 'document.getElementById("btnNewTactic").click()',
  },
  draw1440: {
    name: 'us137-draw-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
  },
  draw900: {
    name: 'us137-draw-900', width: 900, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
    post: 'document.getElementById("sideToggle").click()',
  },
  draw390: {
    name: 'us137-draw-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: CREATE_THEN_DRAW,
  },
  pb390: {
    name: 'us137-book-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    post: 'document.getElementById("pbToggle").click()',
  },
  /* US-139：繪製中的動態工具面板（步驟資訊 / 球員陣容 / 防守陣型） */
  draw390roster: {
    name: 'us139-panel-roster-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: CREATE_THEN_DRAW,
    post: 'document.getElementById("ekRoster").click()',
  },
  draw390defense: {
    name: 'us139-panel-defense-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: CREATE_THEN_DRAW,
    post: 'document.getElementById("ekDefense").click()',
  },
  draw1440step: {
    name: 'us139-panel-step-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
  },
  /* US-139／US-142：教練進站＝瀏覽（與球員同一個畫面）＋ 右上 🔔 待批徽章 */
  coach1440: {
    name: 'us142-coach-browse-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: SEED_PENDING,
    post: 'document.getElementById("rvClose").click()',
  },
  coach390: {
    name: 'us142-coach-browse-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: SEED_PENDING,
    post: 'document.getElementById("rvClose").click()',
  },
  coach360: {
    name: 'us142-coach-browse-360', width: 360, height: 740, mobile: true, query: '', hdr: 52,
    pre: SEED_PENDING,
    post: 'document.getElementById("rvClose").click()',
  },
  /* US-142：🔔 待批審核中心 Bottom Sheet（桌機置中貼底 / 手機由下往上滑） */
  pend1440: {
    name: 'us142-pending-sheet-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: SEED_PENDING,
    post: 'document.getElementById("btnPending").click()',
  },
  pend390: {
    name: 'us142-pending-sheet-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: SEED_PENDING,
    post: 'document.getElementById("btnPending").click()',
  },
  /* US-142：載入待批提案後 → 球場右下批核浮條（✅ 批准／✏️ 微調／🗑 退回） */
  review1440: {
    name: 'us142-review-bar-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: SEED_PENDING,
  },
  review390: {
    name: 'us142-review-bar-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: SEED_PENDING,
  },
  /* US-144：教練手冊「待審核戰術／我的戰術」分組 ＋ 每列紅色 🗑 刪除鍵 */
  us144coach1440: {
    name: 'us144-playbook-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: SEED_PENDING,
    post: 'document.getElementById("rvClose").click()',
  },
  us144coach390: {
    name: 'us144-playbook-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: SEED_PENDING,
    post: 'document.getElementById("pbToggle").click()',
  },
  /* US-140：「＋ 加步驟」輕量條（球場正下方）＋ 底部 4 鍵（名單／陣型／畫筆／提交）*/
  add390: {
    name: 'us140-draw-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: CREATE_THEN_DRAW,
  },
  add390pen: {
    name: 'us140-pen-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: CREATE_THEN_DRAW,
    post: 'document.getElementById("ekDraw").click()',
  },
  add1440: {
    name: 'us140-draw-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
  },
  add1440pen: {
    name: 'us140-pen-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
    post: 'document.getElementById("ekDraw").click()',
  },
  /* US-141：走位畫筆 → 步驟 keyframe（畫完跑位線＝球員已在箭咀終點）＋ 播放期箭咀＝運動路徑 */
  pen1440: {
    name: 'us141-pen-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
    post: PEN_SHOT_SETUP,
  },
  penplay1440: {
    name: 'us141-penplay-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
    post: PEN_PLAY_SETUP,
  },
  pen390: {
    name: 'us141-pen-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: CREATE_THEN_DRAW,
    post: PEN_SHOT_SETUP,
  },
  /* 只鋪上「步驟 2 的箭咀預覽」（播放時用的同一支函式），把透明度拉滿檢查外觀 */
  penpreview1440: {
    name: 'us141-preview-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: CREATE_THEN_DRAW,
    post: PEN_PREVIEW_SETUP,
  },

  /* US-143：iOS「加入主畫面」引導卡（headless 是桌機 UA → 用 pre 手動叫出） */
  pwa390: {
    name: 'us143-pwa-390', width: 390, height: 844, mobile: true, query: '', hdr: 52,
    pre: 'showPwaTip(); "tip-shown"',
  },
  pwa360: {
    name: 'us143-pwa-360', width: 360, height: 740, mobile: true, query: '', hdr: 52,
    pre: 'showPwaTip(); "tip-shown"',
  },
  pwa1440: {
    name: 'us143-pwa-1440', width: 1440, height: 900, mobile: false, query: '?full=1', hdr: 68,
    pre: 'showPwaTip(); "tip-shown"',
  },
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* 1) 產生乾淨頁面（ASCII 路徑，避開 file:// 中文轉義） */
function buildPage() {
  fs.mkdirSync(outDir, { recursive: true });
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const auto = [
    'window.addEventListener("load", function () {',
    '  var n = 0;',
    '  var t = setInterval(function () {',
    '    var s = document.getElementById("splash");',
    '    var p = document.getElementById("enterPlayer");',
    '    if (p && s && !s.hidden) p.click();',
    '    if (++n > 15) clearInterval(t);',
    '  }, 200);',
    '});',
  ].join('\n');
  const marker = '</body>';
  const idx = html.lastIndexOf(marker);
  if (idx === -1) throw new Error('找不到 </body>');
  fs.writeFileSync(path.join(outDir, 'index.html'),
    html.slice(0, idx) + '<script>\n' + auto + '\n</' + 'script>\n' + html.slice(idx), 'utf8');
  fs.readdirSync(root).forEach(function (n) {
    if (/\.(jpe?g|png|svg|webp|ico)$/i.test(n)) {
      fs.copyFileSync(path.join(root, n), path.join(outDir, n));
    }
  });
}

function fileUrl(query) {
  return 'file://' + path.join(outDir, 'index.html').replace(/\\/g, '/') + (query || '');
}

async function waitPort(timeoutMs) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    try {
      const r = await fetch('http://127.0.0.1:' + PORT + '/json/list');
      if (r.ok) return;
    } catch (err) { /* retry */ }
    await sleep(300);
  }
  throw new Error('CDP 埠未就緒');
}

async function pageTarget() {
  const list = await (await fetch('http://127.0.0.1:' + PORT + '/json/list')).json();
  const page = list.filter((t) => t.type === 'page')[0];
  if (!page) throw new Error('找不到 page target');
  return page.webSocketDebuggerUrl;
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    const pending = new Map();
    let id = 0;
    ws.addEventListener('open', () => {
      resolve({
        send(method, params) {
          return new Promise((res, rej) => {
            const msgId = ++id;
            pending.set(msgId, { res, rej });
            ws.send(JSON.stringify({ id: msgId, method, params: params || {} }));
          });
        },
        close() { try { ws.close(); } catch (err) { /* noop */ } },
      });
    });
    ws.addEventListener('message', (evt) => {
      let msg;
      try { msg = JSON.parse(evt.data); } catch (err) { return; }
      if (!msg.id || !pending.has(msg.id)) return;
      const { res, rej } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) rej(new Error(msg.method + ': ' + (msg.error.message || 'cdp error')));
      else res(msg.result);
    });
    ws.addEventListener('error', () => reject(new Error('WebSocket 連線失敗')));
  });
}

async function capture(client, name, clip) {
  const opts = { format: 'png' };
  if (clip) opts.clip = clip;
  const res = await client.send('Page.captureScreenshot', opts);
  const file = path.join(root, '.scratch', name + '.png');
  fs.writeFileSync(file, Buffer.from(res.data, 'base64'));
  console.log('shot -> ' + file);
}

const PROBE = '(function(){var s=document.getElementById("splash");' +
  'var w=document.querySelector(".mode-switch");var b=document.getElementById("btnNewTactic");' +
  'var r=function(e){var q=e.getBoundingClientRect();return Math.round(q.width)+"x"+Math.round(q.height)};' +
  'return "vw="+innerWidth+" splashHidden="+(s?s.hidden:"n/a")+' +
  '" switch="+(w?r(w):"none")+" btn="+(b?r(b):"none")+' +
  '" gap="+(w&&b?Math.round(b.getBoundingClientRect().left-w.getBoundingClientRect().right):"n/a")+' +
  '" topbarOverflow="+(document.querySelector(".topbar").scrollWidth>document.querySelector(".topbar").clientWidth?"YES":"no");})()';

async function runSpec(spec) {
  const edge = spawn(EDGE, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=' + PORT, '--user-data-dir=' + PROFILE,
    'about:blank',
  ], { stdio: 'ignore' });

  try {
    await waitPort(20000);
    const client = await connect(await pageTarget());
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: spec.width, height: spec.height, deviceScaleFactor: 2,
      mobile: spec.mobile, screenWidth: spec.width, screenHeight: spec.height,
    });
    await client.send('Emulation.setTouchEmulationEnabled', {
      enabled: spec.mobile, maxTouchPoints: spec.mobile ? 5 : 1,
    });
    await client.send('Page.enable');
    await client.send('Page.navigate', { url: fileUrl(spec.query) });
    await sleep(4000);

    if (spec.pre) {
      await client.send('Runtime.evaluate', { expression: spec.pre, awaitPromise: true });
      await sleep(1200);
    }
    if (spec.post) {
      await client.send('Runtime.evaluate', { expression: spec.post, awaitPromise: true });
      await sleep(700);
    }

    const probe = await client.send('Runtime.evaluate', { expression: PROBE, returnByValue: true });
    console.log(spec.name + ' ' + String(probe.result.value));

    await capture(client, spec.name, null);
    await capture(client, spec.name + '-hdr', {
      x: 0, y: 0, width: spec.width, height: spec.hdr, scale: 2,
    });
    client.close();
  } finally {
    try { edge.kill(); } catch (err) { /* noop */ }
    await sleep(700);
  }
}

(async function main() {
  buildPage();
  const arg = process.argv[2];
  const names = arg ? arg.split(',') : ['desk1440', 'phone390'];
  for (const n of names) {
    const spec = SPECS[n];
    if (!spec) throw new Error('未知規格：' + n);
    await runSpec(spec);
  }
})().catch((err) => {
  console.error('截圖失敗：' + ((err && err.stack) || err));
  process.exit(1);
});
