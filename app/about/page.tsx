import styles from "../page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "24px" }}>
          About Me
        </h1>

        {/* Education */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>🎓 Education</h2>
          <ul>
            <li>
              <strong>University of Colorado, Denver</strong> – MS in Computer Science (Aug 2023 – Dec 2025)
            </li>
            <li>
              <strong>AISSMS COE, Pune</strong> – BE in Electronics &amp; Telecommunication, Honors in AR/VR (Aug 2018 – May 2022)
            </li>
          </ul>
        </section>

        <br />

        {/* Skills */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>🧠 Skills</h2>
          <ul>
            <li><strong>Languages:</strong> C, C++, Python, Java, Kotlin, JavaScript</li>
            <li><strong>Frontend:</strong> React.js, Next.js (App Router), Angular, Shadcn UI, Bootstrap</li>
            <li><strong>Backend:</strong> Node.js, Flask, C#/.NET, REST APIs</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, SQLite, Firebase, Supabase</li>
            <li><strong>DevOps &amp; Cloud:</strong> Docker, Kubernetes, GitHub, Jenkins, Vercel, AWS, GCP</li>
            <li><strong>AR/VR &amp; ML:</strong> Unity, Unreal Engine, Blender, Hugging Face Transformers, OpenCV</li>
          </ul>
        </section>

        <br />

        {/* Research */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>🔬 Research</h2>
          <ul>
            <li>
              <strong>IEEE TENSYMP 2022:</strong> Satellite-based crop monitoring using Sentinel-2 API + ML
            </li>
            <li>
              <strong>Style Transfer (NLP):</strong> mT5 model to convert Shakespearean to Modern English
            </li>
            <li>
              <strong>Scheduling Algorithms:</strong> DRR-based CPU schedulers in Microkernel OS using C &amp; Assembly
            </li>
          </ul>
        </section>

        <br />

        {/* Achievements */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>🏆 Achievements</h2>
          <ul>
            <li>🏅 Winner – Smart India Hackathon 2019 (Hardware)</li>
            <li>🏅 Finalist – SIH 2020 (Software)</li>
            <li>📢 CITP Student Placement Coordinator (2021–2022)</li>
            <li>🤖 IBM Call for Code &amp; Swadeshi Microprocessor Challenge Participant</li>
          </ul>
        </section>

        <br />

        {/* Interests */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>💖 Interests</h2>
        <p>
        I am passionate about immersive technologies like AR/VR, full-stack SaaS development, and using machine learning to solve real-world problems.
        I enjoy building user-centric applications, participating in hackathons, and contributing to impactful domains like education and agriculture.
        Outside tech, I love public speaking, mentoring, exploring cultures, and reading about space and emerging tech.
        </p>

        </section>
      </main>
    </div>
  );
}
