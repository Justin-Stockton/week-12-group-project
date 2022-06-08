const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const db = require("../db/models");
const { User } = db;


// THIS IS THE USER HOME PAGE - USER PROFILE PAGE

router.get("/", requireAuth, restoreUser, csrfProtection, asyncHandler (async (req, res) => {
  const users = await User.findAll({ order: [["username", "DESC"]] });
  res.render("home", {
    title: "Home",
    users,
    csrfToken: req.csrfToken(),
  });
}));

module.exports = router;
