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
    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    const authData = await response.json();
    cookies().set("token", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });
    return authData;
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
