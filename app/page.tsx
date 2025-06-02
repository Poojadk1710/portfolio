import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center" }}>
          Hi, I'm <span style={{ color: "#3b82f6" }}>Pooja Kulkarni</span>
        </h1>
        <p style={{ textAlign: "center", maxWidth: 600 }}>
          Full-Stack Developer | XR Enthusiast | ML Explorer<br />
          Currently pursuing my Master's in CS at University of Colorado, Denver.
        </p>

        <div className={styles.ctas}>
          <a
            className={`${styles.primary}`}
            href="/Pooja_Kulkarni_SWE.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            className={`${styles.secondary}`}
            href="/projects"
            rel="noopener noreferrer"
          >
            View Projects
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://linkedin.com/in/pdk17" target="_blank" rel="noopener noreferrer">
          <Image src="/globe.svg" alt="LinkedIn" width={16} height={16} />
          LinkedIn
        </a>
        <a href="https://github.com/Poojadk1710" target="_blank" rel="noopener noreferrer">
          <Image src="/globe.svg" alt="GitHub" width={16} height={16} />
          GitHub
        </a>
      </footer>
    </div>
  );
}
