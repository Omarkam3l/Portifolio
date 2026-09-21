export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML & Intelligence",
    skills: [
      "Python",
      "Graph RAG",
      "Knowledge Graphs (Neo4j)",
      "Cypher",
      "Tree-sitter (AST Parsing)",
      "Vector Embeddings",
      "LangChain",
      "PyTorch",
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      "Runtime Instrumentation",
      "Execution Graphs",
      "AsyncIO & Event Buses",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "REST APIs",
    ],
  },
  {
    category: "Frontend & Interface",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Modern Web APIs",
      "UI Accessibility",
    ],
  },
  {
    category: "Engineering & Tooling",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux / Bash",
      "Rust (Exploration)",
      "Vitest / Testing",
      "Flutter",
    ],
  },
];
