const express = require("express");
const router = express.Router();
const { asyncHandler } = require("./utils");

// THIS IS THE USER HOME PAGE - USER PROFILE PAGE

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home"
  });
});

module.exports = router;
