import useScrollToTop from "../hooks/useScrollToTop";
import { allBlogs } from "../constants/allBlogs";
import { BlogCard } from "../components/BlogCard";
export const Blogs = () => {
  useScrollToTop();
  const sortedBlogs = [...allBlogs].sort((a, b) => {
    return (
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
  });
  return (
    <div className="flex h-full flex-1 flex-col px-2 py-6">
      <div className="flex w-full flex-col items-start justify-start px-4">
        <h1 className="mx-auto mb-4 rounded-md border border-neutral-200 px-6 py-1 text-2xl font-semibold select-none md:mb-6 md:text-4xl dark:border-neutral-700">
          Blogs
        </h1>
        <div className="flex w-full flex-col gap-6">
          {sortedBlogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx || blog.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
