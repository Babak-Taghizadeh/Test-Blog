"use server";

import { BlogProps } from "@/types/types";
import axios, { AxiosResponse } from "axios";
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
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
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
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const signOut = () => {
  cookies().set("token", "", {expires: new Date(0)})
  redirect("/")
};