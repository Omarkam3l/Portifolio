import { SkillCategory } from "@/types/portfolio";

export const skills: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "Knowledge Graphs (Neo4j)", level: "proficient", highlight: true },
      { name: "Graph RAG & Hybrid Retrieval", level: "proficient", highlight: true },
      { name: "Vector Databases & Embeddings", level: "proficient", highlight: true },
      { name: "Multi-Hop Reasoning", level: "proficient" },
      { name: "LangChain / LLM Frameworks", level: "proficient" },
      { name: "PyTorch", level: "familiar" },
      { name: "Tree-sitter (AST Parsing)", level: "proficient" },
      { name: "Adversarial Evaluation", level: "familiar" },
    ],
  },
  {
    name: "Languages",
    icon: "Code",
    skills: [
      { name: "Python", level: "proficient", highlight: true },
      { name: "TypeScript", level: "proficient", highlight: true },
      { name: "JavaScript", level: "proficient" },
      { name: "SQL (PostgreSQL / SQLite)", level: "proficient" },
      { name: "Cypher (Graph Query)", level: "proficient", highlight: true },
      { name: "Dart (Flutter)", level: "familiar" },
      { name: "Rust", level: "familiar" },
      { name: "HTML / CSS", level: "proficient" },
    ],
  },
  {
    name: "Systems & Backend",
    icon: "Server",
    skills: [
      { name: "Runtime Instrumentation & Tracing", level: "proficient", highlight: true },
      { name: "AsyncIO & Event Buses", level: "proficient" },
      { name: "REST APIs & Webhooks", level: "proficient" },
      { name: "FastAPI / Node.js Backends", level: "proficient" },
      { name: "Supabase & Edge Functions", level: "proficient" },
      { name: "Microservice Boundaries", level: "proficient" },
    ],
  },
  {
    name: "Frontend & UI",
    icon: "Layout",
    skills: [
      { name: "Next.js (App Router)", level: "proficient", highlight: true },
      { name: "React 19 / Modern Hooks", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Framer Motion", level: "proficient" },
      { name: "Responsive & Accessible UI", level: "proficient" },
      { name: "State Architecture", level: "proficient" },
    ],
  },
  {
    name: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "Neo4j Graph Database", level: "proficient", highlight: true },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Redis / In-Memory Buffers", level: "proficient" },
      { name: "Vector Stores (Qdrant/Chroma/Faiss)", level: "proficient" },
      { name: "Schema Design & Indexing", level: "proficient" },
    ],
  },
  {
    name: "DevOps & Tooling",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub Workflows", level: "proficient", highlight: true },
      { name: "Docker & Containerization", level: "proficient" },
      { name: "Linux / POSIX Environments", level: "proficient" },
      { name: "CI / CD Pipelines", level: "familiar" },
      { name: "Automated Testing & Vitest", level: "proficient" },
    ],
  },
];
