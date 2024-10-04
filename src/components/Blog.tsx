"use client"

import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../lib/Actions";
import Image from "next/image";
import LoadingSpinner from "./ui/LoadingSpinner";
import DOMPurify from "dompurify";


const Blog = ({id}: { id: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlog({ queryKey: ["blog", id] }),
  });
  console.log(data)
  return (
    <div>Blog</div>
  )
}

export default Blog