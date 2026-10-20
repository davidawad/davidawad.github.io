import type { Project } from "@/data/engineering";

// Permission-string encoder shared by the Engineering listing and the terminal.
// Position 0: d = deployed product, - = code-only. Then owner/group/world rwx triplets:
// owner = readme / maintained (<=2y) / shipped; group = open source / accepts PRs; world = public / live.
export const isDeployed = (p: Project) => {
  if (p.siteUrl) return true;
  if (p.repoUrl || !p.url) return false;
  return !p.url.includes("github.com") && !p.url.includes("gitlab.com");
};
export const hasRepo = (p: Project) => !!p.repoUrl || (!!p.url && (p.url.includes("github.com") || p.url.includes("gitlab.com")));
const isCoursework = (p: Project) => p.category === "ml" || p.category === "physics";

export function encodePerms(p: Project, currentYear = new Date().getFullYear()): string {
  const readable = hasRepo(p) || isDeployed(p);
  return [
    isDeployed(p) ? "d" : "-",
    readable ? "r" : "-", currentYear - p.year <= 2 ? "w" : "-", isCoursework(p) ? "-" : "x",
    hasRepo(p) ? "r" : "-", hasRepo(p) ? "w" : "-", "-",
    readable ? "r" : "-", "-", isDeployed(p) ? "x" : "-",
  ].join("");
}
