export const API_ROUTES = {
    LOGIN_REQUEST: "/api/auth",
    BLOGS_FETCH: "https://test-blog-o64adshkb-babak-taghizadehs-projects.vercel.app/api/blogs",
    BLOG_FETCH: (id: string) => `https://test-blog-o64adshkb-babak-taghizadehs-projects.vercel.app/api/blogs/${id}`
}

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    BLOGS: "/blogs",
    BLOG: (id: number) => `/blogs/${id}`
}