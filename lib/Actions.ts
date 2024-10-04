"use server";

import { BlogProps } from "@/types/types";
import axios, { AxiosError, AxiosResponse } from "axios";
import { API_ROUTES } from "./constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getBlogs = async (): Promise<BlogProps[]> => {
  try {
    const response: AxiosResponse<BlogProps[]> = await axios.get(
      API_ROUTES.BLOGS_FETCH
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error || "خطایی پیش آمده");
    } else {
      throw new Error("لطفا مجددا امتحان کنید");
    }
  }
};

export const getBlog = async ({ queryKey }: { queryKey: string[] }): Promise<BlogProps> => {
  const id = queryKey[1];
  try {
    const response: AxiosResponse<BlogProps> = await axios.get(
      API_ROUTES.BLOG_FETCH(id)
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch blog with ID ${id}:`, error);
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error || "خطایی پیش آمده");
    } else {
      throw new Error("لطفا مجددا امتحان کنید");
    }
  }
};

export const signOut = () => {
  cookies().set("token", "", {expires: new Date(0)})
  redirect("/")
};