export const API_ROUTES = {
    LOGIN_REQUEST: "/api/auth",
    BLOGS_FETCH: "http://localhost:3000/api/blogs",
    BLOG_FETCH: (id: string) => `http://localhost:3000/api/blogs/${id}`
}

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    BLOGS: "/blogs",
    BLOG: (id: number) => `/blogs/${id}`
}