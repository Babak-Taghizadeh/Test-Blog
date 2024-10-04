import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBlog } from "../../../../lib/Actions";
import Blog from "@/components/Blog";
import Header from "@/components/Header";

const page = ({params}: {params: {id: string}}) => {
  const { id } = params;
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["blog", id],
    queryFn: getBlog,
  });

  return (
    <section className="min-h-dvh flex flex-col items-center justify-between">
      <Header backButton={true} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Blog id={id} />
      </HydrationBoundary>
    </section>
  );
};

export default page;
