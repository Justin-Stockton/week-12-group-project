const express = require("express");
const router = express.Router();
const { asyncHandler } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");

// THIS IS THE USER HOME PAGE - USER PROFILE PAGE

router.get("/", requireAuth, restoreUser, (req, res) => {
  res.render("home", {
    title: "Home",
  });
});

module.exports = router;
