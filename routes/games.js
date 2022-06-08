const express = require("express");
const { loginUser, logoutUser } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");
const { Game, User, PlayingGame, Review } = db;

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const game = await Game.findAll({ order: [["name", "ASC"]] });
    console.log(game);
    res.render("games", {
      title: "Games",
      game,
    });
  })
);

router.get(
  "/:gameId(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.gameId, 10);
    console.log(gameId);
    const game = await Game.findByPk(gameId);
    const user = await User.findByPk();
    const reviews = await Review.findAll({
      where: {
        gameId,
      },
    });

    if (!game) {
      res.redirect("/404");
    }
    const auth = req.session.auth;

    res.render("gamesId", { game, user, reviews, auth });
  })
);

module.exports = router;
