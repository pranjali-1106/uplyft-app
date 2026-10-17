import { useState } from "react";

function UplyftBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I am Uplyft AI Assistant. Ask me about careers, internships, resumes, or coding!",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const question = message.trim();

    if (!question || loading) return;

    setMessages((previous) => [
      ...previous,
      { sender: "user", text: question },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }

      setMessages((previous) => [
        ...previous,
        { sender: "bot", text: data.reply },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((previous) => [
        ...previous,
        {
          sender: "bot",
          text: "AI se connect nahi ho paaya. Please check the AI server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "700px", margin: "30px auto", padding: "20px" }}>
      <h1>🤖 Uplyft AI Assistant</h1>
      <p>Your student career and learning companion.</p>

      <div
        style={{
          minHeight: "300px",
          padding: "15px",
          background: "#f3f0fa",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        {messages.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: item.sender === "user" ? "right" : "left",
              margin: "12px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "12px",
                borderRadius: "12px",
                background: item.sender === "user" ? "#d9ccff" : "white",
                maxWidth: "85%",
              }}
            >
              {item.text}
            </span>
          </div>
        ))}

        {loading && <p>Uplyft AI is thinking...</p>}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") sendMessage();
          }}
          placeholder="Ask about careers, internships, or coding..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: "12px 18px",
            background: "#6c45c5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default UplyftBot;