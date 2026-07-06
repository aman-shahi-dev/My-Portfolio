import { IconBrandGithubFilled, IconExternalLink } from "@tabler/icons-react";

export const ProjectCard = ({ project }) => {
  return (
    <div className=" flex flex-col items-center justify-start rounded-md border border-neutral-200 p-4 shadow-md transition-colors duration-300 dark:border-neutral-700">
      <div
        style={{
          backgroundImage: `url(./card-bg-${project.number}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`group flex h-40 w-full items-end justify-center overflow-hidden rounded-md rounded-b-none border-2 border-neutral-300 transition-[filter] duration-500 ease-in-out will-change-[filter] md:h-50 md:grayscale-100 md:hover:grayscale-0 dark:border-neutral-600`}
      >
        <div className="h-3/4 w-3/4 rounded-lg rounded-b-none border-2 border-b-0 border-neutral-300 object-cover object-center transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-110 md:border-3 md:border-b-0 dark:border-neutral-600">
          <img
            src={project.img}
            alt=""
            className="h-full w-full rounded-md rounded-b-none object-cover object-center transition duration-300"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-start bg-white p-2 transition-colors duration-300 dark:bg-neutral-900">
        <h1 className="text-lg md:text-xl">{project.title}</h1>
        <p className="md:text-md mt-2 mb-1 px-2 text-center text-sm text-wrap text-neutral-500 dark:text-neutral-400">
          {project.description}
        </p>
        <div className="mt-2 flex w-full items-center justify-center gap-4">
          <a
            target="_blank"
            href={project.liveLink}
            className="flex items-center justify-center gap-1 rounded-md bg-black px-3 py-1 text-white transition duration-300 select-auto hover:cursor-pointer hover:bg-neutral-700 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Live Link <IconExternalLink size={20} />
          </a>
          <a
            target="_blank"
            href={project.githubRepoLink}
            className="flex items-center justify-center gap-1 rounded-md bg-black px-3 py-1 text-white transition duration-300 select-none hover:cursor-pointer hover:bg-neutral-700 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Github <IconBrandGithubFilled size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
