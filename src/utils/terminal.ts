import type { Project } from "@/data/engineering";

export type TerminalState = { cwd: string; history: string[] };
export type TerminalResult = { state: TerminalState; output: string[]; href?: string };

const sections: Record<string, string> = {
  engineering: "/engineering",
  projects: "/engineering",
  posts: "/posts",
  investing: "/investing",
  about: "/about",
  businesses: "/businesses",
};

export function filterProjects(projects: Project[], term: string): Project[] {
  const query = term.trim().toLocaleLowerCase();
  if (!query) return projects;
  return projects.filter(project => {
    const record = project as Project & { tags?: string[]; language?: string; languages?: string[] };
    const haystack = [project.name, project.category, project.blurb, project.year,
      ...(record.tags ?? []), record.language ?? "", ...(record.languages ?? [])].join(" ").toLocaleLowerCase();
    return haystack.includes(query);
  });
}

export function completeCommand(input: string, projects: Project[]): string[] {
  const [command, ...args] = input.split(/\s+/);
  const partial = args.join(" ").toLocaleLowerCase();
  if (command === "cd") return Object.keys(sections).filter(section => section.startsWith(partial));
  if (command === "open") return projects.map(project => project.name).filter(name => name.toLocaleLowerCase().startsWith(partial));
  if (!args.length) return ["ls", "cd", "grep", "open", "help", "history", "clear"].filter(name => name.startsWith(command ?? ""));
  return [];
}

export function runCommand(raw: string, projects: Project[], current: TerminalState): TerminalResult {
  const input = raw.trim();
  if (!input) return { state: current, output: [] };
  const [command, ...rest] = input.split(/\s+/);
  const arg = rest.join(" ");
  const history = [...current.history, input];
  const state = { ...current, history };
  const fail = (message: string): TerminalResult => ({ state, output: [message] });

  switch (command.toLowerCase()) {
    case "ls": {
      const matches = filterProjects(projects, rest.filter(argument => !argument.startsWith("-")).join(" "));
      return { state, output: matches.length ? matches.map(project => `${project.name.padEnd(32)} ${project.year}  ${project.category}${project.language ? ` · ${project.language}` : ""}`) : ["No projects found."] };
    }
    case "cd": {
      if (!arg || arg === "~" || arg === "/") return { state: { ...state, cwd: "~" }, output: ["~"] };
      const target = arg.replace(/^\//, "").replace(/\/$/, "");
      if (target === "..") return { state: { ...state, cwd: "~" }, output: ["~"] };
      const normalized = target.toLowerCase();
      if (sections[normalized]) return { state: { ...state, cwd: normalized }, output: [`~/ ${normalized}`] };
      return fail(`cd: ${arg}: no such section`);
    }
    case "grep": {
      if (!arg) return fail("usage: grep <term>");
      const matches = filterProjects(projects, arg);
      return { state, output: matches.length ? matches.map(project => `${project.name} — ${project.year} · ${project.category}${project.language ? ` · ${project.language}` : ""}`) : [`No projects match “${arg}”.`] };
    }
    case "open": {
      if (!arg) return fail("usage: open <project>");
      const project = projects.find(item => item.name.toLowerCase() === arg.toLowerCase())
        ?? projects.find(item => item.name.toLowerCase().includes(arg.toLowerCase()));
      if (!project) return fail(`open: ${arg}: project not found`);
      return { state, output: [`${project.name} (${project.year})`, `${project.category}${project.language ? ` · ${project.language}` : ""} · ${project.blurb}`, project.url ?? "No public link available."], ...(project.url ? { href: project.url } : {}) };
    }
    case "help": return { state, output: ["ls [filter] · list projects", "cd <section> · navigate: engineering, posts, investing, about, businesses", "grep <term> · search project names, tags, languages, years and descriptions", "open <project> · open a project", "history · show commands", "clear · clear output", "Tab completes commands, sections and projects. ↑/↓ recalls history. Esc leaves the terminal."] };
    case "history": return { state, output: history.length > 1 ? history.slice(0, -1).map((entry, index) => `${String(index + 1).padStart(3)}  ${entry}`) : ["No commands yet."] };
    case "clear": return { state, output: [], };
    default: return fail(`${command}: command not found. Type “help” for available commands.`);
  }
}
