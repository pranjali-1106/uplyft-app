import React, { useState } from "react";

const internships = [
  {
    title: "Data Analyst Intern",
    category: "Data Analytics",
    level: "Beginner",
    duration: "2–3 Months",
    skills: "Excel, SQL, Data Visualization",
    description:
      "Learn to organize, analyze, and understand data using practical examples.",
  },
  {
    title: "Web Development Intern",
    category: "Web Development",
    level: "Beginner",
    duration: "2–3 Months",
    skills: "HTML, CSS, JavaScript",
    description:
      "Learn to create responsive websites and understand frontend development.",
  },
  {
    title: "Python Programming Intern",
    category: "Programming",
    level: "Beginner",
    duration: "1–3 Months",
    skills: "Python, Problem Solving",
    description:
      "Practice Python fundamentals and develop small programming projects.",
  },
  {
    title: "Digital Marketing Intern",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "2 Months",
    skills: "SEO, Social Media, Communication",
    description:
      "Understand online marketing, social media strategies, and content planning.",
  },
  {
    title: "Human Resources Intern",
    category: "Management",
    level: "Beginner",
    duration: "2–3 Months",
    skills: "Communication, Excel, Teamwork",
    description:
      "Learn recruitment basics, employee coordination, and HR documentation.",
  },
  {
    title: "UI/UX Design Intern",
    category: "Design",
    level: "Beginner",
    duration: "2 Months",
    skills: "Design Thinking, Wireframes, Figma",
    description:
      "Learn how to design user-friendly digital experiences and interfaces.",
  },
];

export default function Internship() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedInternship, setSelectedInternship] = useState(null);

  const categories = [
    "All",
    ...new Set(internships.map((item) => item.category)),
  ];

  const filteredInternships = internships.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.skills.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="internship-page">
      <style>{`
        .internship-page {
          min-height: 100vh;
          padding: 35px 20px;
          background: #f5f3ff;
          color: #252542;
          font-family: Arial, sans-serif;
        }

        .internship-container {
          max-width: 1100px;
          margin: auto;
        }

        .internship-hero {
          background: linear-gradient(135deg, #5427a8, #8b5cf6);
          color: white;
          padding: 40px 25px;
          border-radius: 20px;
          text-align: center;
          margin-bottom: 30px;
        }

        .internship-hero h1 {
          font-size: 32px;
          margin: 0 0 12px;
        }

        .internship-hero p {
          line-height: 1.6;
          margin: 0;
        }

        .internship-search {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          border: 1px solid #d8d0f0;
          border-radius: 10px;
          font-size: 15px;
          margin-bottom: 16px;
          background: white;
          color: #252542;
        }

        .internship-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .internship-filter {
          border: 1px solid #d8d0f0;
          background: white;
          color: #5427a8;
          padding: 9px 14px;
          border-radius: 20px;
          cursor: pointer;
        }

        .internship-filter.active {
          background: #5427a8;
          color: white;
        }

        .internship-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .internship-card {
          background: white;
          padding: 22px;
          border-radius: 15px;
          border: 1px solid #e8e2fa;
          box-shadow: 0 4px 15px rgba(40, 20, 80, 0.06);
          display: flex;
          flex-direction: column;
        }

        .internship-badge {
          display: inline-block;
          background: #eee7ff;
          color: #5427a8;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
          align-self: flex-start;
        }

        .internship-card h2 {
          font-size: 19px;
          margin: 15px 0 10px;
        }

        .internship-card p {
          color: #5e5e73;
          line-height: 1.6;
          font-size: 14px;
        }

        .internship-skills {
          font-size: 13px;
          color: #45455c;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .internship-button {
          width: 100%;
          margin-top: auto;
          padding: 11px;
          background: #5427a8;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }

        .internship-button:hover {
          background: #402080;
        }

        .internship-details {
          background: white;
          padding: 24px;
          border-radius: 15px;
          margin-top: 25px;
          border: 1px solid #d8d0f0;
        }

        .internship-empty {
          text-align: center;
          padding: 35px;
          background: white;
          border-radius: 12px;
        }

        @media (max-width: 850px) {
          .internship-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 550px) {
          .internship-grid {
            grid-template-columns: 1fr;
          }

          .internship-hero h1 {
            font-size: 25px;
          }
        }
      `}</style>

      <div className="internship-container">
        <section className="internship-hero">
          <h1>Explore Internships 🚀</h1>
          <p>
            Discover career opportunities, build useful skills,
            and take your first step toward your dream job.
          </p>
        </section>

        <input
          className="internship-search"
          type="text"
          placeholder="Search internships or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="internship-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "internship-filter active"
                  : "internship-filter"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="internship-grid">
          {filteredInternships.map((item) => (
            <article className="internship-card" key={item.title}>
              <span className="internship-badge">{item.level}</span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <div className="internship-skills">
                <strong>Duration:</strong> {item.duration}
                <br />
                <strong>Skills:</strong> {item.skills}
              </div>

              <button
                className="internship-button"
                onClick={() => setSelectedInternship(item)}
              >
                View Details
              </button>
            </article>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <div className="internship-empty">
            <h3>No internships found</h3>
            <p>Try searching for another skill or category.</p>
          </div>
        )}

        {selectedInternship && (
          <section className="internship-details">
            <h2>{selectedInternship.title}</h2>

            <p>
              <strong>Category:</strong>{" "}
              {selectedInternship.category}
            </p>

            <p>
              <strong>Experience Level:</strong>{" "}
              {selectedInternship.level}
            </p>

            <p>
              <strong>Duration:</strong>{" "}
              {selectedInternship.duration}
            </p>

            <p>
              <strong>Recommended Skills:</strong>{" "}
              {selectedInternship.skills}
            </p>

            <p>{selectedInternship.description}</p>

            <p>
              <strong>Suggested Roadmap:</strong> Learn the basic
              concepts, practise with small tasks, create a project,
              and prepare your resume before applying.
            </p>

            <button
              className="internship-button"
              onClick={() => setSelectedInternship(null)}
            >
              Close Details
            </button>
          </section>
        )}
      </div>
    </div>
  );
}