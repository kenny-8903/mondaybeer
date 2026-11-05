#!/usr/bin/env node
/**
 * 本機預覽 dist/（零依賴靜態伺服器，只用於部署前檢查）
 *
 *   npm run preview            → http://localhost:4173
 *   PORT=5000 npm run preview  → 自訂埠號
 *
 * 注意：正式站仍由 Vercel 提供靜態檔案，這支腳本不參與部署。
 */
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const PORT = Number(process.env.PORT || 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

if (!existsSync(path.join(DIST, 'index.html'))) {
  console.error('✖ 找不到 dist/index.html，請先執行 npm run build');
  process.exit(1);
}

createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent((req.url || '/').split('?')[0]);
  } catch {
    res.writeHead(400).end('Bad Request');
    return;
  }
  if (pathname === '/' || pathname.endsWith('/')) pathname += 'index.html';

  const file = path.join(DIST, pathname);
  /* 防目錄穿越：解析後必須仍在 dist/ 內 */
  if (!file.startsWith(DIST + path.sep) || !existsSync(file) || !statSync(file).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('404 Not Found');
    return;
  }

  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`✔ 預覽 dist/：http://localhost:${PORT}`);
  console.log('  （Ctrl+C 結束）');
});
