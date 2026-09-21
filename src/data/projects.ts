import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "codegraph-rag",
    slug: "codegraph-rag",
    title: "CodeGraph RAG",
    summary:
      "A code intelligence and repository reasoning system powered by knowledge graphs, hybrid retrieval, and bounded multi-hop graph traversal.",
    description:
      "CodeGraph RAG ingests software repositories into a semantic code knowledge graph backed by Neo4j. By combining lexical, vector, and graph-traversal retrieval methods, it enables agents to execute investigation workflows, navigate call hierarchies, plan structural code modifications, and perform iterative patch repair with Git/GitHub integration and adversarial evaluation.",
    category: "AI & RAG",
    technologies: [
      "Python",
      "Neo4j",
      "Graph RAG",
      "Tree-sitter",
      "LangChain",
      "Cypher",
      "Vector Embeddings",
    ],
    featured: true,
    links: {
      github: "[ADD GITHUB LINK]",
      demo: "[ADD DEMO LINK]",
      docs: "[ADD DOCS LINK]",
    },
    metrics: [
      {
        label: "Retrieval Paradigm",
        value: "Hybrid Vector + Graph",
        detail: "Combines dense embeddings with bounded Neo4j multi-hop traversals",
      },
      {
        label: "Traversal Depth",
        value: "Bounded Multi-Hop",
        detail: "Constrained exploration prevents context explosion across complex ASTs",
      },
      {
        label: "Evaluation",
        value: "Adversarial Suite",
        detail: "Tested against synthetic and historical repository bug scenarios",
      },
    ],
    architecture: {
      nodes: [
        { id: "repo", label: "Git Repository", role: "Source code & commit history", type: "input" },
        { id: "parser", label: "AST Parser (Tree-sitter)", role: "Extracts classes, functions, calls", type: "process" },
        { id: "graph_db", label: "Neo4j Graph Store", role: "Stores symbol dependencies & hierarchies", type: "storage" },
        { id: "embed_db", label: "Vector Index", role: "Semantic docstring & signature embeddings", type: "storage" },
        { id: "router", label: "Hybrid Query Router", role: "Routes query to vector + Cypher traversal", type: "process" },
        { id: "agent", label: "Investigation Agent", role: "Multi-hop path exploration & patch repair", type: "process" },
        { id: "output", label: "Verified Patch & Plan", role: "Validated change plan with diff preview", type: "output" },
      ],
      edges: [
        { from: "repo", to: "parser", label: "parse AST" },
        { from: "parser", to: "graph_db", label: "populate edges" },
        { from: "parser", to: "embed_db", label: "embed symbols" },
        { from: "router", to: "graph_db", label: "Cypher query" },
        { from: "router", to: "embed_db", label: "similarity search" },
        { from: "graph_db", to: "agent", label: "graph context" },
        { from: "embed_db", to: "agent", label: "dense context" },
        { from: "agent", to: "output", label: "synthesize fix" },
      ],
    },
    highlights: [
      "Repository ingestion using Tree-sitter for robust multi-language AST extraction.",
      "Neo4j knowledge graph schema mapping callers, callees, classes, inheritance, and imports.",
      "Bounded multi-hop reasoning preventing hallucinations during deep dependency traversals.",
      "Automated change planning with iterative patch repair and Git diff verification.",
      "Adversarial evaluation pipeline measuring precision on complex cross-file code navigation.",
    ],
    challenges: [
      "Managing token context limits when traversing wide call graphs in monolithic repositories.",
      "Resolving dynamic references and polyglot dependency edges accurately.",
      "Balancing retrieval latency between deep graph traversals and shallow vector lookups.",
    ],
    solutions: [
      "Implemented bounded multi-hop constraints that prune irrelevant branch paths based on dependency centrality.",
      "Created a hybrid retrieval router combining semantic vector search for candidate entry points with Cypher graph queries for precise call paths.",
      "Added iterative patch repair loops that test proposed edits against repository syntax checks before finalizing.",
    ],
    results: [
      "Achieved structured code navigation that outperforms naive chunk-based RAG on multi-file dependencies.",
      "Enabled end-to-end investigation workflows from high-level problem descriptions to verified code patches.",
      "Produced deterministic, inspectable reasoning chains through explicit graph edge provenance.",
    ],
    images: ["/images/projects/codegraph-rag.svg"],
  },
  {
    id: "traceforge",
    slug: "traceforge",
    title: "TraceForge",
    summary:
      "A Python runtime observability and execution tracing system to uncover hidden execution behavior during testing and diagnosis.",
    description:
      "TraceForge provides lightweight runtime instrumentation for Python applications. By capturing function spans, activities, and discrete runtime events through an in-memory event bus and recorder, TraceForge compiles execution sessions into structured execution graphs. Developers can inspect execution nodes, identify runtime anomalies, and diagnose testing failures with granular deterministic visibility.",
    category: "Systems & Backend",
    technologies: [
      "Python",
      "Runtime Instrumentation",
      "Execution Graphs",
      "Event Bus",
      "AsyncIO",
      "Plugin SDK",
    ],
    featured: true,
    links: {
      github: "[ADD GITHUB LINK]",
      demo: "[ADD DEMO LINK]",
      docs: "[ADD DOCS LINK]",
    },
    metrics: [
      {
        label: "Granularity",
        value: "Span & Event Level",
        detail: "Captures function entrances, exits, exceptions, and activity contexts",
      },
      {
        label: "Representation",
        value: "Directed Execution Graph",
        detail: "Maps caller-callee causal execution timelines into queryable node DAGs",
      },
      {
        label: "Extensibility",
        value: "Modular Plugin SDK",
        detail: "Allows custom reporters, exporters, and filtering hooks",
      },
    ],
    architecture: {
      nodes: [
        { id: "app", label: "Target Python Runtime", role: "Monitored execution code", type: "input" },
        { id: "hook", label: "Instrumentation Hooks", role: "Intercepts function spans & activities", type: "process" },
        { id: "bus", label: "Event Bus", role: "Decoupled in-memory asynchronous dispatcher", type: "process" },
        { id: "recorder", label: "Session Recorder", role: "Aggregates events into recording sessions", type: "storage" },
        { id: "graph_builder", label: "Execution Graph Builder", role: "Constructs execution nodes and causal edges", type: "process" },
        { id: "viewer", label: "Diagnostic Graph & Exporter", role: "Visualizes traces and outputs session reports", type: "output" },
      ],
      edges: [
        { from: "app", to: "hook", label: "execute" },
        { from: "hook", to: "bus", label: "emit event" },
        { from: "bus", to: "recorder", label: "dispatch" },
        { from: "recorder", to: "graph_builder", label: "serialize session" },
        { from: "graph_builder", to: "viewer", label: "render DAG" },
      ],
    },
    highlights: [
      "Non-invasive Python runtime instrumentation capturing function calls, arguments, and return values.",
      "Asynchronous in-memory event bus decoupling recording overhead from main thread execution.",
      "Structured recording sessions organizing related traces by test suite or diagnostic run.",
      "Causal execution graph construction highlighting execution bottlenecks and hidden exception cascades.",
      "Plugin SDK allowing custom storage backends and visualization adapters.",
    ],
    challenges: [
      "Minimizing execution overhead in tight loops and CPU-bound Python workloads.",
      "Handling deep recursive stacks without excessive memory consumption.",
      "Preserving causal order across asynchronous task switches and threads.",
    ],
    solutions: [
      "Engineered selective instrumentation filters and sampling rules to bypass high-frequency leaf routines.",
      "Structured events into lean contiguous buffer frames before flushing to session files.",
      "Attached unique trace and span tokens to thread-local and context-variable storage for accurate causal linking.",
    ],
    results: [
      "Provides transparent execution visualization that pinpoints failing test paths quickly.",
      "Eliminates guesswork in complex Python codebases by delivering structured runtime graphs.",
      "Enables automated verification runs with exportable session artifacts.",
    ],
    images: ["/images/projects/traceforge.svg"],
  },
  {
    id: "kathir",
    slug: "kathir",
    title: "Kathir (AI Surplus-Food Platform)",
    summary:
      "An AI-powered surplus-food platform connecting restaurants, donors, and NGOs to minimize food waste and optimize distribution.",
    description:
      "Kathir is a modern food rescue platform built with Flutter and Supabase. The system features AI-assisted meal discovery, intelligent surplus recommendations, restaurant donation tooling, NGO request workflows, and AI meal creation suggestions to turn available surplus items into coordinated meals efficiently.",
    category: "AI & RAG",
    technologies: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "AI Recommendation",
      "REST APIs",
    ],
    featured: false,
    links: {
      github: "[ADD GITHUB LINK]",
      demo: "[ADD DEMO LINK]",
    },
    metrics: [
      {
        label: "Platform",
        value: "Cross-Platform Mobile",
        detail: "Built with Flutter for restaurant and NGO mobile access",
      },
      {
        label: "Backend",
        value: "Supabase + Edge Functions",
        detail: "Real-time updates on available surplus and donation claims",
      },
      {
        label: "AI Engine",
        value: "Meal Discovery & Matching",
        detail: "Personalized matching between donor offerings and NGO intake needs",
      },
    ],
    architecture: {
      nodes: [
        { id: "donor", label: "Restaurant / Donor App", role: "Surplus listing & inventory input", type: "input" },
        { id: "ngo", label: "NGO / Beneficiary App", role: "Food requirements & claim requests", type: "input" },
        { id: "supabase", label: "Supabase Backend", role: "Real-time DB, Auth, and Edge Functions", type: "storage" },
        { id: "ai_match", label: "AI Matching & Recipe Engine", role: "Surplus grouping & distribution matching", type: "process" },
        { id: "notify", label: "Notification & Logistics", role: "Pickup scheduling and fulfillment alerts", type: "output" },
      ],
      edges: [
        { from: "donor", to: "supabase", label: "publish surplus" },
        { from: "ngo", to: "supabase", label: "submit request" },
        { from: "supabase", to: "ai_match", label: "trigger matching" },
        { from: "ai_match", to: "supabase", label: "generate match batch" },
        { from: "supabase", to: "notify", label: "dispatch alerts" },
      ],
    },
    highlights: [
      "Mobile client built with Flutter delivering unified experience across Android and iOS.",
      "Supabase real-time subscriptions notifying nearby NGOs instantly when food becomes available.",
      "AI-assisted meal discovery suggesting viable recipe and meal combinations from surplus ingredients.",
      "Role-based workflows separating restaurant donation portals from NGO logistics management.",
      "Audit trail tracking donation handoffs and completed rescue distributions.",
    ],
    challenges: [
      "Handling perishable food time windows requiring rapid notification and claim turnaround.",
      "Accommodating varied dietary, allergen, and storage requirements among recipient organizations.",
    ],
    solutions: [
      "Implemented real-time geolocation filtering so surplus is offered first to closest active organizations.",
      "Structured strict dietary tag metadata in Supabase to guarantee matching safety before claim confirmation.",
    ],
    results: [
      "Seamless digital handoff between commercial kitchens and non-profit distribution centers.",
      "Clear operational transparency with zero guesswork on food availability.",
    ],
    images: ["/images/projects/kathir.svg"],
  },
  {
    id: "vision-heatmap-analytics",
    slug: "vision-heatmap-analytics",
    title: "Spatial Heatmap & Vision Analytics Placeholder",
    summary:
      "A computer-vision analytics pipeline prototype for spatial occupancy tracking and surface activity heatmapping.",
    description:
      "An exploratory computer-vision pipeline tracking spatial movement patterns and generating surface density heatmaps. Designed as a clean placeholder for upcoming computer-vision research and edge deployments.",
    category: "Computer Vision",
    technologies: [
      "Python",
      "OpenCV",
      "PyTorch",
      "NumPy",
      "Heatmap Generation",
    ],
    featured: false,
    links: {
      github: "[ADD GITHUB LINK]",
      demo: "[ADD DEMO LINK]",
    },
    metrics: [
      {
        label: "Status",
        value: "Exploratory Prototype",
        detail: "Configurable placeholder for computer vision experiments",
      },
      {
        label: "Processing",
        value: "Frame Density Mapping",
        detail: "Calculates spatial dwell time and cumulative intensity matrices",
      },
    ],
    architecture: {
      nodes: [
        { id: "feed", label: "Video Stream / Frame Input", role: "Raw video feed input", type: "input" },
        { id: "detector", label: "Object Detector / Tracker", role: "Extracts bounding boxes & centroids", type: "process" },
        { id: "accumulator", label: "Spatial Accumulator", role: "Aggregates 2D coordinate frequency", type: "storage" },
        { id: "render", label: "Heatmap Overlay", role: "Gaussian blur & color gradient mapping", type: "output" },
      ],
      edges: [
        { from: "feed", to: "detector", label: "frame stream" },
        { from: "detector", to: "accumulator", label: "centroid coords" },
        { from: "accumulator", to: "render", label: "density matrix" },
      ],
    },
    highlights: [
      "Modular pipeline architecture for swapping detection backends.",
      "Continuous coordinate accumulation with exponential decay for temporal tracking.",
      "Clean separation between frame capture, tracking, and graphic rendering.",
    ],
    challenges: [
      "Handling varying camera angles and perspective distortion without costly manual calibration.",
    ],
    solutions: [
      "Supported 4-point homography transform matrix to map perspective view onto top-down 2D floor plan.",
    ],
    results: [
      "Provides structured visual density representations without storing raw video frames.",
    ],
    images: ["/images/projects/vision-heatmap.svg"],
  },
];
