import type { ResponseInterfaceUsers } from "../../types/functionsTypes";
import type {
  UserLoginInterface,
  UserRegisterInterface,
} from "../../types/usersTypes";
import { supabase } from "../supabase";

export const signInUser = async ({
  email,
  password,
}: UserLoginInterface): Promise<ResponseInterfaceUsers> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

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

export const registerUser = async ({
  email,
  password,
}: UserRegisterInterface) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
};
