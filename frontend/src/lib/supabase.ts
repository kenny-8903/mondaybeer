import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client for the Vite/React layer (frontend/).
 *
 * 單檔戰術板（repo 根目錄 index.html）本身不走 bundler，Supabase 由 CDN 載入，
 * 金鑰直接寫在 index.html 的 SUPABASE_URL / SUPABASE_ANON_KEY（US-146）。
 * 這個模組是給 frontend/ 的 React 層用：金鑰由根目錄 .env 的
 * VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY 於建置時注入（見 vite.config.ts
 * 的 loadEnv(mode, repoRoot, "VITE_")）。
 *
 * publishable / anon key 是公開金鑰，安全性由資料表 RLS 決定；
 * 切勿把 service_role / secret key 打包進前端。
 */
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;

export default supabase;
