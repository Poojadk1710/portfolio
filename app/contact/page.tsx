import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
          Contact Me
        </h1>

        <p style={{ textAlign: "center" }}>
          Feel free to reach out by email:
          <br />
          <a
            href="mailto:poojadkulk17@gmail.com"
            style={{
              color: "#3b82f6",
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            poojadkulk17@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
