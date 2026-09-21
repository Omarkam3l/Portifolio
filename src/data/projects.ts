export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projectFilterTags = [
  "All",
  "Python",
  "FastAPI",
  "LangGraph",
  "Temporal",
  "Apache Kafka",
  "PostgreSQL",
  "Gemini API",
  "OpenTelemetry",
  "Docker",
  "LangChain",
  "Supabase",
  "Flutter",
  "Python 3.11",
  "MMDeploy",
  "MMDetection",
  "PyTorch",
  "Qdrant",
  "AWS",
  "Prometheus",
  "Apache Spark",
  "PySpark",
  "Apache Hive",
  "Databricks",
  "Pandas",
  "NumPy",
  "SQL Server",
  "SSIS",
  "Power BI",
  "T-SQL",
  "Data Warehousing",
  "Neo4j",
  "ChromaDB",
  "MCP",
  "SVG",
  "Observability",
  "JWT",
  "PyPI",
  "ByteTrack",
  "Homography",
  "YOLOv8",
  "PyTest",
  "MOT17",
];

export const projects: Project[] = [
  {
    id: "forge-ai",
    title: "ForgeAI – Autonomous AI Software Engineer Platform",
    description:
      "Production-hardened, asynchronous multi-agent platform that autonomously plans, architects, generates, reviews, and tests software from natural language requests. Features a 9-phase agent pipeline coordinated by Temporal workflows with transactional outbox and self-correcting LangGraph compilation loops.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Temporal",
      "Apache Kafka",
      "PostgreSQL",
      "Gemini API",
      "OpenTelemetry",
      "Docker",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
  },
  {
    id: "kathir",
    title: "Kathir – AI-Powered Food Rescue Platform",
    description:
      "AI-driven marketplace connecting restaurants, consumers, and NGOs to reduce food waste. Features a multi-agent AI assistant built with LangGraph for meal search, cart generation, and session-aware conversational memory with hybrid vector/keyword search.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "PostgreSQL",
      "Supabase",
      "Flutter",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
  },
  {
    id: "motion-iq",
    title: "MotionIQ – AI Sports Analytics Assessment Platform",
    description:
      "Automated athlete movement assessment platform replacing manual evaluation. Combines RTMDet human detection and RTMPose keypoint tracking with a biomechanics rule engine. Achieved 650+ req/sec throughput and 91% test coverage on AWS App Runner.",
    technologies: [
      "Python 3.11",
      "FastAPI",
      "MMDeploy",
      "MMDetection",
      "PyTorch",
      "OpenCV",
      "Docker",
      "AWS",
      "Prometheus",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
  },
  {
    id: "big-data-pipeline",
    title: "Big Data Analytics Pipeline",
    description:
      "Distributed analytics pipeline streaming and processing large-scale flight data end-to-end. Real-time Kafka ingestion, PySpark transformation, and bucketed Apache Hive warehousing on Databricks File System (DBFS) for BI querying.",
    technologies: [
      "Apache Spark",
      "PySpark",
      "Apache Kafka",
      "Apache Hive",
      "Databricks",
      "Pandas",
      "NumPy",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
  },
  {
    id: "adventure-works",
    title: "AdventureWorks2022 ETL & BI Pipeline",
    description:
      "Comprehensive ETL and Business Intelligence solution. Designed star-schema dimensional models, automated SSIS extraction workflows, and created interactive Power BI executive dashboards for enterprise sales performance.",
    technologies: [
      "SQL Server",
      "SSIS",
      "Power BI",
      "T-SQL",
      "Data Warehousing",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
  },
  {
    id: "codegraph",
    title: "CodeGraph – Autonomous Software Engineering Platform",
    description:
      "Multi-phase autonomous engineering system that maps a codebase into a knowledge-graph, then plans, patches, and iteratively repairs software with automatic rollback on failure. Ships a REST API, MCP server, and CLI developer platform alongside a custom force-directed SVG Studio UI for exploring the graph.",
    technologies: [
      "Python",
      "Neo4j",
      "ChromaDB",
      "FastAPI",
      "MCP",
      "SVG",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
  },
  {
    id: "traceforge-sdk",
    title: "TraceForge SDK – Python Observability & Execution Tracing",
    description:
      "Self-authored, published Python library for tracing and replaying program execution, built to give AI agent pipelines and backend services structured observability. Published to PyPI and actively maintained.",
    technologies: [
      "Python",
      "Observability",
      "JWT",
      "PyPI",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
    demo: "https://pypi.org/project/traceforge/",
  },
  {
    id: "people-movement-analytics",
    title: "People Movement Analytics",
    description:
      "Computer vision system for analyzing pedestrian movement in fixed-camera video. YOLOv8 detection and ByteTrack tracking feed a dual-space pipeline (camera image plane and a homography-projected bird's-eye ground plane) that produces trajectories, heatmaps, multi-zone memberships, and dwell-time analytics. Validated on MOT17 sequences with 7 mathematical conservation invariants, reproducibility checks, and a 222-test suite.",
    technologies: [
      "Python",
      "ByteTrack",
      "Homography",
      "YOLOv8",
      "PyTorch",
      "MOT17",
      "OpenCV",
      "NumPy",
    ],
    github: "https://github.com/Omarkam3l/Portifolio",
    demo: "https://github.com/Omarkam3l/Portifolio",
  },
];
