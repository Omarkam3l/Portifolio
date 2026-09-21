export interface SkillCategory {
  category: string;
  skills: string[];
}

export const coreSkillCategories: SkillCategory[] = [
  {
    category: "AI Engineering",
    skills: [
      "LLM Applications",
      "RAG",
      "Agentic AI",
      "Graph RAG",
      "LangGraph",
      "LangChain",
      "AI Evaluation",
      "Prompt Engineering",
    ],
  },
  {
    category: "Retrieval & Data",
    skills: [
      "Information Retrieval",
      "Hybrid Search",
      "Semantic Search",
      "Embeddings",
      "Reranking",
      "Neo4j",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    category: "Backend & Infrastructure",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Redis",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      "Software Architecture",
      "Runtime Instrumentation",
      "Execution Graphs",
      "Event Systems",
      "Plugin Architecture",
      "Rust",
    ],
  },
  {
    category: "Mobile",
    skills: [
      "Flutter",
      "Dart",
    ],
  },
  {
    category: "Computer Vision",
    skills: [
      "Computer Vision",
      "OpenCV",
      "Image Processing",
      "Camera Projection",
      "Heatmaps",
      "Multi-object Tracking",
    ],
  },
];

// Alias for compatibility with existing tests
export const skillGroups = coreSkillCategories;
