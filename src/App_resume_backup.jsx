import { useState } from 'react'
import './App.css'

const internships = [
  {
    id: 1,
    title: 'Data Analyst Intern',
    company: 'Data Analytics',
    category: 'Data Analytics',
    mode: 'Remote',
    duration: '3 Months',
    skills: 'Excel, SQL, Python',
    eligibility: 'Students interested in data analysis.',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Data%20Analyst%20Intern'
  },
  {
    id: 2,
    title: 'Web Development Intern',
    company: 'Web Development',
    category: 'IT',
    mode: 'Remote',
    duration: '3 Months',
    skills: 'HTML, CSS, JavaScript',
    eligibility: 'Students learning web development.',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Web%20Development%20Intern'
  },
  {
    id: 3,
    title: 'Python Developer Intern',
    company: 'Software Development',
    category: 'IT',
    mode: 'Hybrid',
    duration: '2 Months',
    skills: 'Python, Programming Basics',
    eligibility: 'BCA, BSc CS and related students.',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Python%20Intern'
  },
  {
    id: 4,
    title: 'Digital Marketing Intern',
    company: 'Digital Marketing',
    category: 'Marketing',
    mode: 'Remote',
    duration: '3 Months',
    skills: 'Communication, Social Media',
    eligibility: 'Students interested in marketing.',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Digital%20Marketing%20Intern'
  },
  {
    id: 5,
    title: 'HR Recruitment Intern',
    company: 'Human Resources',
    category: 'HR',
    mode: 'On-site',
    duration: '2 Months',
    skills: 'Communication, Excel',
    eligibility: 'Students interested in HR and recruitment.',
    link: 'https://www.linkedin.com/jobs/search/?keywords=HR%20Intern'
  },
  {
    id: 6,
    title: 'Business Analyst Intern',
    company: 'Business Analytics',
    category: 'Data Analytics',
    mode: 'Hybrid',
    duration: '3 Months',
    skills: 'Excel, Problem Solving, SQL',
    eligibility: 'Students interested in business analysis.',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Business%20Analyst%20Intern'
  }
]

function App() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    skills: '',
    projects: '',
    objective: ''
  })

  const [showResume, setShowResume] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  function handleChange(event) {
    const { name, value } = event.target

    setDetails({
      ...details,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setShowResume(true)
  }

  const filteredInternships = internships.filter((internship) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      internship.title.toLowerCase().includes(searchText) ||
      internship.skills.toLowerCase().includes(searchText) ||
      internship.company.toLowerCase().includes(searchText)

    const matchesCategory =
      category === 'All' || internship.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">
          Uplyft<span>.</span>
        </h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#internships">Internships</a>
          <a href="#resume-builder">Resume Builder</a>
          <a href="#community">Community</a>
        </div>

        <a href="#internships" className="start-btn">
          Explore Now
        </a>
      </nav>

      {/* HOME */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">YOUR FUTURE STARTS HERE</p>

          <h2>
            Build Your Skills.
            <br />
            Shape Your <span>Future.</span>
          </h2>

          <p className="description">
            Discover internships, create your resume, practise coding
            and connect with students — all in one place.
          </p>

          <div className="hero-buttons">
            <a href="#internships" className="primary-btn">
              Explore Internships
            </a>

            <a href="#resume-builder" className="secondary-btn">
              Build Your Resume
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

      {/* INTERNSHIP GUIDANCE */}
      <section className="internship-section" id="internships">
        <p className="tagline">FIND YOUR NEXT OPPORTUNITY</p>

        <h2>
          Explore <span>Internships</span>
        </h2>

        <p className="resume-intro">
          Discover opportunities and find roles that match your skills.
        </p>

        <div className="internship-search">
          <input
            type="search"
            placeholder="Search by role, skill or field..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="IT">IT</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">Human Resources</option>
          </select>
        </div>

        <div className="internship-grid">
          {filteredInternships.map((internship) => (
            <div className="internship-card" key={internship.id}>
              <div className="internship-icon">💼</div>

              <span className="internship-category">
                {internship.category}
              </span>

              <h3>{internship.title}</h3>

              <p className="internship-company">
                Field: {internship.company}
              </p>

              <div className="internship-info">
                <p>📍 {internship.mode}</p>
                <p>🗓️ {internship.duration}</p>
              </div>

              <h4>Required Skills</h4>
              <p>{internship.skills}</p>

              <h4>Eligibility</h4>
              <p>{internship.eligibility}</p>

              <a
                className="primary-btn apply-btn"
                href={internship.link}
                target="_blank"
                rel="noreferrer"
              >
                Search & Apply ↗
              </a>
            </div>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <p className="no-results">
            No matching internships found. Try another search.
          </p>
        )}

        <p className="demo-note">
          Note: These are sample internship categories, not verified
          vacancies. Use the links to search current opportunities and
          check eligibility, stipend and deadlines before applying.
        </p>
      </section>

      {/* RESUME BUILDER */}
      <section className="resume-section" id="resume-builder">
        <p className="tagline">CREATE YOUR PROFESSIONAL PROFILE</p>

        <h2>
          Build Your <span>Resume</span>
        </h2>

        <p className="resume-intro">
          Enter your details below to create your student resume.
        </p>

        <form className="resume-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={details.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={details.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={details.phone}
            onChange={handleChange}
          />

          <label>Education</label>
          <textarea
            name="education"
            placeholder="Example: BCA, Final Year"
            value={details.education}
            onChange={handleChange}
            required
          />

          <label>Skills</label>
          <textarea
            name="skills"
            placeholder="Example: Excel, Python, SQL"
            value={details.skills}
            onChange={handleChange}
            required
          />

          <label>Projects</label>
          <textarea
            name="projects"
            placeholder="Describe your projects"
            value={details.projects}
            onChange={handleChange}
          />

          <label>Career Objective</label>
          <textarea
            name="objective"
            placeholder="Write your career objective"
            value={details.objective}
            onChange={handleChange}
          />

          <button type="submit" className="primary-btn">
            Generate My Resume
          </button>
        </form>

        {showResume && (
          <div className="resume-preview">
            <h2>{details.name}</h2>

            <p>
              {details.email}
              {details.phone ? ` | ${details.phone}` : ''}
            </p>

            <hr />

            <h3>Career Objective</h3>
            <p>{details.objective || 'Not provided'}</p>

            <h3>Education</h3>
            <p>{details.education}</p>

            <h3>Skills</h3>
            <p>{details.skills}</p>

            <h3>Projects</h3>
            <p>{details.projects || 'Not provided'}</p>

            <button
              type="button"
              className="primary-btn"
              onClick={() => window.print()}
            >
              Print / Save as PDF
            </button>
          </div>
        )}
      </section>

      {/* OTHER FEATURES */}
      <section className="features" id="community">
        <p className="tagline">EXPLORE. LEARN. GROW.</p>

        <h2>
          Everything You Need to <span>Level Up</span>
        </h2>

        <div className="feature-grid">
          <div className="feature-box">
            <div className="feature-emoji">🎯</div>
            <h3>Internship Guidance</h3>
            <p>Search roles and prepare for your career.</p>
            <a href="#internships">Explore Internships →</a>
          </div>

          <div className="feature-box">
            <div className="feature-emoji">📄</div>
            <h3>Resume Builder</h3>
            <p>Create a resume that highlights your skills.</p>
            <a href="#resume-builder">Build Your Resume →</a>
          </div>

          <div className="feature-box">
            <div className="feature-emoji">👥</div>
            <h3>Student Community</h3>
            <p>A place to learn and connect with other students.</p>
            <a href="#community">Community Preview</a>
          </div>

          <div className="feature-box">
            <div className="feature-emoji">💻</div>
            <h3>DSA Practice</h3>
            <p>Improve your coding and problem-solving skills.</p>
            <a href="#community">Coming Soon</a>
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