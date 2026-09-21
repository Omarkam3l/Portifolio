export interface JourneyItem {
  period: string;
  role: string;
  context: string;
  description: string;
  tags?: string[];
}

export const experience: JourneyItem[] = [
  {
    period: "2024 — Present",
    role: "AI & Systems Engineering",
    context: "Independent Research & Core Projects",
    description:
      "Architecting knowledge graph RAG systems (CodeGraph RAG), Python runtime execution tracing engines (TraceForge), and exploring multi-hop code reasoning with Neo4j and Tree-sitter.",
    tags: ["Neo4j", "Graph RAG", "Python", "TypeScript", "Observability"],
  },
  {
    period: "Milestone",
    role: "Graph RAG & Code Intelligence Architecture",
    context: "Technical Milestone",
    description:
      "Designed and benchmarked bounded multi-hop graph retrieval on monolithic codebases to eliminate context window explosion during deep dependency traversals.",
    tags: ["AST Parsing", "Cypher", "Tree-sitter", "Knowledge Graphs"],
  },
  {
    period: "Milestone",
    role: "Runtime Instrumentation & Event Bus",
    context: "Observability Engine Milestone",
    description:
      "Built decoupled asynchronous event dispatching for Python runtime sessions to construct causal execution DAGs with sub-millisecond overhead.",
    tags: ["AsyncIO", "Event Bus", "Execution Graphs", "Instrumentation"],
  },
  {
    period: "Earlier",
    role: "Full-Stack Software Engineering",
    context: "Product & Infrastructure Systems",
    description:
      "Designed and shipped full-stack applications with Next.js, React, Node.js, and relational databases. Prototyped surplus food rescue platform architecture using Flutter and Supabase.",
    tags: ["Next.js", "Flutter", "Supabase", "PostgreSQL", "Docker"],
  },
];
