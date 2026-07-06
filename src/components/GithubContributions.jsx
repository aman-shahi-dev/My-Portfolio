import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { IconBrandGithubFilled, IconExternalLink } from "@tabler/icons-react";
import { useTheme } from "../context/ThemeContext";

export const GithubContributions = () => {
  const { theme } = useTheme();
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/aman-shahi-dev.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalContributions(data.totalContributions || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch contributions", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex w-full flex-col justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-[#111111]">
      {/* Header */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <IconBrandGithubFilled
            size={36}
            className="text-neutral-900 dark:text-neutral-100"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {loading ? "..." : totalContributions.toLocaleString()} contributions
            </span>
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              in the past 12 months
            </span>
          </div>
        </div>

        <a
          href="https://github.com/aman-shahi-dev"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 rounded-full border border-neutral-300 bg-transparent px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 active:scale-95 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        >
          @aman-shahi-dev <IconExternalLink size={16} />
        </a>
      </div>

      {/* Calendar */}
      <div className="flex w-full justify-center overflow-hidden pb-2">
        <GitHubCalendar
          username="aman-shahi-dev"
          colorScheme={theme}
          blockSize={12}
          blockGap={4}
          fontSize={14}
          showTotalCount={false}
          theme={{
            light: ["#f0f0f0", "#d4d4d4", "#a3a3a3", "#737373", "#404040"],
            dark: ["#262626", "#404040", "#737373", "#a3a3a3", "#f5f5f5"],
          }}
        />
      </div>
    </div>
  );
};
