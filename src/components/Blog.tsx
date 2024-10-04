"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../lib/Actions";
import Image from "next/image";
import LoadingSpinner from "./ui/LoadingSpinner";
import { sanitizeContent } from "../../utils/sanitizeText";
import { formatDate } from "../../utils/formatDate";
import { notFound } from "next/navigation";

const Blog = ({ id }: { id: string }) => {
  const { data, isLoading, error, status } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlog({ queryKey: ["blog", id] }),
  });

  if (isLoading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div className="h-dvh flex items-center justify-center">اطلاعات بلاگ در دسترس نیست!</div>;
  }

  const { title, content, date, featured_media_object, categories } = data;
  const sanitizedContent = sanitizeContent(content.rendered);
  const formattedDate = formatDate(date);

  return (
    <section className="pt-28 pb-14 flex flex-col gap-8 px-8 items-center lg:px-[16rem] 2xl:px-[20rem]">
      <header className="flex justify-between w-full">
        <span className="bg-icon w-fit rounded-2xl px-3 py-[2px] text-sm text-primary">
          {categories[0].name}
        </span>
        <time dateTime={data?.date}>تاریخ انتشار: {formattedDate}</time>
      </header>
      <article className="flex flex-col items-center gap-8">
        <h1 className="font-bold text-2xl text-wrap break-words text-center w-fit">
          {title.rendered}
        </h1>
        <div>
        <Image
          src={featured_media_object.source_url}
          alt={title.rendered}
          width={featured_media_object.media_details.width}
          height={featured_media_object.media_details.height}
          className="rounded-2xl w-[600px]"
        />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          className="line-height lg:text-lg"
        />
      </article>
    </section>
  );
};

export default Blog;
