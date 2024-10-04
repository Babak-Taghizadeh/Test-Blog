import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBlogs } from "../../../lib/Actions";
import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "بلاگ ها",
};

const blogsPage = () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="min-h-dvh flex flex-col items-center justify-between px-12">
        <Header />
        <Blogs />
      </section>
    </HydrationBoundary>
  );
};

export default blogsPage;
