import { Link } from "react-router-dom";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-16 w-full max-w-4xl items-center justify-center border-r border-b border-l border-neutral-300 bg-white px-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex max-w-2xl flex-1 items-center justify-between rounded-full bg-white px-4 py-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-colors duration-300 md:px-10 dark:bg-neutral-900 dark:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.1)]">
        <Link to="/" className="text-sm font-bold md:text-xl">
          <img
            src="./as-logo.svg"
            className="h-8 w-8 rounded-full object-cover object-center transition duration-300 hover:scale-110 hover:-rotate-12 hover:bg-neutral-100 active:scale-95 active:rotate-12 dark:invert dark:hover:bg-neutral-800"
            alt=""
          />
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden gap-2 md:flex md:items-center md:justify-evenly">
            <li>
              <Link
                to="/projects"
                className="cursor-pointer rounded-full px-4 py-2 text-neutral-600 transition duration-300 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="cursor-pointer rounded-full px-4 py-2 text-neutral-600 transition duration-300 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hidden cursor-pointer text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-full p-2 text-neutral-600 transition duration-300 hover:bg-neutral-200 hover:text-neutral-900 active:scale-90 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
