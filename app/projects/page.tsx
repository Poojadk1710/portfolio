import styles from "../page.module.css";

const projects = [
  {
    title: "AI-Powered Blog Generator",
    description:
      "Full-stack SaaS platform using Next.js 14, Supabase, and OpenAI for streaming blog content generation. Includes modular UI, Server Actions, and secure role-based access.",
    link: "https://github.com/Poojadk1710", // update with real link if needed
  },
  {
    title: "Shakespearean to Modern English Translator",
    description:
      "Fine-tuned mT5 Transformer to convert old English to modern English. Built data pipelines, used Selenium for web scraping, and deployed using Flask + SQLite.",
    link: "#",
  },
  {
    title: "Dynamic Round Robin on Microkernel OS",
    description:
      "Implemented and compared CPU scheduling strategies using C and Assembly on a microkernel OS. Evaluated turnaround time, waiting time, and responsiveness.",
    link: "#",
  },
  {
    title: "IEEE Remote Sensing Crop Monitoring",
    description:
      "Used Sentinel-2 satellite imagery and NDVI/NDRE indices to forecast crop stress zones. Published in IEEE TENSYMP 2022. Integrated ML with satellite data.",
    link: "https://ieeexplore.ieee.org/document/9864416",
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
          Projects
        </h1>
        <ul style={{ listStyle: "none", padding: 0, maxWidth: 800 }}>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: "24px" }}>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid var(--gray-alpha-200)",
                  borderRadius: "12px",
                  background: "var(--gray-alpha-100)",
                }}
              >
                <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{project.title}</h2>
                <p style={{ margin: "12px 0", lineHeight: 1.6 }}>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#3b82f6",
                    textDecoration: "underline",
                    fontWeight: 500,
                  }}
                >
                  View Project →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
