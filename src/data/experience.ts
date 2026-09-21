export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  bulletPoints: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export const workExperience: WorkExperienceItem[] = [
  {
    id: "depi-trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "AI & Data Science Trainee",
    period: "April 2024 — October 2024",
    bulletPoints: [
      "Completed intensive training in Artificial Intelligence, Machine Learning, and Microsoft Data Engineering.",
      "Built end-to-end machine learning models and automated data engineering pipelines using Python and SQL.",
      "Developed robust ETL pipelines, data warehouses, and interactive business intelligence dashboards.",
      "Applied advanced machine learning techniques to real-world datasets and deployed analytical production solutions.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "monufia-national-univ",
    institution: "Monufia National University",
    degree: "Bachelor of Computer & Artificial Intelligence Engineering",
    period: "2022 — 2026 (Expected)",
    description:
      "Specializing in Artificial Intelligence, Multi-Agent Engineering, and Production Machine Learning Systems.",
  },
];

export const journeyMilestones = [
  {
    period: "2024 — Present",
    role: "AI & Systems Engineering (Research & Projects)",
    context: "Independent Systems Architecture",
    description:
      "Architecting CodeGraph RAG (Neo4j semantic code intelligence engine), TraceForge (Python runtime tracing and execution DAG builder), and Kathir (AI surplus-food rescue platform).",
    tags: ["Graph RAG", "Neo4j", "Python", "Runtime Tracing", "TypeScript"],
  },
  {
    period: "2024",
    role: "Code Intelligence & Graph RAG Milestone",
    context: "Technical Milestone",
    description:
      "Designed and benchmarked bounded multi-hop traversals across AST trees to eliminate context window bloat during deep repository call-graph reasoning.",
    tags: ["Tree-sitter", "Cypher", "Bounded Hops", "Hybrid Retrieval"],
  },
];
