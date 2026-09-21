export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
  highlightStat?: { label: string; value: string };
  layout: "large" | "compact";
}

export const projects: Project[] = [
  {
    id: "codegraph-rag",
    title: "CodeGraph RAG",
    tagline: "Hybrid Neo4j Graph & Vector Code Intelligence",
    description:
      "A code intelligence and repository reasoning system that maps codebases into structured semantic knowledge graphs. Uses Tree-sitter for AST parsing, Neo4j for hierarchical call relations, and bounded multi-hop traversals to enable precise investigation workflows and iterative patch repair.",
    technologies: ["Python", "Neo4j", "Graph RAG", "Tree-sitter", "Cypher", "LangChain"],
    image: "/images/projects/codegraph-rag.svg",
    github: "https://github.com/Omarkam3l/Portifolio",
    demo: "",
    featured: true,
    highlightStat: { label: "Traversal Depth", value: "Bounded Multi-Hop" },
    layout: "large",
  },
  {
    id: "traceforge",
    title: "TraceForge",
    tagline: "Python Runtime Tracing & Execution Graph Observability",
    description:
      "A lightweight Python runtime observability engine that captures execution spans, activities, and discrete events through an asynchronous in-memory event bus to construct causal execution DAGs during diagnosis.",
    technologies: ["Python", "Runtime Instrumentation", "Execution Graphs", "AsyncIO"],
    image: "/images/projects/traceforge.svg",
    github: "https://github.com/Omarkam3l/Portifolio",
    demo: "",
    highlightStat: { label: "Granularity", value: "Span & Event Level" },
    layout: "compact",
  },
  {
    id: "kathir",
    title: "Kathir",
    tagline: "AI Surplus-Food Rescue & Distribution Platform",
    description:
      "A food rescue platform connecting commercial food providers, donors, and NGOs to minimize surplus waste. Features AI-assisted meal discovery, inventory matching, and real-time donation dispatching.",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "AI Matching"],
    image: "/images/projects/kathir.svg",
    github: "https://github.com/Omarkam3l/Portifolio",
    demo: "",
    highlightStat: { label: "Stack", value: "Flutter + Supabase" },
    layout: "compact",
  },
  {
    id: "vision-heatmap",
    title: "Spatial Heatmap & Vision Analytics",
    tagline: "Real-Time Occupancy Tracking & Spatial Dwell Pipeline",
    description:
      "An exploratory computer-vision analytics pipeline designed for spatial occupancy mapping and surface density tracking. Aggregates object centroids with temporal decay to generate high-resolution visual density matrices.",
    technologies: ["Python", "OpenCV", "PyTorch", "NumPy", "Homography Transform"],
    image: "/images/projects/vision-heatmap.svg",
    github: "https://github.com/Omarkam3l/Portifolio",
    demo: "",
    highlightStat: { label: "Pipeline", value: "Temporal Coordinate Accumulation" },
    layout: "large",
  },
];
