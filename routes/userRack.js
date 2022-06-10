const express = require("express");
const { requireAuth, restoreUser } = require("../auth");
const db = require("../db/models");
const { asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");
const { Game, User, PlayingGame, Review, RacksToGame, Rack } = db;

router.get(
  "/:myGameRack(\\d+)",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    //------  get the rackId -------//
    const myRackId = parseInt(req.params.myGameRack, 10);
    //------  find all games with my rackId -------//
    const games = await RacksToGame.findAll({
      where: { rackId: myRackId },
      include: [{ model: Game }],
    });

    //------  gets user information -------//
    const user = await User.findByPk(req.session.auth.userId);

    /******  this gets all the valid rackIds and if file path doesn't match a valid rackId
              then redirect to a 404 ****/
    const rackIds = await Rack.findAll();

    const rackIdArray = [];

    rackIds.forEach((rack) => {
      rackIdArray.push(rack.id);
    });

    if (!rackIdArray.includes(myRackId)) {
      res.redirect("/404")
    }

    //------  gets user auth information -------//
    const auth = req.session.auth;

    //------  gets rack information -------//
    const rackInfo = await Rack.findByPk(myRackId);

    res.render("my-game-rack", {
      title: `${rackInfo.name}`,
      games,
      user,
      rackInfo,
      auth,
    });
  })
);

module.exports = router;
