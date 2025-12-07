import type { ResponseInterfaceProducts } from "../../types/functionsTypes";
import { supabase } from "../supabase";

//Function for getProduct from supabase
export const getProducts = async (): Promise<ResponseInterfaceProducts> => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    return {
      ok: false,
      data: null,
      error,
    };
  } else {
    return {
      ok: true,
      data,
      error: null,
    };
  }
};
