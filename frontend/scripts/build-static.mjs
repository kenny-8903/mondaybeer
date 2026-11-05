#!/usr/bin/env node
/**
 * MondayBeer 戰術 — 靜態站打包（frontend/ 專用版）
 *
 * 用途：Vercel 專案的 Root Directory 設為 `frontend/` 時使用。
 *   Vercel 在該模式下「無法存取 root directory 以外的檔案，也不能用 .. 往上跳」，
 *   所以來源不是 ../index.html，而是 frontend/site/（由根目錄 `npm run sync:site` 產生）。
 *
 * 用法（在 frontend/ 目錄下）：
 *   npm run build              → 產生 frontend/dist/
 *   node scripts/build-static.mjs
 *
 * 打包流程：
 *   1. 把 frontend/site/index.html 原封不動複製到 frontend/dist/
 *   2. 掃出其中所有 ./ 相對資源（src / href），逐一複製到 frontend/dist/ 同樣路徑
 *   3. 任一被引用的資源遺失 → exit code 1（讓 Vercel build 失敗，避免上線缺圖）
 *
 * 註：本檔刻意與根目錄 scripts/build-static.mjs 保持「各自獨立」，
 *     因為 Vercel 建置時無法 import 上層目錄的模組。
 */
import { copyFile, mkdir, readFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND = path.resolve(HERE, '..');
const REPO_ROOT = path.resolve(FRONTEND, '..');
const SITE = process.env.SITE_DIR ? path.resolve(process.env.SITE_DIR) : path.join(FRONTEND, 'site');
const DIST = process.env.DIST_DIR ? path.resolve(process.env.DIST_DIR) : path.join(FRONTEND, 'dist');
const ENTRY = 'index.html';

/* 與 scripts/build-static.mjs / scripts/sync-site.mjs 相同的解析規則 */
const REF_RE = /(?:src|href)\s*=\s*"([^"]+)"/g;
const SKIP_PREFIX = ['http://', 'https://', '//', 'data:', 'blob:', '#', 'mailto:', 'tel:'];

function toLocalPath(ref) {
  if (!ref || SKIP_PREFIX.some((p) => ref.startsWith(p))) return null;
  if (!ref.startsWith('./')) return null;
  const clean = ref.slice(2).split('#')[0].split('?')[0];
  if (!clean) return null;
  try {
    return decodeURIComponent(clean);
  } catch {
    return clean;
  }
}

/* 只在本機（看得到根目錄 index.html）時比對來源是否已過期；Vercel 上會自動略過 */
async function warnIfStale(html) {
  const rootEntry = path.join(REPO_ROOT, ENTRY);
  if (!existsSync(rootEntry)) return;
  const metaPath = path.join(SITE, 'SYNCED.json');
  if (!existsSync(metaPath)) return;
  try {
    const meta = JSON.parse(await readFile(metaPath, 'utf8'));
    const currentHash = createHash('sha256').update(html).digest('hex');
    if (meta.sourceHash && meta.sourceHash !== currentHash) {
      console.warn(
        '⚠ 根目錄 index.html 已改動，但 frontend/site/ 還是舊版快照。\n' +
          '  請在專案根目錄執行：npm run sync:site（然後重新 commit / push）'
      );
    }
  } catch {
    /* 快照資訊損毀時不影響打包 */
  }
}

async function main() {
  const entryPath = path.join(SITE, ENTRY);
  if (!existsSync(entryPath)) {
    throw new Error(
      `找不到 ${path.relative(REPO_ROOT, entryPath)}。\n` +
        '  請先在專案根目錄執行：npm run sync:site（會把 index.html 與隊徽複製到 frontend/site/）'
    );
  }

  const html = await readFile(entryPath, 'utf8');
  await warnIfStale(html);

  const assets = new Set();
  for (const match of html.matchAll(REF_RE)) {
    const rel = toLocalPath(match[1]);
    if (rel) assets.add(rel);
  }

  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });
  await copyFile(entryPath, path.join(DIST, ENTRY));
  console.log(`✔ frontend/site/${ENTRY} → frontend/dist/${ENTRY}`);

  const missing = [];
  for (const rel of [...assets].sort()) {
    const from = path.join(SITE, rel);
    if (!existsSync(from)) {
      missing.push(rel);
      console.error(`✖ 缺少資源 ${rel}（index.html 有引用）`);
      continue;
    }
    const to = path.join(DIST, rel);
    await mkdir(path.dirname(to), { recursive: true });
    await copyFile(from, to);
    console.log(`✔ frontend/site/${rel} → frontend/dist/${rel}`);
  }

  if (missing.length) {
    console.error(`\n✖ 打包中止：${missing.length} 個被引用的本地資源不存在`);
    process.exitCode = 1;
    return;
  }

  console.log(`\n✔ frontend/dist/ 完成：1 個 HTML ＋ ${assets.size} 個資源`);
}

main().catch((err) => {
  console.error('✖ build-static 失敗：', err && err.message ? err.message : err);
  process.exitCode = 1;
});
