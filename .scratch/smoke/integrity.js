/* 靜態檢查：CSS 大括號平衡、inline script 語法、亂碼字樣、index.html ↔ dist 一致性 */
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..', '..');
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
let bad = 0;

const report = (name, pass, extra) => {
  console.log((pass ? 'PASS ' : 'FAIL ') + name + (extra ? ' [' + extra + ']' : ''));
  if (!pass) bad++;
};

/* 1. 亂碼／字型替換災難字樣 */
const junk = /functfon|dfsplay|rfght|alfgn|margfn|wfdth|posftfon/g;
const junkHits = src.match(junk) || [];
report('integrity.noCorruption', junkHits.length === 0, junkHits.join(',') || 'clean');

/* 2. CSS 大括號平衡（整份 style 區塊） */
const styles = [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n');
const open = (styles.match(/\{/g) || []).length;
const close = (styles.match(/\}/g) || []).length;
report('integrity.cssBraces', open === close, open + '/' + close);

/* 3. inline script 語法（node --check） */
const dir = path.join(os.tmpdir(), 'mbsmoke');
fs.mkdirSync(dir, { recursive: true });
const scripts = [...src.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter((m) => !/\bsrc\s*=/.test(m[1]))
  .map((m) => m[2])
  .filter((code) => code.trim().length);
scripts.forEach((code, i) => {
  const file = path.join(dir, 'inline-' + i + '.js');
  fs.writeFileSync(file, code, 'utf8');
  let ok = true;
  let msg = '';
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
  } catch (err) {
    ok = false;
    msg = String((err && err.stderr) || err).slice(0, 400);
  }
  report('integrity.script' + i, ok, ok ? 'ok · ' + code.length + ' chars' : msg);
});

/* 4. index.html ↔ dist/index.html */
const sha = (buf) => crypto.createHash('sha256').update(buf).digest('hex').toUpperCase();
const distPath = path.join(root, 'dist', 'index.html');
if (fs.existsSync(distPath)) {
  const a = sha(fs.readFileSync(path.join(root, 'index.html')));
  const b = sha(fs.readFileSync(distPath));
  report('integrity.distSynced', a === b, a.slice(0, 12) + ' vs ' + b.slice(0, 12));
} else {
  report('integrity.distSynced', false, 'dist/index.html 不存在');
}

console.log(bad ? '\n' + bad + ' 項失敗' : '\n全部通過');
process.exit(bad ? 1 : 0);
