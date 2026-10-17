import React, { useState } from "react";

export default function Resumebuilder() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    objective: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
    certifications: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    marginBottom: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "15px",
    backgroundColor: "#ffffff",
    color: "#222222",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "600",
    color: "#30304d",
    fontSize: "14px",
  };

  const sectionStyle = {
    backgroundColor: "#ffffff",
    padding: "22px",
    borderRadius: "14px",
    marginBottom: "20px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.07)",
  };

  return (
    <div className="resume-page">
      <style>{`
        .resume-page {
          min-height: 100vh;
          padding: 30px 16px;
          background: #f4f3ff;
          color: #252542;
          font-family: Arial, sans-serif;
        }

        .resume-container {
          max-width: 900px;
          margin: auto;
        }

        .resume-heading {
          text-align: center;
          color: #5427a8;
          margin-bottom: 8px;
        }

        .resume-subtitle {
          text-align: center;
          color: #55556b;
          margin-bottom: 28px;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .resume-full {
          grid-column: 1 / -1;
        }

        .resume-button {
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          margin: 5px;
        }

        .resume-primary {
          background: #5427a8;
          color: white;
        }

        .resume-secondary {
          background: #e9e1ff;
          color: #5427a8;
        }

        .resume-preview {
          background: white;
          padding: 32px;
          border-top: 6px solid #5427a8;
          border-radius: 8px;
          overflow-wrap: anywhere;
        }

        .resume-preview h2 {
          color: #5427a8;
          margin-bottom: 8px;
        }

        .resume-preview h3 {
          color: #5427a8;
          border-bottom: 1px solid #ddd5f7;
          padding-bottom: 6px;
          margin-top: 24px;
        }

        .resume-preview p {
          white-space: pre-wrap;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .resume-grid {
            grid-template-columns: 1fr;
          }

          .resume-full {
            grid-column: auto;
          }

          .resume-preview {
            padding: 20px;
          }
        }

        @media print {
          body * {
            visibility: hidden;
          }

          .resume-print-area,
          .resume-print-area * {
            visibility: visible;
          }

          .resume-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }

          .resume-no-print {
            display: none !important;
          }

          .resume-page {
            padding: 0;
            background: white;
          }

          .resume-preview {
            border-radius: 0;
            box-shadow: none;
          }
        }
      `}</style>

      <div className="resume-container">
        <div className="resume-no-print">
          <h1 className="resume-heading">Uplyft Resume Builder</h1>
          <p className="resume-subtitle">
            Create your professional resume in a few simple steps.
          </p>

          <div style={sectionStyle}>
            <h2>Personal Information</h2>

            <div className="resume-grid">
              <label style={labelStyle}>
                Full Name
                <input
                  style={inputStyle}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </label>

              <label style={labelStyle}>
                Email Address
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </label>

              <label style={labelStyle}>
                Phone Number
                <input
                  style={inputStyle}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </label>

              <label style={labelStyle}>
                Address
                <input
                  style={inputStyle}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your city or address"
                />
              </label>
            </div>
          </div>

          <div style={sectionStyle}>
            <h2>Career Details</h2>

            <label style={labelStyle}>
              Career Objective
              <textarea
                style={{ ...inputStyle, minHeight: "90px" }}
                name="objective"
                value={form.objective}
                onChange={handleChange}
                placeholder="Write your career goal"
              />
            </label>

            <label style={labelStyle}>
              Education
              <textarea
                style={{ ...inputStyle, minHeight: "100px" }}
                name="education"
                value={form.education}
                onChange={handleChange}
                placeholder="Degree, college, year and marks"
              />
            </label>

            <label style={labelStyle}>
              Technical Skills
              <textarea
                style={{ ...inputStyle, minHeight: "80px" }}
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="Example: Excel, Python, SQL, HTML"
              />
            </label>

            <label style={labelStyle}>
              Work Experience / Internship
              <textarea
                style={{ ...inputStyle, minHeight: "90px" }}
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Enter your experience, or write Fresher"
              />
            </label>

            <label style={labelStyle}>
              Projects
              <textarea
                style={{ ...inputStyle, minHeight: "90px" }}
                name="projects"
                value={form.projects}
                onChange={handleChange}
                placeholder="Project name and a short description"
              />
            </label>

            <label style={labelStyle}>
              Certifications
              <textarea
                style={{ ...inputStyle, minHeight: "70px" }}
                name="certifications"
                value={form.certifications}
                onChange={handleChange}
                placeholder="Courses or certificates"
              />
            </label>
          </div>

          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <button
              className="resume-button resume-primary"
              onClick={() => window.print()}
            >
              Print / Save as PDF
            </button>

            <button
              className="resume-button resume-secondary"
              onClick={() =>
                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  objective: "",
                  education: "",
                  skills: "",
                  experience: "",
                  projects: "",
                  certifications: "",
                })
              }
            >
              Clear Form
            </button>
          </div>
        </div>

        <div className="resume-print-area">
          <div className="resume-preview">
            <h2 style={{ fontSize: "28px", marginTop: 0 }}>
              {form.name || "Your Full Name"}
            </h2>

            <p style={{ color: "#55556b", marginTop: 0 }}>
              {[form.email, form.phone, form.address]
                .filter(Boolean)
                .join(" | ") || "Email | Phone | Address"}
            </p>

            <h3>Career Objective</h3>
            <p>{form.objective || "Your career objective will appear here."}</p>

            <h3>Education</h3>
            <p>{form.education || "Your education details will appear here."}</p>

            <h3>Technical Skills</h3>
            <p>{form.skills || "Your skills will appear here."}</p>

            <h3>Work Experience / Internship</h3>
            <p>{form.experience || "Your experience will appear here."}</p>

            <h3>Projects</h3>
            <p>{form.projects || "Your projects will appear here."}</p>

            <h3>Certifications</h3>
            <p>{form.certifications || "Your certifications will appear here."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}