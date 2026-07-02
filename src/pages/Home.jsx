import {
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconBrandXFilled,
  IconRosetteDiscountCheckFilled,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { Heading } from "../components/Heading";
import { homeProjects } from "../constants/homeProjects";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import { BlogCard } from "../components/BlogCard";
import { useState, useEffect } from "react";
import { DividingLine } from "../components/DividingLine";

export const Home = () => {
  const [homeBlogs, setHomeBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://medium-blogs-retriever-api.onrender.com/api/posts/amanshahidev",
    )
      .then((res) => res.json())
      .then((data) => {
        const posts = data.data.posts ?? [];
        setHomeBlogs(posts.slice(0, 4));
        setBlogsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setBlogsLoading(false);
      });
  }, []);
  // useScrollToTop();
  return (
    <div className="flex h-full flex-1 flex-col">
      {/* HOME SECTION */}
      <div className="px-4 py-2 md:py-6">
        <div className="flex items-center justify-center gap-4 p-2 md:gap-10">
          <img
            src="./me-anime-dp-crop.png"
            alt=""
            className="h-16 w-20 rounded-lg object-contain object-center p-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:h-34 md:w-40 md:p-2 dark:shadow-[0_3px_10px_rgb(255,255,255,0.1)]"
            style={{ imageRendering: "auto" }}
          />
          <div className="flex flex-col items-center justify-center gap-1 py-4">
            <h1 className="flex items-center gap-1 text-2xl font-semibold tracking-tight md:text-4xl">
              Aman Shahi{" "}
              <IconRosetteDiscountCheckFilled
                className="text-blue-400"
                size={30}
              />
            </h1>
            <h2 className="text-sm font-medium tracking-tight text-neutral-500 md:text-xl dark:text-neutral-400">
              Web Developer
            </h2>
          </div>
        </div>
        <h2 className="text-md mt-2 text-center text-neutral-500 md:text-lg dark:text-neutral-400">
          Building products that helps people ease their work.
        </h2>
        <div>
          <div className="text-md mt-4 flex items-center justify-center gap-4 text-center md:gap-6 md:text-lg">
            <a
              target="_blank"
              className="flex w-fit cursor-pointer items-center justify-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1 text-neutral-500 transition-all duration-300 ease-in-out hover:bg-neutral-200 hover:text-neutral-700 active:scale-95 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
              href="https://www.linkedin.com/in/aman-shahi-dev/"
            >
              <IconBrandLinkedinFilled /> <span>LinkedIn</span>
            </a>
            <a
              target="_blank"
              className="flex w-fit cursor-pointer items-center justify-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1 text-neutral-500 transition-all duration-300 ease-in-out hover:bg-neutral-200 hover:text-neutral-700 active:scale-95 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
              href="https://github.com/aman-shahi-dev"
            >
              <IconBrandGithubFilled /> <span>Github</span>
            </a>
            <a
              target="_blank"
              className="flex w-fit cursor-pointer items-center justify-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1 text-neutral-500 transition-all duration-300 ease-in-out hover:bg-neutral-200 hover:text-neutral-700 active:scale-95 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
              href="https://x.com/TheBinaryCoder0"
            >
              <IconBrandXFilled /> <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <DividingLine />
      <div className="px-4 py-2 md:py-6">
        <div className="flex w-full flex-col items-start justify-start p-2">
          <Heading className="mb-4 px-4 py-1 text-shadow-lg">Projects</Heading>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {homeProjects.map((project, idx) => (
              <ProjectCard project={project} key={idx || project.title} />
            ))}
          </div>
          <Link
            to="/projects"
            className="mx-auto mt-4 flex items-center justify-center gap-1 rounded-md bg-black px-4 py-2 text-white transition duration-300 select-none hover:cursor-pointer hover:bg-neutral-700 active:scale-95 md:mt-6 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View All Projects <IconArrowUpRight />
          </Link>
        </div>
      </div>

      {/* BLOG SECTION */}
      <DividingLine />
      <div className="px-4 py-2 md:py-6">
        <div className="flex w-full flex-col items-start justify-start p-2">
          <Heading className="mb-4 px-4 py-1 text-shadow-lg">Blogs</Heading>
          <div className="flex w-full flex-col gap-6">
            {blogsLoading ? (
              <p className="w-full text-center text-xl">Loading...</p>
            ) : (
              homeBlogs.map((blog, idx) => (
                <BlogCard blog={blog} index={idx} key={blog.title || idx} />
              ))
            )}
          </div>
          <Link
            to="/blogs"
            className="mx-auto mt-4 flex items-center justify-center gap-1 rounded-md bg-black px-4 py-2 text-white transition duration-300 select-none hover:cursor-pointer hover:bg-neutral-700 active:scale-95 md:mt-6 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View All Blogs <IconArrowUpRight />
          </Link>
        </div>
      </div>
      {/* CONTACT SECTION */}
      <DividingLine />
      <div className="px-4 py-2 md:py-6">
        <div className="flex w-full flex-col items-start justify-start p-2">
          <div className="flex w-full flex-wrap items-center justify-center gap-4">
            <a
              target="_blank"
              href="https://github.com/aman-shahi-dev"
              className="rounded-md border border-neutral-300 p-2 text-neutral-500 transition duration-300 hover:text-black active:scale-95 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white"
            >
              <IconBrandGithubFilled />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/TheBinaryCoder0"
              className="rounded-md border border-neutral-300 p-2 text-neutral-500 transition duration-300 hover:text-black active:scale-95 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white"
            >
              <IconBrandXFilled />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aman-shahi-dev/"
              className="rounded-md border border-neutral-300 p-2 text-neutral-500 transition duration-300 hover:text-black active:scale-95 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white"
            >
              <IconBrandLinkedinFilled />
            </a>
          </div>
          <p className="mx-auto mt-4 w-fit rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1 text-center text-sm text-shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
            Build with ❤️ by Aman
          </p>
        </div>
      </div>
    </div>
  );
};
