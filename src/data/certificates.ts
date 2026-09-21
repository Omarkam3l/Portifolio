export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  pdfUrl: string;
  skills?: string[];
}

export const certificatesData: CertificateItem[] = [
  {
    id: "nvidia-genai-beginner",
    title: "Generative AI & Prompt Engineering (Beginner Level - 36 hrs)",
    issuer: "NVIDIA Deep Learning Institute (DLI) via ITI",
    date: "2024",
    description: "Prompt Engineering, Augmenting LLMs with RAG & Vector Embeddings",
    image: "/certificates/ilovepdf_pages-to-jpg/My Learning _ NVIDIA_page-0001.jpg",
    pdfUrl: "/certificates/Course_Certificate_En.pdf",
    skills: ["Prompt Engineering", "RAG", "LLMs", "Vector Embeddings"],
  },
  {
    id: "huawei-hcia-ai",
    title: "Huawei Certified ICT Associate - HCIA-AI V3.5",
    issuer: "Huawei / NTI - Artificial Intelligence Track",
    date: "March 2024",
    description: "Huawei Certified ICT Associate - Artificial Intelligence & Deep Neural Networks",
    image: "/certificates/HCIA-AI V3.5 Course/Omar Kamel Elsharaby_page-0001.jpg",
    pdfUrl: "/certificates/HCIA-AI V3.5 Course/Omar Kamel Elsharaby.pdf",
    skills: ["HCIA-AI", "Neural Networks", "Deep Learning", "Huawei AI"],
  },
  {
    id: "depi-ai-datascience",
    title: "Digital Egypt Pioneers Initiative (DEPI) - AI & Data Science",
    issuer: "Ministry of Communications & Information Technology",
    date: "October 2024",
    description: "Artificial Intelligence, Machine Learning & Analytical Pipelines",
    image: "/certificates/1-Omar Kamel Sayed/1-Omar Kamel Sayed-1.png",
    pdfUrl: "/certificates/1-Omar Kamel Sayed/1-Omar Kamel Sayed.pdf",
    skills: ["AI Pipelines", "Machine Learning", "Data Science", "DEPI"],
  },
  {
    id: "depi-data-engineering",
    title: "DEPI Certification - Microsoft Data Engineering Profile",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "October 2024",
    description: "Microsoft Data Engineering, Data Warehousing & Business Intelligence Dashboards",
    image: "/certificates/1-Omar Kamel Sayed/Omar Kamel Sayed-1.png",
    pdfUrl: "/certificates/1-Omar Kamel Sayed/Omar Kamel Sayed.pdf",
    skills: ["Data Engineering", "Data Warehousing", "Power BI", "ETL"],
  },
  {
    id: "zewail-ai-systems",
    title: "Artificial Intelligence & Application Systems",
    issuer: "Zewail City of Science and Technology",
    date: "August 2024",
    description: "Advanced Workshop in Artificial Intelligence & Robotics Applications",
    image: "/certificates/ZEWAIL/ZEWAIL.jpeg",
    pdfUrl: "/certificates/ZEWAIL/ZEWAIL.jpeg",
    skills: ["Robotics Applications", "AI Systems", "Zewail City"],
  },
  {
    id: "nvidia-genai-advanced",
    title: "Generative AI & Building RAG Agents (Advanced Level - 100 hrs)",
    issuer: "NVIDIA Deep Learning Institute (DLI) via ITI",
    date: "2024 - 2025",
    description: "Deep Learning Basics, Building RAG Agents with LLMs, Multi-Agent Capstone Project",
    image: "/certificates/NVIDIA DLI Training Program - Generative AI (Advanced Level)_page-0001.jpg",
    pdfUrl: "/certificates/NVIDIA DLI Training Program - Generative AI (Advanced Level).pdf",
    skills: ["RAG Agents", "Multi-Agent Systems", "LangGraph", "NVIDIA DLI"],
  },
  {
    id: "nti-huawei-talent",
    title: "NTI/Huawei Egyptian Talent Academy - Artificial Intelligence",
    issuer: "Ministry of Communications & Information Technology / NTI / Huawei",
    date: "February 2025",
    description: "80-hour Artificial Intelligence (AI) track, Egyptian Talent Academy — completed with a score of 87%",
    image: "/certificates/HCIA-AI V3.5 Course/HCIA-AI V3.5 Course/HCIA-AI V3.5 Course-1.png",
    pdfUrl: "/certificates/HCIA-AI V3.5 Course/HCIA-AI V3.5 Course.pdf",
    skills: ["NTI", "Huawei Talent Academy", "AI Track"],
  },
];
