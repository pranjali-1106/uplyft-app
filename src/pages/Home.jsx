import React from "react";

export default function Home() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f7f5ff",
      minHeight: "100vh",
      color: "#252044",
    },
    hero: {
      padding: "65px 20px",
      textAlign: "center",
      background: "linear-gradient(135deg, #6c4ce3, #a78bfa)",
      color: "white",
    },
    title: {
      fontSize: "42px",
      marginBottom: "15px",
    },
    subtitle: {
      fontSize: "18px",
      lineHeight: "1.7",
      maxWidth: "650px",
      margin: "0 auto 25px",
    },
    button: {
      display: "inline-block",
      padding: "12px 24px",
      margin: "8px",
      borderRadius: "25px",
      background: "white",
      color: "#6c4ce3",
      textDecoration: "none",
      fontWeight: "bold",
    },
    section: {
      padding: "35px 20px",
      textAlign: "center",
    },
    cards: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "25px",
    },
    card: {
      background: "white",
      padding: "25px",
      borderRadius: "16px",
      width: "230px",
      boxShadow: "0 4px 15px rgba(50,30,100,0.10)",
      boxSizing: "border-box",
    },
    icon: {
      fontSize: "35px",
    },
    footer: {
      padding: "20px",
      textAlign: "center",
      background: "#292044",
      color: "white",
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to Uplyft 🚀</h1>

        <p style={styles.subtitle}>
          Your journey to skills, internships, and career success starts here.
          Learn new skills, build your resume, and grow together with a
          community of students.
        </p>

        <a href="/internship" style={styles.button}>
          Explore Internships
        </a>

        <a href="/resumebuilder" style={styles.button}>
          Build Your Resume
        </a>
      </section>

      <section style={styles.section}>
        <h2>Everything You Need to Grow 🌟</h2>
        <p>One platform to learn, prepare, and move forward.</p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <div style={styles.icon}>💼</div>
            <h3>Internship Guidance</h3>
            <p>
              Explore career options, learn useful skills, and prepare for
              internship opportunities.
            </p>
            <a href="/internship">Explore More →</a>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>📄</div>
            <h3>Resume Builder</h3>
            <p>
              Create a professional resume to showcase your education, skills,
              and projects.
            </p>
            <a href="/resumebuilder">Build Resume →</a>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>👥</div>
            <h3>Student Community</h3>
            <p>
              Connect with students, share ideas, and learn together through
              discussions.
            </p>
            <a href="/community">Join Community →</a>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>💻</div>
            <h3>Practice & Improve</h3>
            <p>
              Improve your knowledge through coding practice, projects, and
              continuous learning.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Your Future Starts with One Step ✨</h2>
        <p>
          Discover your interests, develop your skills, and prepare for your
          dream career with Uplyft.
        </p>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 Uplyft | Learn • Connect • Grow</p>
      </footer>
    </div>
  );
}