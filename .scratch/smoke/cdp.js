/* 極簡 CDP 驅動（只用 Node 內建 fetch + 全域 WebSocket，不需 puppeteer）
   用途：Edge 的 --window-size 在 Windows 上會被夾到最小寬度 ~500px，
        這裡改用 DevTools 協定 Emulation.setDeviceMetricsOverride，
        才能真的用 390×844 / 375×667 這類手機尺寸跑煙霧測試。

   用法：
     node .scratch/smoke/cdp.js                 → desktop 1440×900（?full=1）+ mobile 390×844
     node .scratch/smoke/cdp.js 390x844         → 只跑指定尺寸（多個用逗號分隔）
*/
const { spawn } = require('node:child_process');
const path = require('node:path');
const os = require('node:os');
const fs = require('node:fs');

const EDGE = process.env.EDGE_BIN ||
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = Number(process.env.CDP_PORT || 9335);
const PAGE = path.join(os.tmpdir(), 'mbsmoke', 'index.html');
const PROFILE = path.join(os.tmpdir(), 'mbsmoke-profile');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SPECS = {
  '1440x900': { width: 1440, height: 900, mobile: false, query: '?full=1' },
  '1184x820': { width: 1184, height: 820, mobile: false, query: '?full=1' },
  '900x900': { width: 900, height: 900, mobile: false, query: '?full=1' },
  '768x1024': { width: 768, height: 1024, mobile: false, query: '?full=1' },
  '390x844': { width: 390, height: 844, mobile: true, query: '' },
  '375x667': { width: 375, height: 667, mobile: true, query: '' },
  '360x740': { width: 360, height: 740, mobile: true, query: '' },
  gif: { width: 390, height: 844, mobile: true, query: '#gif' },
};

function fileUrl(query) {
  let p = PAGE.replace(/\\/g, '/');
  if (!p.startsWith('/')) p = '/' + p;
  return 'file://' + p + (query || '');
}

async function waitPort(timeoutMs) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    try {
      const res = await fetch('http://127.0.0.1:' + PORT + '/json/version');
      if (res.ok) return true;
    } catch (err) { /* 還沒起來 */ }
    await sleep(250);
  }
  throw new Error('CDP 埠 ' + PORT + ' 沒有回應');
}

async function pageTarget() {
  const res = await fetch('http://127.0.0.1:' + PORT + '/json/list');
  const list = await res.json();
  const page = list.filter((t) => t.type === 'page')[0];
  if (!page) throw new Error('找不到 page target');
  return page.webSocketDebuggerUrl;
}

function connect(url) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
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
        close() { try { ws.close(); } catch (err) { /* noop */ } }
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

async function runSpec(spec) {
  const edge = spawn(EDGE, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--remote-debugging-port=' + PORT,
    '--user-data-dir=' + PROFILE,
    'about:blank',
  ], { stdio: 'ignore' });

  try {
    await waitPort(20000);
    const client = await connect(await pageTarget());

    await client.send('Emulation.setDeviceMetricsOverride', {
      width: spec.width,
      height: spec.height,
      deviceScaleFactor: 2,
      mobile: spec.mobile,
      screenWidth: spec.width,
      screenHeight: spec.height,
    });
    await client.send('Emulation.setTouchEmulationEnabled', {
      enabled: spec.mobile,
      maxTouchPoints: spec.mobile ? 5 : 1,
    });
    await client.send('Page.enable');
    await client.send('Page.navigate', { url: fileUrl(spec.query) });

    let text = '';
    const t0 = Date.now();
    while (Date.now() - t0 < 90000) {
      await sleep(800);
      const out = await client.send('Runtime.evaluate', {
        expression: "(()=>{const p=document.getElementById('SMOKE');return p?p.textContent:''})()",
        returnByValue: true,
      });
      text = String((out && out.result && out.result.value) || '');
      if (text) break;
    }
    const geo = (text.match(/INFO viewport=([\d]+x[\d]+)/) || [])[1] ||
      (spec.width + 'x' + spec.height);
    client.close();
    return { text: text || 'NO_SMOKE', geo: geo };
  } finally {
    try { edge.kill(); } catch (err) { /* noop */ }
    await sleep(600);
  }
}

(async function main() {
  if (!fs.existsSync(PAGE)) throw new Error('先跑 node .scratch/smoke/build.js');
  const arg = process.argv[2];
  const names = arg ? arg.split(',') : ['1440x900', '390x844'];
  let failed = 0;
  for (const name of names) {
    const spec = SPECS[name];
    if (!spec) throw new Error('未知尺寸：' + name);
    const out = await runSpec(spec);
    const passes = (out.text.match(/(?<!['"])PASS /g) || []).length;
    const fails = (out.text.match(/(?<!['"])FAIL /g) || []).length;
    console.log('\n===== ' + name + ' (' + out.geo + ') PASS=' + passes + ' FAIL=' + fails + ' =====');
    console.log(out.text);
    if (out.text.indexOf('FAIL ') !== -1 || out.text === 'NO_SMOKE') failed++;
  }
  process.exit(failed ? 1 : 0);
})().catch((err) => {
  console.error('CDP 測試失敗：' + ((err && err.stack) || err));
  process.exit(2);
});
