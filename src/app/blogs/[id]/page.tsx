import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBlog } from "@/lib/getBlog";
import { getBlogs } from "@/lib/getBlogs";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import { Metadata } from "next";

// GENERATING STATIC PARAMS FOR BETTER SEO RESULTS
export async function generateStaticParams() {
  try {
    const blogs = await getBlogs();    
    return blogs.map((blog: { id: number }) => ({
      id: blog.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await getBlog({ queryKey: ["blog", params.id] });
  return {
    title: data.title.rendered,
    description: data.excerpt.rendered,

    openGraph: {
      images: [
        {
          url: data.featured_media_object.source_url,
        },
      ],
    },
  };
}

const BlogPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["blog", id],
    queryFn: getBlog,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="min-h-dvh flex flex-col items-center justify-between">
        <Header backButton={true} />
        <Blog id={id} />
      </section>
    </HydrationBoundary>
  );
};

export default BlogPage;
