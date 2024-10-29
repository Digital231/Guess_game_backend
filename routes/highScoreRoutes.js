// routes/highScoreRoutes.js
const express = require("express");
const HighScore = require("../models/HighScore");
const router = express.Router();

// POST api/highscore - Save high score
router.post("/highscore", async (req, res) => {
  const { user, score } = req.body;

  try {
    const newHighScore = new HighScore({ user, score });
    await newHighScore.save();
    res
      .status(201)
      .json({ message: "High score saved!", highScore: newHighScore });
  } catch (error) {
    console.error("Error saving high score:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET api/highscores - Get all high scores
router.get("/highscores", async (req, res) => {
  try {
    const highScores = await HighScore.find().sort({ score: -1 }).limit(10); // Top 10 scores
    res.status(200).json(highScores);
  } catch (error) {
    console.error("Error retrieving high scores:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET api/highscore/:user - Get highest score for a specific user
router.get("/highscore/:user", async (req, res) => {
  const { user } = req.params;

  try {
    const highScore = await HighScore.findOne({ user }).sort({ score: -1 });
    res.status(200).json(highScore || { message: "No high score yet" });
  } catch (error) {
    console.error("Error retrieving user's high score:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
