const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const db = require("../db/models");
const { User, Rack, Game, RacksToGame } = db;

// THIS IS THE USER HOME PAGE - USER PROFILE PAGE

router.get(
  "/",
  requireAuth,
  restoreUser,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const racks = await Rack.findAll({
      where: { userId: req.session.auth.userId },
    });
    const users = await User.findAll({ order: [["username", "DESC"]] });
    res.render("home", {
      title: "Home",
      users,
      racks,
      csrfToken: req.csrfToken(),
    });
  })
);

/* ==== with a text field and a submit button this should make a
        this route "should" add a game rack with the name they enter
        and tie that to their user id ==== */

router.post(
  "/",
  csrfProtection,
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { rackName } = req.body;
    // console.log(rackName.length);
    const userRacks = await Rack.findAll({
      where: { name: rackName },
    });
    if (!userRacks[0] && rackName.length > 0) {
      const newRack = await Rack.create({
        name: rackName,
        userId: req.session.auth.userId,
      });
    } else {
      res.render("home", {
        title: "Home",
        csrfToken: req.csrfToken(),
      });
    }
    
    
    const racks = await Rack.findAll({
      where: {userId: req.session.auth.userId}
    })
    console.log(racks.name)


    // const games = await Game.findAll();
    // console.log(games);
    res.render("home", {
      title: "Home",
      csrfToken: req.csrfToken(),
      racks,
    });
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
