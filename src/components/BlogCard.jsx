import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blogs${blog.urlPath}`}
      className="bg-hatch flex flex-col items-center justify-start rounded-md border border-neutral-200 p-4 shadow-md transition-colors duration-300 dark:bg-hatch-dark dark:border-neutral-700"
    >
      <div className="w-full rounded-md border border-neutral-200 bg-linear-to-r from-neutral-200 via-neutral-100 to-neutral-200 p-2 backdrop-blur-xl transition-colors duration-300 hover:from-neutral-300 hover:via-neutral-100 hover:to-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 dark:hover:from-neutral-700 dark:hover:via-neutral-800 dark:hover:to-neutral-700">
        <div className="flex w-full flex-col items-center gap-2 p-2 md:flex-row md:justify-between">
          <h1 className="text-center text-xl font-semibold tracking-tight text-wrap md:text-start md:text-2xl">
            {blog.title}
          </h1>
          <h2 className="text-center text-xs font-bold md:text-start">
            {blog.datePublished}
          </h2>
        </div>
        <div className="flex flex-col p-2">
          <p className="text-center text-xs text-wrap md:text-start md:text-sm">
            {blog.description}
          </p>
          <Link
            to={`/blogs${blog.urlPath}`}
            className="mt-4 flex w-fit cursor-pointer items-center justify-center gap-1 rounded-md border border-neutral-300 px-3 py-1 text-sm transition duration-300 hover:bg-neutral-100 active:scale-95 dark:border-neutral-600 dark:hover:bg-neutral-800"
          >
            Read <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    </Link>
  );
};
