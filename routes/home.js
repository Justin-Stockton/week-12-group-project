const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const db = require("../db/models");
const { User, Rack } = db;

// THIS IS THE USER HOME PAGE - USER PROFILE PAGE

router.get(
  "/",
  requireAuth,
  restoreUser,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const users = await User.findAll({ order: [["username", "DESC"]] });
    res.render("home", {
      title: "Home",
      users,
      csrfToken: req.csrfToken(),
    });
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
    const games = [];
    // console.log(rackName)
    const newRack = await Rack.create({
      name: rackName,
      userId: req.session.auth.userId,
    });
    res.render("home", {
      title: "Home",
      csrfToken: req.csrfToken(),
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
