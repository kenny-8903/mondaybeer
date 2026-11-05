#!/usr/bin/env node
/**
 * MondayBeer 戰術 — 同步站台來源檔到 frontend/site/
 *
 * 為什麼需要這支腳本？
 *   Vercel 的 Root Directory 若設成 `frontend/`，官方文件明確寫道：
 *   「Your app will not be able to access files outside of that directory.
 *     You also cannot use `..` to move up a level.」
 *   因此 frontend/ 內的打包腳本讀不到根目錄的 index.html 與隊徽 jpeg。
 *   解法：在 frontend/site/ 放一份「可直接建置」的來源快照，由本腳本從根目錄產生。
 *
 * 用法（改完根目錄 index.html 或換圖之後一定要跑一次）：
 *   npm run sync:site
 *
 * 產出：
 *   frontend/site/index.html          ← 根目錄 index.html 原封不動複製
 *   frontend/site/<被引用的資源>       ← 例如隊徽 jpeg
 *   frontend/site/SYNCED.json         ← 來源雜湊 + 時間戳，供打包時偵測是否過期
 */
import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEST = path.join(ROOT, 'frontend', 'site');
const ENTRY = 'index.html';

/* 與 scripts/build-static.mjs 一致的解析規則（index.html 只用雙引號屬性、本地資源寫成 "./xxx"） */
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

async function main() {
  const entryPath = path.join(ROOT, ENTRY);
  if (!existsSync(entryPath)) {
    throw new Error(`找不到進入點 ${ENTRY}（預期在專案根目錄）`);
  }

  const html = await readFile(entryPath, 'utf8');

  const assets = new Set();
  for (const match of html.matchAll(REF_RE)) {
    const rel = toLocalPath(match[1]);
    if (rel) assets.add(rel);
  }

  await rm(DEST, { recursive: true, force: true });
  await mkdir(DEST, { recursive: true });

  await copyFile(entryPath, path.join(DEST, ENTRY));
  console.log(`✔ ${ENTRY} → frontend/site/${ENTRY}`);

  const missing = [];
  for (const rel of [...assets].sort()) {
    const from = path.join(ROOT, rel);
    if (!existsSync(from)) {
      missing.push(rel);
      console.error(`✖ 缺少資源 ${rel}（index.html 有引用）`);
      continue;
    }
    const to = path.join(DEST, rel);
    await mkdir(path.dirname(to), { recursive: true });
    await copyFile(from, to);
    console.log(`✔ ${rel} → frontend/site/${rel}`);
  }

  if (missing.length) {
    console.error(`\n✖ 同步中止：${missing.length} 個被引用的本地資源不存在`);
    process.exitCode = 1;
    return;
  }

  const sourceHash = createHash('sha256').update(html).digest('hex');
  await writeFile(
    path.join(DEST, 'SYNCED.json'),
    JSON.stringify(
      {
        source: 'index.html (repo root)',
        sourceHash,
        assetCount: assets.size,
        syncedAt: new Date().toISOString()
      },
      null,
      2
    ) + '\n',
    'utf8'
  );

  console.log(`\n✔ frontend/site/ 同步完成：1 個 HTML ＋ ${assets.size} 個資源`);
  console.log(`  sourceHash = ${sourceHash.slice(0, 12)}…（frontend/scripts/build-static.mjs 會比對是否過期）`);
}

main().catch((err) => {
  console.error('✖ sync-site 失敗：', err && err.message ? err.message : err);
  process.exitCode = 1;
});
