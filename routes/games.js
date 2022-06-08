const express = require("express");
const { loginUser, logoutUser } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");
const { Game } = db;

router.get("/", csrfProtection, (req, res) => {
  res.render("games", { csrfToken: req.csrfToken() });
});

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // const gameIdx = req.params.gameId
    // console.log(gameIdx)

    const game = await Game.findAll();
    console.log(game);
    res.send({ message: "work" });
    res.render("gamesId", { csrfToken: req.csrfToken(), game });
  })
);

module.exports = router;
