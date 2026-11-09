/* 建立煙霧測試頁：index.html + harness.js 注入到 </body> 前，
   輸出到暫存資料夾（路徑不含空白／中文，避免 file:// URL 轉義問題） */
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const root = path.resolve(__dirname, '..', '..');
const src = path.join(root, 'index.html');
const harness = path.join(__dirname, 'harness.js');
const outDir = path.join(os.tmpdir(), 'mbsmoke');

fs.mkdirSync(outDir, { recursive: true });

const html = fs.readFileSync(src, 'utf8');
const code = fs.readFileSync(harness, 'utf8');
if (code.includes('</' + 'script>')) throw new Error('harness 內含 script 結束標籤');

const marker = '</body>';
const idx = html.lastIndexOf(marker);
if (idx === -1) throw new Error('找不到 </body>');

const out = html.slice(0, idx) + '<script>\n' + code + '\n</' + 'script>\n' + html.slice(idx);
fs.writeFileSync(path.join(outDir, 'index.html'), out, 'utf8');

/* 頁面若引用相對資源（隊徽圖），一併複製，避免 404 影響載入 */
fs.readdirSync(root).forEach(function (name) {
  if (/\.(jpe?g|png|svg|webp|ico)$/i.test(name)) {
    fs.copyFileSync(path.join(root, name), path.join(outDir, name));
  }
});

console.log('smoke page -> ' + path.join(outDir, 'index.html'));
