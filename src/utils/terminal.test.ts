import { describe, expect, it } from "vitest";
import { projects } from "@/data/engineering";
import { completeCommand, filterProjects, runCommand } from "./terminal";

const initial = { cwd: "~", history: [] as string[] };

describe("header terminal commands", () => {
  it("ls lists projects and unknown filters report no matches", () => {
    expect(runCommand("ls", projects, initial).output.join("\n")).toContain("thoth");
    expect(runCommand("ls impossible", projects, initial).output).toEqual(["No projects found."]);
  });

  it("cd moves to known sections and rejects unknown sections", () => {
    expect(runCommand("cd engineering", projects, initial).state.cwd).toBe("engineering");
    expect(runCommand("cd nowhere", projects, initial).output[0]).toContain("no such section");
  });

  it("grep searches project fields and gives a clean miss", () => {
    expect(runCommand("grep rust", projects, initial).output.join("\n")).toContain("whatsapp-link-rs");
    expect(runCommand("grep ml", projects, initial).output.join("\n")).toContain("traffic-sign-classifier");
    expect(runCommand("grep", projects, initial).output[0]).toContain("usage:");
  });

  it("open resolves a project and rejects a missing one", () => {
    expect(runCommand("open thoth", projects, initial).output.join("\n")).toContain("Terminal-based note-taking");
    expect(runCommand("open missing", projects, initial).output[0]).toContain("project not found");
    expect(runCommand("open", projects, initial).output[0]).toContain("usage:");
  });

  it("help documents commands; unknown input explains help", () => {
    expect(runCommand("help", projects, initial).output.join("\n")).toContain("Tab completes");
    expect(runCommand("wat", projects, initial).output[0]).toContain("command not found");
  });

  it("history returns submitted commands and reports empty history", () => {
    expect(runCommand("history", projects, initial).output).toEqual(["No commands yet."]);
    expect(runCommand("history", projects, { cwd: "~", history: ["ls"] }).output).toEqual(["  1  ls"]);
  });

  it("clear produces no output and keeps a history record", () => {
    const result = runCommand("clear", projects, initial);
    expect(result.output).toEqual([]);
    expect(result.state.history).toEqual(["clear"]);
  });

  it("filters case-insensitively across names, tags, language metadata and years", () => {
    expect(filterProjects(projects, "THOTH").map(project => project.name)).toContain("thoth");
    expect(filterProjects(projects, "embedded").length).toBeGreaterThan(0);
    expect(filterProjects(projects, "2014").map(project => project.name)).toContain("pebbledex");
    const withLanguage = [{ ...projects[0], language: "Rust" }];
    expect(filterProjects(withLanguage, "rust")).toHaveLength(1);
    expect(filterProjects(withLanguage, "nope")).toHaveLength(0);
  });

  it("completes commands, sections and project names", () => {
    expect(completeCommand("gr", projects)).toContain("grep");
    expect(completeCommand("cd eng", projects)).toContain("engineering");
    expect(completeCommand("open tho", projects)).toContain("thoth");
    expect(completeCommand("open absent", projects)).toEqual([]);
  });
});
