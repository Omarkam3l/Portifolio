import { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  name: "Omar Sharaby",
  title: "AI & Systems Engineer",
  status: "Available for engineering roles & technical collaborations",
  location: "Cairo, Egypt",
  shortBio:
    "Building intelligent developer tooling, knowledge graph RAG pipelines, and runtime observability systems.",
  fullBio: [
    "I focus on the intersection of AI engineering, graph-augmented retrieval, and systems software. My work centers on solving complex architectural challenges: turning large codebases into queryable graphs, tracing runtime execution in Python environments, and shipping resilient software.",
    "Rather than treating AI as a superficial API wrapper, I design systems with deterministic structure—leveraging graph databases, bounded multi-hop traversals, structured schemas, and robust evaluation suites to build genuinely reliable engineering tools.",
    "When I'm not writing code, I actively study the theoretical foundations of modern machine learning, focusing on linear algebra, multivariate calculus, and probabilistic modeling.",
  ],
  hero: {
    headline: "Engineering intelligent systems, graph RAG pipelines & runtime observability.",
    description:
      "Specializing in code knowledge graphs, bounded multi-hop reasoning, runtime instrumentation, and full-stack software architecture.",
    primaryCta: {
      label: "Explore Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Get in Touch",
      href: "#contact",
    },
    terminalLines: [
      "status: initialized",
      "focus: code_knowledge_graphs + runtime_tracing",
      "architecture: decoupled_data_layer",
      "ready: press [Ctrl+K] for command palette",
    ],
  },
  focusAreas: [
    {
      title: "Graph RAG & Code Intelligence",
      description:
        "Building semantic code knowledge graphs, repository ingestion pipelines, and bounded multi-hop traversal architectures using Neo4j and vector rerankers.",
      tags: ["Neo4j", "Graph RAG", "Hybrid Retrieval", "AST Parsing", "Cypher"],
      iconName: "Network",
    },
    {
      title: "Runtime Tracing & Observability",
      description:
        "Developing Python runtime execution tracing, activity recording, and execution graph builders to expose hidden system behavior during diagnosis.",
      tags: ["Python", "Instrumentation", "Execution Graphs", "Spans & Events"],
      iconName: "Activity",
    },
    {
      title: "Systems & Backend Architecture",
      description:
        "Architecting typed, resilient backend services with modular boundaries, clean pipelines, relational/document storage, and asynchronous event buses.",
      tags: ["TypeScript", "Python", "PostgreSQL", "Docker", "Async I/O"],
      iconName: "Cpu",
    },
    {
      title: "AI-Assisted Applications",
      description:
        "Integrating generative and deterministic AI capabilities into practical products—such as surplus-food discovery and matching platforms.",
      tags: ["Full Stack", "Supabase", "Flutter", "Vector Search", "API Design"],
      iconName: "Sparkles",
    },
  ],
  currentLearning: [
    {
      topic: "Mathematics for Machine Learning",
      category: "Theoretical Foundations",
      description: "Linear algebra, multivariate calculus, and optimization methods for ML models.",
      status: "in-progress",
    },
    {
      topic: "Probability & Statistics for AI",
      category: "Theoretical Foundations",
      description: "Probabilistic modeling, Bayesian inference, and statistical distributions.",
      status: "in-progress",
    },
    {
      topic: "Systems Programming with Rust",
      category: "Systems & Tooling",
      description: "Memory safety, concurrency primitives, and high-performance system utilities.",
      status: "in-progress",
    },
    {
      topic: "Advanced Graph Retrieval & Multi-Agent Loops",
      category: "AI Engineering",
      description: "Bounded multi-hop reasoning, stateful agentic workflows, and adversarial evaluation.",
      status: "in-progress",
    },
  ],
};
