import { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "AI & Systems Engineering (Independent Research & Projects)",
    organization: "Independent",
    location: "Cairo, Egypt",
    description:
      "Deep-diving into code intelligence architectures, knowledge graph retrieval, and runtime observability systems.",
    highlights: [
      "Engineered CodeGraph RAG for semantic AST parsing and Neo4j graph traversal across polyglot repositories.",
      "Developed TraceForge to capture function spans and build directed execution graphs for Python applications.",
      "Prototyped surplus food rescue matching architecture with Flutter and Supabase (Kathir).",
    ],
    tech: ["Python", "Neo4j", "Graph RAG", "Next.js", "TypeScript", "Flutter"],
    type: "project",
  },
  {
    period: "Milestone",
    role: "Code Intelligence & Graph RAG Milestone",
    organization: "Technical Milestone",
    location: "Remote",
    description:
      "Completed foundational architecture for bounded multi-hop traversals and hybrid vector-graph query routing.",
    highlights: [
      "Benchmarked retrieval accuracy against complex multi-file dependency questions.",
      "Designed adversarial evaluation scenarios testing code repair boundaries.",
    ],
    tech: ["Neo4j", "Cypher", "Tree-sitter", "Python"],
    type: "milestone",
  },
  {
    period: "Milestone",
    role: "Runtime Instrumentation Engine",
    organization: "Technical Milestone",
    location: "Remote",
    description:
      "Implemented decoupled asynchronous event bus and causal execution graph builder for Python testing environments.",
    highlights: [
      "Achieved sub-millisecond dispatch overhead on event streaming.",
      "Created visual execution DAG generator to expose runtime test failures.",
    ],
    tech: ["Python", "AsyncIO", "Instrumentation", "Event Bus"],
    type: "milestone",
  },
  {
    period: "[ADD DATES]",
    role: "Software Engineering / Technical Experience [ADD YOUR EXPERIENCE]",
    organization: "[ADD COMPANY / UNIVERSITY]",
    location: "[ADD LOCATION]",
    description:
      "[ADD YOUR EXPERIENCE: Replace this placeholder with your professional work history, internships, or academic background.]",
    highlights: [
      "[ADD HIGHLIGHT 1: Key system designed or shipped]",
      "[ADD HIGHLIGHT 2: Core technical contribution or responsibility]",
    ],
    tech: ["Python", "TypeScript", "SQL", "Git"],
    type: "work",
  },
];
