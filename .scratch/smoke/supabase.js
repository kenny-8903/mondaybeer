/* US-146 — Supabase 正式對接驗證（會真的寫入／刪除一列測試資料）

   為什麼需要這支腳本？
     只讀探測（GET）只能證明「資料表存在 + SELECT 政策放行」，
     但改名／批核／刪除實際走的是 UPDATE / DELETE；
     RLS 若沒開對應政策，App 只會在 console 印 warn 然後「靜默回退本機」，
     使用者看到的是「存好了」，但其實沒上雲端。這支腳本把四種操作實跑一次。

   用法（專案根目錄）：
     node .scratch/smoke/supabase.js

   安全性：金鑰直接從 index.html 的 SUPABASE_URL / SUPABASE_ANON_KEY 讀出，
   驗證的就是「出貨值」；測試列的名稱帶 SMOKE 前綴，結束時一律刪除。
*/
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..', '..');
const ENTRY = path.join(ROOT, 'index.html');

function pick(html, re, label) {
  const m = html.match(re);
  if (!m) throw new Error('index.html 找不到 ' + label);
  return m[1];
}

const html = fs.readFileSync(ENTRY, 'utf8');
const URL_BASE = pick(html, /const SUPABASE_URL\s*=\s*'([^']+)'/, 'SUPABASE_URL');
const KEY = pick(html, /const SUPABASE_ANON_KEY\s*=\s*'([^']+)'/, 'SUPABASE_ANON_KEY');
const TABLE = pick(html, /const SUPABASE_TABLE\s*=\s*'([^']+)'/, 'SUPABASE_TABLE');

const REST = URL_BASE.replace(/\/+$/, '') + '/rest/v1/' + TABLE;
const HEADERS = {
  apikey: KEY,
  Authorization: 'Bearer ' + KEY,
  'Content-Type': 'application/json'
};

const results = [];
function step(name, ok, detail) {
  results.push({ name, ok, detail: detail || '' });
  console.log((ok ? '✔ ' : '✖ ') + name + (detail ? ' — ' + detail : ''));
}

async function call(method, url, body, prefer) {
  const res = await fetch(url, {
    method,
    headers: prefer ? Object.assign({}, HEADERS, { Prefer: prefer }) : HEADERS,
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const text = await res.text();
  let data = null;
  if (text) {
    try { data = JSON.parse(text); } catch (err) { data = text; }
  }
  return { status: res.status, ok: res.ok, data };
}

function explain(err) {
  const msg = (err && (err.message || (err.data && err.data.message))) || String(err);
  if (msg.indexOf('42501') !== -1 || /row-level security/i.test(msg)) {
    return msg + '\n  → RLS 沒有對應政策。請到 Supabase SQL Editor 執行 index.html §1 註解裡的那段 SQL。';
  }
  if (/Invalid API key|401/.test(msg)) {
    return msg + '\n  → 金鑰無效或已被輪替，請同步更新 index.html 與 .env。';
  }
  return msg;
}

let insertedId = null;

(async function main() {
  console.log('Supabase 對接驗證');
  console.log('  URL    = ' + URL_BASE);
  console.log('  金鑰   = ' + KEY.slice(0, 18) + '…（' + KEY.length + ' chars）');
  console.log('  資料表 = ' + TABLE + '\n');

  if (URL_BASE.indexOf('YOUR_') !== -1 || KEY.indexOf('YOUR_') !== -1) {
    throw new Error('index.html 仍是 placeholder 金鑰，無法驗證');
  }

  /* 1. SELECT：資料表存在、可讀，順便記下目前筆數 */
  let before = null;
  try {
    const res = await call('GET', REST + '?select=id');
    if (!res.ok) throw res;
    before = Array.isArray(res.data) ? res.data.length : 0;
    step('SELECT 讀取', true, before + ' 筆');
  } catch (err) {
    step('SELECT 讀取', false, explain(err));
    throw new Error('讀不到資料表，後面不用驗了');
  }

  /* 2. INSERT：App 的 sbSave 走同一條路徑 */
  const name = 'SMOKE US-146 對接測試 ' + new Date().toISOString();
  try {
    const res = await call('POST', REST, {
      name: name,
      frames: [],
      meta: { app: 'smoke', status: 'approved', authorLabel: 'smoke' }
    }, 'return=representation');
    if (!res.ok) throw res;
    const row = Array.isArray(res.data) ? res.data[0] : res.data;
    if (!row || !row.id) throw new Error('INSERT 沒有回傳 id');
    insertedId = row.id;
    step('INSERT 寫入', true, 'id=' + row.id);
  } catch (err) {
    step('INSERT 寫入', false, explain(err));
    throw new Error('寫不進去，後面不用驗了');
  }

  /* 3. SELECT 單筆：確認剛才那列真的在資料庫裡 */
  try {
    const res = await call('GET', REST + '?select=id,name,meta&id=eq.' + insertedId);
    const row = Array.isArray(res.data) ? res.data[0] : null;
    const ok = res.ok && !!row && row.name === name;
    step('SELECT 單筆', ok, ok ? '名稱相符' : JSON.stringify(res.data));
  } catch (err) {
    step('SELECT 單筆', false, explain(err));
  }

  /* 4. UPDATE：改名＋批核狀態（store.rename / store.setStatus 走這條） */
  try {
    const renamed = name + ' · 已改名';
    const res = await call('PATCH', REST + '?id=eq.' + insertedId, {
      name: renamed,
      meta: { app: 'smoke', status: 'pending', authorLabel: 'smoke' },
      updated_at: new Date().toISOString()
    }, 'return=representation');
    const row = Array.isArray(res.data) ? res.data[0] : res.data;
    const ok = res.ok && !!row && row.name === renamed && row.meta && row.meta.status === 'pending';
    step('UPDATE 改名／批核', ok, ok ? 'meta.status=pending' : JSON.stringify(res.data));
  } catch (err) {
    step('UPDATE 改名／批核', false, explain(err));
  }

  /* 5. DELETE：教練刪除戰術走這條（同時也是本腳本的收拾） */
  try {
    const res = await call('DELETE', REST + '?id=eq.' + insertedId);
    const gone = res.ok || res.status === 204;
    if (gone) insertedId = null;
    step('DELETE 刪除', gone, 'HTTP ' + res.status);
  } catch (err) {
    step('DELETE 刪除', false, explain(err));
  }

  /* 6. 筆數回到原值：證明沒有留下垃圾資料 */
  try {
    const res = await call('GET', REST + '?select=id');
    const after = Array.isArray(res.data) ? res.data.length : -1;
    const ok = res.ok && after === before;
    step('筆數復原', ok, after + ' 筆（測試前 ' + before + '）');
  } catch (err) {
    step('筆數復原', false, explain(err));
  }
})()
  .catch((err) => {
    step('中斷', false, (err && (err.message || err)) || String(err));
  })
  .then(async () => {
    /* 任何一步爆掉都要把測試列清掉 */
    if (insertedId) {
      try {
        const res = await call('DELETE', REST + '?id=eq.' + insertedId);
        console.log((res.ok ? '✔ ' : '✖ ') + '清理殘留測試列 ' + insertedId);
      } catch (err) {
        console.log('✖ 清理殘留測試列失敗：' + insertedId + '（請手動刪除）');
      }
    }
    const failed = results.filter((r) => !r.ok);
    console.log('\n===== PASS=' + (results.length - failed.length) + ' FAIL=' + failed.length + ' =====');
    if (failed.length) {
      failed.forEach((r) => console.log('FAIL ' + r.name + ' [' + r.detail + ']'));
    }
    process.exit(failed.length ? 1 : 0);
  });
