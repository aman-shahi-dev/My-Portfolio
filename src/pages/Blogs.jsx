import useScrollToTop from "../hooks/useScrollToTop";
import { BlogCard } from "../components/BlogCard";
import { useState, useEffect } from "react";

export const Blogs = () => {
  useScrollToTop();

  const [mediumBlogs, setMediumBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://medium-blogs-retriever-api.onrender.com/api/posts/amanshahidev",
    )
      .then((res) => res.json())
      .then((data) => {
        setMediumBlogs(data.data.posts ?? []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex h-full flex-1 flex-col px-2 py-6">
      <div className="flex w-full flex-col items-start justify-start px-4">
        <h1 className="mx-auto mb-4 rounded-md border border-neutral-200 px-6 py-1 text-2xl font-semibold select-none md:mb-6 md:text-4xl dark:border-neutral-700">
          Blogs
        </h1>
        <div className="flex w-full flex-col gap-6">
          {loading ? (
            <p className="w-full text-center text-xl">Loading...</p>
          ) : (
            mediumBlogs.map((blog, idx) => (
              <BlogCard blog={blog} index={idx} key={blog.title || idx} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
