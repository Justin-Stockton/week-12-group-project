const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { requireAuth } = require("../auth");

const { User, PlayingGame, PlayedGame, WantedGame } = db;

//==== get playing rack for a user ====//

router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    // console.log(req.session.auth.userId);
    const gamesRacks = await PlayingGame.findAll({
      where: { userId: req.session.auth.userId },
    });
    console.log(gamesRacks);
    res.json({ gamesRacks });
    res.render("gamesRack", { title: "Games Racks" });
  })
);

console.log("res.locals");

// let playing = await PlayingGame.findAll({
//   where: { userId: 6 },
// });

// res.json({ playing });
// })
module.exports = router;
