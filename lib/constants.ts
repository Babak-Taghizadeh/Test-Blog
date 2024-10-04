export const API_ROUTES = {
    LOGIN_REQUEST: "https://test-blog-o64adshkb-babak-taghizadehs-projects.vercel.app/api/auth",
    BLOGS_FETCH: "/api/blogs",
    BLOG_FETCH: (id: string) => `/api/blogs/${id}`
}

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    BLOGS: "/blogs",
    BLOG: (id: number) => `/blogs/${id}`
}