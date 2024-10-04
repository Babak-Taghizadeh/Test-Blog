import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { BlogProps } from "@/types/types";

const getBlogs = async (): Promise<BlogProps[]> => {
  const jsonData = await fs.readFile(
    process.cwd() + "api/blogs/blog.json",
    "utf-8"
  );
  return JSON.parse(jsonData);
};

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);
  const blogs: BlogProps[] = await getBlogs();
  const isBlog = blogs.find((blog) => blog.id === id);
  if (isBlog) {
    return NextResponse.json(isBlog);
  }
return NextResponse.json({ error: "بلاگ مورد نظر یافت نشد" }, { status: 404 });
};
