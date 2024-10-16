import { BlogProps } from "@/types/types";
import { API_ROUTES } from "./constants";

export const getBlogs = async (): Promise<BlogProps[]> => {
  try {
    const response = await fetch(API_ROUTES.BLOGS_FETCH);
    const blogsData: BlogProps[] = await response.json();
    return blogsData;
  } catch (error) {
    console.error("عدم دسترسی به بلاگ ها", error);
    if (error instanceof Error) {
      throw new Error(error.message || "خطایی پیش آمده");
    } else {
      throw new Error("لطفا مجددا امتحان کنید");
    }
  }
};
