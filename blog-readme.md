# Blog Test Project

## Project Overview

This project is a simple blog with six posts. Users must login to access the posts section. After a successful login, users will be redirected to the posts page, where six blog posts will be fetched and displayed using `react-query`. Additionally, users can click on any post to view its details.

## Project Requirements

### 1. Login
- The login page should include the following fields:
  - **Username**
  - **Password**
- After a successful login, a test token should be generated and stored in cookies.
- Users will be redirected to the posts page upon successful login.
- Without the token, users cannot access the blog posts or the post details pages.

### 2. Blog Posts Page
- The page should display six blog posts fetched using `react-query`.
- Each post should display the title and a summary of the content.
- Each post should be clickable, allowing the user to view detailed information about the post.
- Users who are not logged in (i.e., do not have the token in their cookies) should not be able to access the posts or post details pages. 

### 3. Post Details Page
- Clicking on any post should navigate the user to the post details page.
- The full content of the selected post should be shown on this page.
- The details for each post should also be fetched using `react-query`.

### 4. API
- The blog posts and post details should be fetched via APIs built using Next.js API routes.
- API requests should only be successful if a valid token is provided in the cookies. Users without a valid token should receive an authorization error.

### 5. Styling
- Use **Tailwind CSS** for styling the application.

### 6. SEO
- SEO best practices must be followed in this project. Ensure that the pages are optimized for search engines, including proper meta tags, titles, and semantic HTML.

## Submission Guidelines

- Once the project is completed, please upload it to **GitHub**.
- Deploy the project on **Vercel**.
- Share both the **GitHub repository link** and the **Vercel deployment link** by emailing them to **r.jabbari@rahkargostaran.com**.

