import { cache } from "react";

const getRepoStars = cache(async (owner: string, repo: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch repository data");
    }
    const data = await response.json();
    return data.stargazers_count;
  } catch (err) {
    console.error("Error fetching star count:", err);
    return 350;
  }
});

export default async function GitHubStarButton() {
  const repoUrl = "https://github.com/aotakeda/trabalhar-na-gringa";
  const urlParts = repoUrl.split("/");
  const owner = urlParts[urlParts.length - 2];
  const repo = urlParts[urlParts.length - 1];
  const starCount = await getRepoStars(owner, repo);
  const formattedStarCount = starCount.toLocaleString();

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-full group"
      aria-label={`Star esse repositório no GitHub (${starCount} estrelas)`}
    >
      <div className="flex items-center rounded-md overflow-hidden transition-all duration-300 font-sans text-gray-800 max-w-full transform hover:-translate-y-0.5">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300 rounded-l-md group-hover:border-gray-400 transition-colors duration-300">
          <svg
            viewBox="0 0 16 16"
            className="w-4 h-4 text-gray-700 group-hover:text-black transition-colors duration-300"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <span className="font-medium text-xs group-hover:text-black transition-colors duration-300">
            Star
          </span>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-white border border-l-0 border-gray-300 rounded-r-md min-w-[50px] group-hover:border-gray-400 transition-colors duration-300">
          <span className="text-xs font-semibold text-gray-700 group-hover:text-black transition-colors duration-300">
            {formattedStarCount}
          </span>
        </div>
      </div>
    </a>
  );
}
