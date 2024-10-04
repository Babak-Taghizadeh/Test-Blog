import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import { BlogProps } from "@/types/types";
import { join } from 'path';

const getBlogs = async(): Promise<BlogProps[]> => {
    const jsonData = await fs.readFile(process.cwd() + '/src/app/api/blogs/blog.json', 'utf-8');
    return JSON.parse(jsonData);
} 

export const GET = async() => {
    try {
        const blogs: BlogProps[] = await getBlogs();
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
