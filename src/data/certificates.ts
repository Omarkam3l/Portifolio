export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: "deep-learning-spec",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    issueDate: "2024",
    credentialUrl: "https://coursera.org",
    credentialId: "[ADD CREDENTIAL ID]",
    skills: ["Neural Networks", "CNNs", "Sequence Models", "Optimization", "TensorFlow"],
    description: "Foundational deep learning curriculum covering multi-layer perceptrons, convolutional networks, attention mechanisms, and hyperparameter tuning.",
  },
  {
    id: "math-for-ml",
    title: "Mathematics for Machine Learning",
    issuer: "Imperial College London",
    issueDate: "2024",
    credentialUrl: "https://coursera.org",
    credentialId: "[ADD CREDENTIAL ID]",
    skills: ["Linear Algebra", "Multivariate Calculus", "PCA", "Vector Spaces"],
    description: "Core mathematical foundations for data science and machine learning algorithms.",
  },
  {
    id: "neo4j-certified-professional",
    title: "Neo4j Certified Professional",
    issuer: "Neo4j GraphAcademy",
    issueDate: "2024",
    credentialUrl: "https://graphacademy.neo4j.com",
    credentialId: "[ADD CREDENTIAL ID]",
    skills: ["Cypher Query Language", "Graph Data Modeling", "Graph Traversal", "Index Optimization"],
    description: "Property graph data modeling, Cypher query optimization, and graph schema design.",
  },
  {
    id: "placeholder-cert",
    title: "[ADD YOUR CERTIFICATE TITLE]",
    issuer: "[ADD ISSUING ORGANIZATION]",
    issueDate: "[YEAR]",
    credentialUrl: "https://example.com",
    credentialId: "[ADD CREDENTIAL ID / LINK]",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    description: "Replace this entry with any additional technical certification, cloud accreditation, or specialization.",
  },
];
