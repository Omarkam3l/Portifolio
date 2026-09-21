import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";
import { validateProjects } from "@/lib/validation";
import { Project } from "@/types/portfolio";

describe("Portfolio Functional Logic Tests", () => {
  it("finds projects by slug correctly", () => {
    const codegraph = projects.find((p) => p.slug === "codegraph-rag");
    expect(codegraph).toBeDefined();
    expect(codegraph?.title).toBe("CodeGraph RAG");
    expect(codegraph?.category).toBe("AI & RAG");

    const traceforge = projects.find((p) => p.slug === "traceforge");
    expect(traceforge).toBeDefined();
    expect(traceforge?.title).toBe("TraceForge");
    expect(traceforge?.category).toBe("Systems & Backend");

    const nonExistent = projects.find((p) => p.slug === "non-existent-system");
    expect(nonExistent).toBeUndefined();
  });

  it("filters projects accurately by category", () => {
    const aiProjects = projects.filter((p) => p.category === "AI & RAG");
    expect(aiProjects.length).toBeGreaterThanOrEqual(1);
    expect(aiProjects.some((p) => p.slug === "codegraph-rag")).toBe(true);

    const systemsProjects = projects.filter((p) => p.category === "Systems & Backend");
    expect(systemsProjects.length).toBeGreaterThanOrEqual(1);
    expect(systemsProjects.some((p) => p.slug === "traceforge")).toBe(true);
  });

  it("detects malformed projects through validator", () => {
    const invalidProjects: Project[] = [
      {
        id: "duplicate-id",
        slug: "slug-1",
        title: "Test 1",
        summary: "Summary 1",
        description: "Desc 1",
        category: "AI",
        technologies: [],
        featured: false,
        links: {},
        metrics: [],
        architecture: {
          nodes: [{ id: "n1", label: "Node 1", role: "Role 1" }],
          edges: [{ from: "n1", to: "non-existent-node" }],
        },
        highlights: [],
        challenges: [],
        solutions: [],
        results: [],
        images: [],
      },
      {
        id: "duplicate-id", // Duplicate ID
        slug: "slug-2",
        title: "Test 2",
        summary: "Summary 2",
        description: "Desc 2",
        category: "AI",
        technologies: [],
        featured: false,
        links: {},
        metrics: [],
        architecture: { nodes: [], edges: [] },
        highlights: [],
        challenges: [],
        solutions: [],
        results: [],
        images: [],
      },
    ];

    const issues = validateProjects(invalidProjects);
    const edgeIssue = issues.find((i) => i.message.includes("non-existent 'to' node"));
    const dupIssue = issues.find((i) => i.message.includes("Duplicate project ID"));

    expect(edgeIssue).toBeDefined();
    expect(dupIssue).toBeDefined();
  });
});
