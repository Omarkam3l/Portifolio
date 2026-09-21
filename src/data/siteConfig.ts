import { SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  siteName: "Omar Sharaby | AI & Systems Portfolio",
  title: "Omar Sharaby — AI & Systems Engineer",
  description:
    "Production-quality engineering portfolio focusing on Code Intelligence, Graph RAG, Runtime Observability, and Scalable Systems.",
  url: "https://omarsharaby.dev",
  author: "Omar Sharaby",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Focus", href: "#focus" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Learning", href: "#learning" },
    { label: "Contact", href: "#contact" },
  ],
  theme: {
    defaultMode: "dark",
    accentColor: "#38bdf8", // Sky blue / cyan tech accent
  },
  seo: {
    ogImage: "/og-image.png",
    twitterHandle: "@omarsharaby",
    keywords: [
      "AI Engineer",
      "Graph RAG",
      "Systems Engineer",
      "Software Architecture",
      "Code Intelligence",
      "Next.js Portfolio",
      "Python Tracing",
      "Observability",
    ],
  },
};
