import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBlogs } from "../../../lib/Actions";
import Blogs from "@/components/Blogs";
import Header from "@/components/Header";

const BlogsPage = () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return (
    <section className="min-h-dvh flex flex-col items-center justify-between px-12">
      <Header />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Blogs />
      </HydrationBoundary>
    </section>
  );
};

export default BlogsPage;
