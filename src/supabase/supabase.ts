import { createClient } from "@supabase/supabase-js";

//With this variable, the devs can use supabase
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);