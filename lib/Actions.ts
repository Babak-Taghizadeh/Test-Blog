"use server";

import { BlogProps } from "@/types/types";
import { API_ROUTES } from "./constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getBlogs = async (): Promise<BlogProps[]> => {
  try {
    const response = await fetch(API_ROUTES.BLOGS_FETCH);
    const blogsData = await response.json();
    return blogsData
  } catch (error) {
    console.error("Error fetching blogs:", error);
    if (error instanceof Error) {
      throw new Error(error.message || "خطایی پیش آمده");
    } else {
      throw new Error("لطفا مجددا امتحان کنید");
    }
  }
};

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
    console.error(`Failed to fetch blog with ID ${id}:`, error);
    if (error instanceof Error) {
      throw new Error(error.message || "خطایی پیش آمده");
    } else {
      throw new Error("لطفا مجددا امتحان کنید");
    }
  }
};

export const signOut = () => {
  cookies().set("token", "", { expires: new Date(0) });
  redirect("/");
};
