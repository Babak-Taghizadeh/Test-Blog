"use client";

import Image from "next/image";
import { getBlogs } from "../../lib/Actions";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ROUTES } from "../../lib/constants";
import LoadingSpinner from "./ui/LoadingSpinner";

const Blogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
  });


  if (isLoading) {
    return <div className="h-dvh flex items-center justify-center"><LoadingSpinner /></div>;
  }

  if (error && error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="pt-28 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 lg:gap-24 place-items-center">
      {data?.map((blog) => {
        const sanitizedExcerpt = DOMPurify.sanitize(blog.excerpt.rendered);
        const cleanedExcerpt = sanitizedExcerpt.slice(0, -9);

        const date = new Date(blog.date);
        const formattedDate = date.toLocaleDateString("fa-IR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return (
          <article
            className="h-[480px] w-[300px] bg-primary flex flex-col rounded-lg shadow-lg shadow-gray-300"
            key={blog.id}
          >
            <div className="relative w-full h-52">
              <Image
                className="rounded-t-lg"
                src={blog.featured_media_object.source_url}
                fill={true} // Makes the image fill the container
                objectFit="cover" // Ensures the image covers the entire area
                priority
                alt={blog.featured_media_object.title}
              />
            </div>
            <div className="flex flex-col p-3 gap-2 min-h-[calc(100%-12rem)]">
              {blog.categories?.map((category) => (
                <span
                  key={category.id}
                  className="bg-icon w-fit rounded-2xl px-3 py-[2px] text-sm text-primary"
                >
                  {category.name}
                </span>
              ))}
              <h1 className="font-bold text-balance">{blog.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: cleanedExcerpt }}
                className="text-sm"
              />
              <div className="flex justify-between mt-auto">
                <time dateTime={blog.date} className="text-gray-500 text-sm">
                  {formattedDate}
                </time>
                <Link
                  className="flex items-center gap-1 text-sm text-blue-500"
                  href={ROUTES.BLOG(blog.id)}
                >
                  <span>ادامه مطلب</span>
                  <IoMdArrowRoundBack />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Blogs;
