const express = require("express");
const { loginUser, logoutUser, requireAuth } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");
const { Game, User, PlayingGame, Review } = db;

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const game = await Game.findAll({ order: [["name", "ASC"]] });
    // console.log(game);
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
    // console.log(gameId);
    const game = await Game.findByPk(gameId);
    const user = await User.findByPk(); //we need a number here
    const reviews = await Review.findAll({
      where: {
        gameId,
      },
    });

    if (!game) {
      res.redirect("/404");
    }
    const auth = req.session.auth;

    res.render("gamesId", { title: `${game.name}`, game, user, reviews, auth });
  })
);

router.post(
  "/:gameId(\\d+)/add",
  asyncHandler(async (req, res, next) => {
    //==== userId ====//
    const userId = req.session.auth.userId;
    //==== gameId ====//
    const gameId = parseInt(req.params.gameId, 10);
    //==== timePlayed hard coded for now users will be able to update that====//
    const timePlayed = 0;
    const game = await PlayingGame.create({
      userId,
      gameId,
      timePlayed,
    });
    res.redirect("/games-racks");
  })
);

router.post(
  "/:gameId(\\d+)/delete",
  asyncHandler(async (req, res, next) => {
    //==== userId ====//
    const userId = req.session.auth.userId;
    //==== gameId ====//
    const gameId = parseInt(req.params.gameId, 10);
    //
    await PlayingGame.destroy({
      where: { userId, gameId },
    });
    res.redirect("/games-racks");
  })
);
module.exports = router;
