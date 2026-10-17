require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "Please enter a message.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: message,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("AI Error:", error.message);

    res.status(500).json({
      error: "AI could not reply. Please try again.",
    });
  }
});

app.listen(3001, () => {
  console.log("Uplyft AI server running on port 3001");
});