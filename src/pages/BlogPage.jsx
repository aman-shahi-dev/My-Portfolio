import { allBlogs } from "../constants/allBlogs";
import { useParams } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

export const BlogPage = () => {
  useScrollToTop();
  const { slug } = useParams();
  const blog = allBlogs.find((b) => b.urlPath === `/${slug}`);

  if (!blog)
    return (
      <div className="flex flex-1 flex-col px-2 py-6">Blog not found!</div>
    );

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-2 py-6 md:gap-6">
      <h1 className="text-center text-xl font-semibold text-wrap md:text-4xl">
        {blog.title}
      </h1>
      <h2 className="rounded-full border border-neutral-200 bg-neutral-300 px-4 py-1 text-xs text-neutral-800 shadow-sm md:text-sm dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        {blog.datePublished}
      </h2>
      <h2 className="w-full text-center text-sm text-wrap md:text-lg">
        {blog.description}
      </h2>
      <p className="w-full px-4 py-2">{blog.content}</p>
    </div>
  );
};
