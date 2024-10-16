"use server";

import { LoginProps, LoginResponse } from "@/types/types";
import { BlogProps } from "@/types/types";
import { API_ROUTES } from "./constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// LOGIN ACTION
export const RequestLogin = async(loginInfo: LoginProps): Promise<LoginResponse> => {
    try {
        const response = await fetch(API_ROUTES.LOGIN_REQUEST, {
          method: "POST",
          body: JSON.stringify(loginInfo),
          headers: { "Content-Type": "application/json" },
        });
        return response.json();
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message || "خطایی پیش آمده");
        } else {
          throw new Error("لطفا مجددا امتحان کنید");
        }
      }
}

// FETCHING ALL BLOGS ACTION
export const getBlogs = async (): Promise<BlogProps[]> => {
  try {
    const response = await fetch(API_ROUTES.BLOGS_FETCH);
    const blogsData = await response.json();
    return blogsData
  } catch (error) {
    console.error("عدم دسترسی به بلاگ ها", error);
    if (error instanceof Error) {
      throw new Error(error.message || "خطایی پیش آمده");
    } else {
      throw new Error("لطفا مجددا امتحان کنید");
    }
  }
};

// FETCHING ONE BLOG WITH ID ACTION
export const getBlog = async ({
  queryKey,
}: {
  queryKey: string[];
}): Promise<BlogProps> => {
  const id = queryKey[1];
  try {
    const response = await fetch(API_ROUTES.BLOG_FETCH(id));
    const blogData: BlogProps = await response.json();
    return blogData;
  } catch (error) {
    console.error(`عدم دسترسی به بلاگ شماره ${id}:`, error);
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
