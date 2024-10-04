import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import { BlogProps } from "@/types/types";
import path from 'path';

const getBlogs = async(): Promise<BlogProps[]> => {
    const jsonData = await fs.readFile(path.join(process.cwd(), 'src/app/api/data/blog.json'), 'utf-8');
    const blogs = JSON.parse(jsonData);
    return blogs;
}

export const GET = async() => {
    try {
        const blogs: BlogProps[] = await getBlogs();
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
