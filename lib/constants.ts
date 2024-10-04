export const API_ROUTES = {
    LOGIN_REQUEST: "/api/auth",
    BLOGS_FETCH: "https://test-blog-eight-xi.vercel.app//api/data",
    BLOG_FETCH: (id: string) => `https://test-blog-eight-xi.vercel.app//api/data/${id}`
}

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    BLOGS: "/blogs",
    BLOG: (id: number) => `/blogs/${id}`
}