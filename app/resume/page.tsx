import styles from "../page.module.css";

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
          My Resume
        </h1>

        <iframe
          src="/Pooja_Kulkarni_SWE.pdf"
          width="100%"
          height="600px"
          style={{
            maxWidth: "800px",
            borderRadius: "8px",
            border: "1px solid var(--gray-alpha-200)",
            background: "var(--gray-alpha-100)",
          }}
        />

        <a
          href="/Pooja_Kulkarni_SWE.pdf"
          download
          className={`${styles.primary}`}
          style={{ marginTop: "24px", textDecoration: "none" }}
        >
          Download Resume
        </a>
      </main>
    </div>
  );
}
