const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { requireAuth, restoreUser } = require("../auth");

const { User, PlayingGame, Game, Rack } = db;

//==== get playing rack for a user ====//

router.get(
  "/",
  csrfProtection,
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    //==== getting all games in the Playing Games model ====//
    //==== where the userId is the same as the logged in user ====//

    if (!req.session.auth.userId) {
      res.redirect("/users/login");
    } else {
      const gamesRacks = await PlayingGame.findAll({
        where: { userId: req.session.auth.userId },
        include: [{ model: Game }],
      });
      res.render("gamesRack", { title: "Games Racks", gamesRacks });
    }
  })
);

module.exports = router;
