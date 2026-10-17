import './App.css'

function App() {
return (
<div className="app">
<nav className="navbar">
<h1 className="logo">Uplyft<span>.</span></h1>

    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#internships">Internships</a>
      <a href="#resume">Resume Builder</a>
      <a href="#community">Community</a>
    </div>

    <button className="start-btn">Get Started</button>
  </nav>

  <section className="hero" id="home">
    <div className="hero-content">
      <p className="tagline">YOUR FUTURE STARTS HERE</p>

      <h2>
        Build Your Skills.<br />
        Shape Your <span>Future.</span>
      </h2>

      <p className="description">
        Discover internships, build your resume, practice coding
        and connect with students — all in one place.
      </p>

      <div className="hero-buttons">
        <a href="#internships" className="primary-btn">
          Explore Opportunities
        </a>

        <a href="#community" className="secondary-btn">
          Join Community
        </a>
      </div>
    </div>

    <div className="hero-card">
      <div className="card-icon">🎓</div>
      <h3>Your Career Journey</h3>
      <p>Everything you need to move forward.</p>

      <div className="feature-item">📚 Internship Guidance</div>
      <div className="feature-item">📄 Resume Builder</div>
      <div className="feature-item">💻 DSA Practice</div>
      <div className="feature-item">👥 Student Community</div>
    </div>
  </section>

  <section className="features" id="internships">
    <p className="tagline">EXPLORE. LEARN. GROW.</p>
    <h2>Everything You Need to <span>Level Up</span></h2>

    <div className="feature-grid">
      <div className="feature-box">
        <div className="feature-emoji">🎯</div>
        <h3>Internship Guidance</h3>
        <p>Find opportunities and prepare for your career.</p>
        <a href="#internships">Explore More →</a>
      </div>

      <div className="feature-box" id="resume">
        <div className="feature-emoji">📄</div>
        <h3>Resume Builder</h3>
        <p>Create a professional resume that highlights your skills.</p>
        <a href="#resume">Build Your Resume →</a>
      </div>

      <div className="feature-box" id="community">
        <div className="feature-emoji">👥</div>
        <h3>Student Community</h3>
        <p>Connect with students and learn together.</p>
        <a href="#community">Join Community</a>
      </div>

      <div className="feature-box">
        <div className="feature-emoji">💻</div>
        <h3>DSA Practice</h3>
        <p>Improve your coding and problem-solving skills.</p>
        <a href="#community">Start Practising →</a>
      </div>
    </div>
  </section>

  <footer>
    <h2>Uplyft<span>.</span></h2>
    <p>Learn Together. Grow Together. Succeed Together.</p>
    <p>© 2026 Uplyft Student Platform</p>
  </footer>
</div>

)
}

export default App