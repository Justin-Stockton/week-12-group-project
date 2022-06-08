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
  asyncHandler(async (req, res, next) => {
    //==== getting all games in the Playing Games model ====//
    //==== where the userId is the same as the logged in user ====//
    const gamesRacks = await PlayingGame.findAll({
      where: { userId: req.session.auth.userId },
      include: [{ model: Game }],
    });
    // console.log(gamesRacks[0].Game)
    res.render("gamesRack", { title: "Games Racks", gamesRacks });
  })
);

/* ==== with a text field and a submit button this should make a
        this route "should" add a game rack with the name they enter
        and tie that to their user id ==== */

router.post(
  "/add",
  csrfProtection,
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { rackName } = req.body;
    const newRack = Rack.build({
      name: rackName,
      userId: req.session.auth.userId,
      csrfToken: req.csrfToken(),
    });
    res.render("/");
  })
);

/* ==== This should delete all games racks created where the user will
        have to enter the name of the rack they want to delete ==== */

router.post(
  "/delete",
  csrfProtection,
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userId = req.session.auth.userId;
    const { rackName } = req.body;
    await Rack.destroy({
      where: { name: rackName, userId },
    });
    res.render("/");
  })
);

module.exports = router;
