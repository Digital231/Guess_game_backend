// backend/middleware/validateUser.js
module.exports = (req, res, next) => {
  const { username, password } = req.body;

  // Check username length
  if (!username || username.length < 3 || username.length > 9) {
    return res
      .status(400)
      .json({ message: "Username must be between 3 and 9 characters." });
  }

  // Check password length
  if (!password || password.length < 3 || password.length > 9) {
    return res
      .status(400)
      .json({ message: "Password must be between 3 and 9 characters." });
  }

  next(); // Proceed to the next middleware or route handler
};
