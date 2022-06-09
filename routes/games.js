const express = require("express");
const { requireAuth, restoreUser } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");
const { route } = require("./home");
const { Game, User, PlayingGame, Review, RacksToGame } = db;

// ==== This will display all the games in the DB ==== //

router.get(
  "/",
  restoreUser,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const games = await Game.findAll({ order: [["name", "ASC"]] });
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
  requireAuth,
  restoreUser,
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
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res, next) => {
    //==== userId ====//
    const userId = req.session.auth.userId;
    //==== gameId ====//
    const gameId = parseInt(req.params.gameId, 10);
    //==== timePlayed hard coded for now users will be able to update that====//
    const userGames = await PlayingGame.findAll({
      where: { userId: userId, gameId: gameId },
    });
    console.log(userGames);
    if (!userGames[0]) {
      const game = await PlayingGame.create({
        userId,
        gameId,
      });
      res.redirect("/games");
    } else {
      res.redirect("/MyGames");
    }
  })
);

// ==== deletes the game from the rack ==== //

router.post(
  "/:gameId(\\d+)/delete",
  requireAuth,
  restoreUser,
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

// ==== This should add a game to RacksToGames ==== //

router.post(
  "/:gameId(\\d+)/:rackId(\\d+)/add",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res, next) => {
    // console.log(req.params);
    //==== gameId ====//
    const gameId = parseInt(req.params.gameId, 10);
    //==== rackId ====//
    const rackId = parseInt(req.params.rackId, 10);

    await RacksToGame.create({ rackId, gameId });
    res.redirect("/games");
  })
);

router.post(
  "/:gameId(\\d+)/:rackId(\\d+)/delete",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res, next) => {
    // console.log(req.params);
    //==== gameId ====//
    const gameId = parseInt(req.params.gameId, 10);
    //==== rackId ====//
    const rackId = parseInt(req.params.rackId, 10);

    await RacksToGame.destroy({ where: { rackId, gameId } });
    res.redirect("/home");
  })
);

module.exports = router;
