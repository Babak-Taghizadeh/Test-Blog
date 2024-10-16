export const API_ROUTES = {
    LOGIN_REQUEST: "https://dummy-blog10.vercel.app/api/auth",
    BLOGS_FETCH: "https://dummy-blog10.vercel.app/api/data",
    BLOG_FETCH: (id: string) => `https://dummy-blog10.vercel.app/api/data/${id}`
}

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    BLOGS: "/blogs",
    BLOG: (id: number) => `/blogs/${id}`
}