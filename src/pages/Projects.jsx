import { allProjects } from "../constants/allProjects";
import { ProjectCard } from "../components/ProjectCard";
import useScrollToTop from "../hooks/useScrollToTop";

export const Projects = () => {
  useScrollToTop();
  return (
    <div className="flex h-full flex-1 flex-col px-2 py-6">
      <div className="flex w-full flex-col items-start justify-start px-4">
        <h1 className="mx-auto mb-4 rounded-md border border-neutral-200 px-6 py-1 text-2xl font-semibold select-none md:mb-6 md:text-4xl dark:border-neutral-700">
          Projects
        </h1>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {allProjects.map((project, idx) => (
            <ProjectCard project={project} key={idx || project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
