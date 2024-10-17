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
  try {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const authData = await response.json();
    const token = uuidv4();
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
      sameSite: "lax",
    });
    return authData;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw error
    } else {
      throw new Error('مجددا تلاش کنید');
    }
  }
};

// SIGNING OUT ACTION
export const signOut = () => {
  cookies().set("token", "", { expires: new Date(0) });
  redirect("/");
};
