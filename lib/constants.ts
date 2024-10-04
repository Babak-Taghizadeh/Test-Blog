export const API_ROUTES = {
    LOGIN_REQUEST: "/api/auth",
    BLOGS_FETCH: "/api/blogs",
    BLOG_FETCH: (id: string) => `/api/blogs/${id}`
}

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    BLOGS: "/blogs",
    BLOG: (id: number) => `/blogs/${id}`
}