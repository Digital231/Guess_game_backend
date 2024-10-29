// backend/routes/authRoutes.js
const express = require("express");
const { signup, login } = require("../controllers/authController");
const validateUser = require("../middleware/validateUser");
const router = express.Router();

// POST api/auth/signup
router.post("/signup", validateUser, signup);
router.get("/test", (req, res) => {
  res.send("test");
});

// POST api/auth/login
router.post("/login", login);

module.exports = router;
