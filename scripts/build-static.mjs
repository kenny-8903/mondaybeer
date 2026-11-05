#!/usr/bin/env node
/**
 * MondayBeer 戰術 — 靜態站打包
 *
 * 這個專案是「單檔 App」：index.html 內含全部 CSS / JS，只外掛一張隊徽 jpeg。
 * 所以打包不需要 bundler，只要：
 *   1. 把 index.html 原封不動複製到 dist/
 *   2. 掃出 index.html 內所有 ./ 相對資源（src / href），逐一複製到 dist/ 同樣路徑
 *
 * 用法：
 *   npm run build          → 產生 dist/
 *   node scripts/build-static.mjs
 *
 * 找不到被引用的本地資源時會以 exit code 1 結束，讓 Vercel build 直接失敗（避免上線缺圖）。
 */
import { copyFile, mkdir, readFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const ENTRY = 'index.html';

/* index.html 只用雙引號屬性，且本地資源一律寫成 "./xxx" */
const REF_RE = /(?:src|href)\s*=\s*"([^"]+)"/g;
const SKIP_PREFIX = ['http://', 'https://', '//', 'data:', 'blob:', '#', 'mailto:', 'tel:'];

/* 把 "./WhatsApp%20Image%20....jpeg" 轉成檔案系統路徑；外部連結回傳 null */
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

async function main() {
  const entryPath = path.join(ROOT, ENTRY);
  if (!existsSync(entryPath)) {
    throw new Error(`找不到進入點 ${ENTRY}（預期在專案根目錄）`);
  }

  const html = await readFile(entryPath, 'utf8');

  /* 用 Set 去重：同一張隊徽會被 splash 與頁首各引用一次（其中一次是 URL-encoded） */
  const assets = new Set();
  for (const match of html.matchAll(REF_RE)) {
    const rel = toLocalPath(match[1]);
    if (rel) assets.add(rel);
  }

  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });
  await copyFile(entryPath, path.join(DIST, ENTRY));
  console.log(`✔ ${ENTRY} → dist/${ENTRY}`);

  const missing = [];
  for (const rel of [...assets].sort()) {
    const from = path.join(ROOT, rel);
    if (!existsSync(from)) {
      missing.push(rel);
      console.error(`✖ 缺少資源 ${rel}（index.html 有引用）`);
      continue;
    }
    const to = path.join(DIST, rel);
    await mkdir(path.dirname(to), { recursive: true });
    await copyFile(from, to);
    console.log(`✔ ${rel} → dist/${rel}`);
  }

  if (missing.length) {
    console.error(`\n✖ 打包中止：${missing.length} 個被引用的本地資源不存在`);
    process.exitCode = 1;
    return;
  }

  console.log(`\n✔ dist/ 完成：1 個 HTML ＋ ${assets.size} 個資源`);
}

main().catch((err) => {
  console.error('✖ build-static 失敗：', err && err.message ? err.message : err);
  process.exitCode = 1;
});
