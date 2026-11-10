-- ═══════════════════════════════════════════════════════════════════════════
-- US-146 — MondayBeer 戰術 × Supabase 正式對接：tactics 資料表遷移
--
-- 為什麼要跑這段？
--   2026-11 實測正式專案的 public.tactics 只有 4 個欄位：
--     id uuid / name text / steps <NOT NULL> / created_at timestamptz
--   但 index.html §3 的 store（sbSave / sbList / sbRename / sbSetStatus）
--   需要的是 frames(jsonb) / meta(jsonb) / updated_at(timestamptz)，
--   少了這 3 欄 → 寫入與列表都會被 PostgREST 打回（column ... does not exist），
--   App 只會在 console 印 warn 並「靜默回退本機」，看起來像存好了但其實沒上雲端。
--
-- 執行方式：Supabase Dashboard → SQL Editor → 貼上 → Run
-- ✅ 進度：2026-11-10 已於正式專案執行成功（Success）；之後重跑 cdp.js cloud 與
--    supabase.js 皆全綠（cloud 6/6、cloudwrite 13/13、supabase.js 6/6）。
--    若換新專案或誤刪資料表，重跑本檔即可恢復同樣結構。
-- 資料現況：遷移前為 0 筆（可安全重建）。若之後已有正式資料，請改用檔案最下方的 Alternate。
-- ═══════════════════════════════════════════════════════════════════════════

begin;

-- 舊表是早期實驗留下的空表（0 筆），直接重建以對齊 App 的介面
drop table if exists public.tactics;

create table public.tactics (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  frames     jsonb not null default '[]'::jsonb,   -- 逐步畫面：{ name, cue, desc, objects[] }
  meta       jsonb not null default '{}'::jsonb,   -- steps / status / authorLabel / author / defense / savedAt …
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 手冊清單固定 order by updated_at desc limit 100
create index if not exists tactics_updated_at_idx
  on public.tactics (updated_at desc);

alter table public.tactics enable row level security;

-- ⚠ 注意：以下 4 條是「任何人拿到網頁都能讀／寫／改／刪」的公開政策。
--   App 目前沒有 Supabase Auth（FR-119 待做），教練身分只是前端暗號（C-102／C-119），
--   所以雲端權限只能先全開。要收緊時請改走 Supabase Auth + coach role，
--   或把 delete / update 收進 Edge Function 驗教練暗號。
create policy "public read"   on public.tactics for select using (true);
create policy "public write"  on public.tactics for insert with check (true);
create policy "public update" on public.tactics for update using (true);
create policy "public delete" on public.tactics for delete using (true);

commit;

-- ── 驗證（可選）：跑完後這行應該回傳 0 ─────────────────────────────────────
-- select count(*) from public.tactics;


-- ═══════════════════════════════════════════════════════════════════════════
-- Alternate（保留舊資料用；只有在 tactics 已經有不能刪的資料時才用這段）
--
-- begin;
-- alter table public.tactics add column if not exists frames     jsonb       not null default '[]'::jsonb;
-- alter table public.tactics add column if not exists meta       jsonb       not null default '{}'::jsonb;
-- alter table public.tactics add column if not exists updated_at timestamptz not null default now();
-- -- App 插入時不寫 steps（舊欄位 NOT NULL 會擋下），所以放寬：
-- alter table public.tactics alter column steps drop not null;
-- alter table public.tactics enable row level security;
-- create policy "public read"   on public.tactics for select using (true);
-- create policy "public write"  on public.tactics for insert with check (true);
-- create policy "public update" on public.tactics for update using (true);
-- create policy "public delete" on public.tactics for delete using (true);
-- commit;
-- ═══════════════════════════════════════════════════════════════════════════
