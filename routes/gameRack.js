const express = require("express");
const router = express.Router();

const { loginUser, logoutUser } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { userValidators, loginValidators } = require("../validations");

router.get("/games-racks", (req, res, next) => {
  res.render("gamesRack", {
    title: "gGs - Games Racks",
    csrfToken: req.csrfToken(),
  });
});

module.exports = router;
