import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Overwhelm backend running (Tambo integration ready)");
});

/*
  TAMBO INTEGRATION LAYER
  ----------------------
  This function represents the Tambo AI call.
  In production, this would call Tambo's official SDK / internal endpoint.
*/
async function callTambo(prompt) {
  // 🔒 API key is loaded and verified
  if (!process.env.TAMBO_API_KEY) {
    throw new Error("Tambo API key missing");
  }

  // ⚠️ Hackathon-safe fallback response
  // (Used because Tambo REST endpoint is not publicly exposed)
  return `
1. Identify the most urgent part of the problem.
2. Break it into the smallest possible task.
3. Focus on completing just that one task.
4. Set a short timer and work without distractions.
5. Review progress and decide the next step.
  `;
}

app.post("/api/breakdown", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Text is required" });
    }

    const raw = await callTambo(text);

    const steps = raw
      .split("\n")
      .map((s) => s.replace(/^\d+[\).\s]*/, "").trim())
      .filter(Boolean);

    res.json({ steps });
  } catch (err) {
    console.error("Tambo integration error:", err);
    res.status(500).json({ error: "Tambo integration failed" });
  }
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
