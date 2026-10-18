import React, { useState } from "react";

function PracticeImprove() {
const [answer, setAnswer] = useState("");
const [submitted, setSubmitted] = useState(false);

const questions = [
{
question: "Which language is used to create web page structure?",
options: ["Python", "HTML", "Java", "SQL"],
correct: "HTML",
},
];

const quiz = questions[0];

return (
<div style={{
minHeight: "100vh",
padding: "30px",
background: "#f5f0ff",
fontFamily: "Arial, sans-serif"
}}>
<h1 style={{ color: "#6c45c0", textAlign: "center" }}>
Practice & Improve 🚀
</h1>

  <p style={{ textAlign: "center", color: "#555" }}>
    Learn new skills, practice coding and improve your knowledge!
  </p>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
    marginTop: "35px"
  }}>
    <div style={{
      background: "white",
      padding: "22px",
      borderRadius: "15px"
    }}>
      <h2>💻 Coding Practice</h2>
      <p>Practice programming questions and improve your problem-solving skills.</p>
      <p><b>Coming Soon!</b></p>
    </div>

    <div style={{
      background: "white",
      padding: "22px",
      borderRadius: "15px"
    }}>
      <h2>📝 Quick Quiz</h2>
      <p>{quiz.question}</p>

      {quiz.options.map((option) => (
        <label key={option} style={{
          display: "block",
          margin: "12px 0",
          cursor: "pointer"
        }}>
          <input
            type="radio"
            name="quiz"
            value={option}
            checked={answer === option}
            onChange={() => {
              setAnswer(option);
              setSubmitted(false);
            }}
          />{" "}
          {option}
        </label>
      ))}

      <button
        onClick={() => setSubmitted(true)}
        style={{
          background: "#6c45c0",
          color: "white",
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Check Answer
      </button>

      {submitted && (
        <p style={{
          color: answer === quiz.correct ? "green" : "red"
        }}>
          {!answer
            ? "Please select an answer."
            : answer === quiz.correct
            ? "Correct answer! 🎉"
            : "Incorrect. Correct answer: HTML"}
        </p>
      )}
    </div>

    <div style={{
      background: "white",
      padding: "22px",
      borderRadius: "15px"
    }}>
      <h2>📚 Learn & Improve</h2>
      <p>Build your knowledge with notes, exercises and continuous learning.</p>
      <p><b>More topics coming soon!</b></p>
    </div>

    <div style={{
      background: "white",
      padding: "22px",
      borderRadius: "15px"
    }}>
      <h2>🏆 My Progress</h2>
      <p>Keep practising regularly to improve your skills.</p>
      <p><b>Your learning journey starts here!</b></p>
    </div>
  </div>
</div>

);
}

export default PracticeImprove;