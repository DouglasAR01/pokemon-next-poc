import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabaseClient = createClient<Database>(
  supabaseUrl ? supabaseUrl : "",
  supabaseAnonKey ? supabaseAnonKey : ""
);