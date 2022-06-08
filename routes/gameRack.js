const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { requireAuth, restoreUser } = require("../auth");

const { User, PlayingGame, Game } = db;

//==== get playing rack for a user ====//

router.get(
  "/",
  csrfProtection,
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    //==== getting all games in the Playing Games model ====//
    //==== where the userId is the same as the logged in user ====//
    const gamesRacks = await PlayingGame.findAll({
      where: { userId: req.session.auth.userId },
      include: [{ model: Game }]
    });
    console.log(gamesRacks[0].Game)
    
    res.render("gamesRack", { title: "Games Racks", gamesRacks });
  })
);

module.exports = router;
