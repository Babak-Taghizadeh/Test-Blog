"use client";

import Image from "next/image";
import { getBlogs } from "@/lib/getBlogs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ROUTES } from "@/lib/constants";
import LoadingSpinner from "./ui/LoadingSpinner";
import { sanitizeSliceExcerpt } from "@/utils/sanitizeText";
import { formatDate } from "@/utils/formatDate";
import Button from "./ui/Button";

const Blogs = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
  });
  console.log(error);
  if (isLoading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error && error instanceof Error) {
    return (
      <div className="h-dvh flex flex-col items-center justify-center">
        <p>Error: {error.message}</p>
        <Button onClick={() => refetch()} as="button">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <section className="pt-28 pb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 lg:gap-24 place-items-center">
      {data?.map((blog) => {
        const cleanedExcerpt = sanitizeSliceExcerpt(blog.excerpt.rendered);
        const formattedDate = formatDate(blog.date);
        return (
          <article
            className="h-[480px] w-[300px] bg-primary flex flex-col rounded-lg shadow-lg shadow-gray-300"
            key={blog.id}
          >
            <div className="relative w-full h-52">
              <Image
                className="rounded-t-lg"
                src={blog.featured_media_object.source_url}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
