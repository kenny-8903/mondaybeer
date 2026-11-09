/* 從 Edge --dump-dom 的輸出裡挖出煙霧測試報告 */
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const file = process.argv[2] || path.join(os.tmpdir(), 'mbsmoke', 'dom.html');
const html = fs.readFileSync(file, 'utf8');

const passes = (html.match(/(?<!['"])PASS /g) || []).length;
const fails = (html.match(/(?<!['"])FAIL /g) || []).length;

const start = html.indexOf('<pre id="SMOKE">');
if (start === -1) {
  console.log('NO <pre id="SMOKE"> — harness 可能沒跑完');
  console.log('sanity: PASS=' + passes + ' FAIL=' + fails +
    ' HARNESS_ERROR=' + html.includes('HARNESS_ERROR'));
  process.exit(2);
}
const end = html.indexOf('</pre>', start);
const body = html.slice(html.indexOf('>', start) + 1, end)
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
console.log(body);
process.exit(fails > 0 ? 1 : 0);
