import { BlogProps } from "@/types/types";
import { API_ROUTES } from "./constants";

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