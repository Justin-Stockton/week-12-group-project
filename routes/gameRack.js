const express = require("express");
const router = express.Router();

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

router.get("/", csrfProtection, (req, res, next) => {
  res.render("gamesRack", {
    title: "Games Racks",
    csrfToken: req.csrfToken(),
  });
});

module.exports = router;
