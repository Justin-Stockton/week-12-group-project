const express = require("express");
const { loginUser, logoutUser, requireAuth } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");
const { Game, User, PlayingGame, Review } = db;

// ==== This will display all the games in the DB ==== //

router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const games = await Game.findAll({ order: [["name", "DESC"]] });
    res.render("games", {
      title: "Games",
      games,
      csrfToken: req.csrfToken(),
    });
  })
);

// ==== This displays individual game pages unless there is no game then 404 ==== //

router.get(
  "/:gameId(\\d+)",
  asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.gameId, 10);
    // console.log(gameId);
    const game = await Game.findByPk(gameId);
    const user = await User.findByPk(req.session.auth.userId);
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

// ==== adds the game to the rack ====//

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
    res.redirect("/games");
  })
);

// ==== deletes the game from the rack ==== //

router.post(
  "/:gameId(\\d+)/delete",
  asyncHandler(async (req, res, next) => {
    //==== userId ====//

    const userId = req.session.auth.userId;

    //==== gameId ====//

    const gameId = parseInt(req.params.gameId, 10);
    //==== delete the game ==== //
    await PlayingGame.destroy({
      where: { userId, gameId },
    });
    res.redirect("/games");
  })
);
module.exports = router;
