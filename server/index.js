require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// Health check endpoint
app.get("/", (req, res) => {
  res.send("QuantGenius API Server");
});

// Proxy to AI engine
app.get("/ai-health", async (req, res) => {
  try {
    const response = await axios.get("http://ai-engine:5000/");
    res.send(`AI Engine: ${response.data}`);
  } catch (error) {
    res.status(500).send("AI Engine unavailable");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
