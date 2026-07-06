import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const BlogCard = ({ blog, index = 0 }) => {
  const bgNumber = (index % 8) + 1;
  return (
    <div className="flex flex-col items-center justify-start rounded-md border border-neutral-200 p-4 shadow-md transition-colors duration-300 dark:border-neutral-700">
      <div className="relative w-full overflow-hidden rounded-md border border-neutral-200 bg-linear-to-r from-neutral-200 via-neutral-100 to-neutral-200 p-2 backdrop-blur-xl transition-colors duration-300 hover:from-neutral-300 hover:via-neutral-100 hover:to-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 dark:hover:from-neutral-700 dark:hover:via-neutral-800 dark:hover:to-neutral-700">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-cover bg-center opacity-80 dark:opacity-80"
          style={{
            backgroundImage: `url(./card-bg-${bgNumber}.jpg)`,
            maskImage: "linear-gradient(to right, transparent, black 40%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 40%)",
          }}
        />

        <div className="relative z-10 flex w-full flex-col items-start gap-2 p-2 md:w-1/2 md:justify-between">
          <h1 className="text-center text-xl font-semibold tracking-tight text-wrap md:text-start md:text-2xl">
            {blog.title}
          </h1>
          <h2 className="text-center text-xs font-bold md:text-start">
            {blog.pubDate && !isNaN(new Date(blog.pubDate))
              ? new Date(blog.pubDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Unknown date"}
          </h2>
        </div>
        <div className="relative z-10 flex w-full flex-col p-2 md:w-1/2">
          {/* <p className="text-center text-xs text-wrap md:text-start md:text-sm">
            {blog.excerpt}
          </p>*/}
          <a
            href={blog.link}
            target="_blank"
            className="mt-4 flex w-fit cursor-pointer items-center justify-center gap-1 rounded-md border border-neutral-300 px-3 py-1 text-sm transition duration-300 hover:bg-neutral-100 active:scale-95 dark:border-neutral-600 dark:hover:bg-neutral-800"
          >
            Read on Medium
            <IconArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
