const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { requireAuth } = require("../auth");

const { User, PlayingGame, PlayedGame, WantedGame } = db;

//==== get playing rack for a user ====//

router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const gamesRacks = await PlayingGame.findAll({
      where: { userId: req.session.auth.userId },
    });
    // res.json({ gamesRacks });
    res.render("gamesRack", { title: "Games Racks" });
  })
);

module.exports = router;
