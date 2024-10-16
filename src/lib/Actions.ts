"use server";

import { LoginProps, LoginResponse } from "@/types/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { API_ROUTES } from "./constants";

// LOGIN ACTION
export const RequestLogin = async (
  loginInfo: LoginProps
): Promise<LoginResponse | undefined> => {
  const token = uuidv4();
  try {
    const response = await fetch(API_ROUTES.LOGIN_REQUEST, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "Content-Type": "application/json" },
    });
    const authData = await response.json();
    if (response.status === 200) {
      cookies().set("token", token);
      return authData;
    }
    if (response.status === 401) {
      throw new Error(authData.message);
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message || "خطایی پیش آمده");
    } else {
      throw new Error("لطفا مجددا امتحان کنید");
    }
  }
};


// SIGNING OUT ACTION
export const signOut = () => {
  cookies().set("token", "", { expires: new Date(0) });
  redirect("/");
};
