import type { AuthError, PostgrestError } from "@supabase/supabase-js";
import type { ProductInterface } from "./productsTypes";
import type { UserLoginInterface } from "./usersTypes";

export interface ResponseInterfaceProducts {
  ok: boolean;
  data: ProductInterface[] | null;
  error: PostgrestError | null;
}

export interface ResponseInterfaceUsers {
  ok: boolean;
  data: any | null;
  error: AuthError | null;
}
