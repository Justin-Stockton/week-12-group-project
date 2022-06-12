const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");
const { requireAuth, restoreUser } = require("../auth");
const db = require("../db/models");
const { User, Rack, Game, RacksToGame } = db;

const rackValidation = [
  check("rackName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value Rack Name")
    .isLength({ max: 100 })
    .withMessage("First Name must not be more than 100 characters long"),
];
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
    const users = await User.findAll();
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
  rackValidation,
  asyncHandler(async (req, res, next) => {
    const { rackName } = req.body;
    // console.log(rackName.length);
    const user = await User.findAll();
    const validatorErrors = validationResult(req);

    const racks = await Rack.findAll({
      where: { userId: req.session.auth.userId },
    });

    if (validatorErrors.isEmpty()) {
      const newRack = await Rack.create({
        name: rackName,
        userId: req.session.auth.userId,
      });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("home", {
        title: "Home",
        user,
        racks,
        errors,
        csrfToken: req.csrfToken(),
      });
    }

    res.redirect("/home");
  })
);

/* ==== This should delete all games racks created where the user will
                have to enter the name of the rack they want to delete ==== */

// router.post(
//   "/delete",
//   csrfProtection,
//   restoreUser,
//   requireAuth,
//   asyncHandler(async (req, res, next) => {
//     const userId = req.session.auth.userId;
//     const { rackName } = req.body;
//     await Rack.destroy({
//       where: { name: rackName, userId },
//     });
//     res.render("/");
//   })
// );

router.post(
  "/:rackId(\\d+)/delete",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    //   const rackId = parseInt(req.params.rackId, 10);
    //   // const userId = req.session.auth.userId;
    //   // const userId = req.session;
    //   // console.log(req.body)
    //   // const { rackId } = req.body;
    //   // console.log("*******************")
    //   const rackInfo = await Rack.findAll({
    //     where: {}
    //   })
    //   // console.log(rackId)
    //   // console.log("*******************")
    //   // console.log(rackInfo.id)
    //  await Rack.destroy({
    //     where: { id: rackId }
    //     // include: [{model: Rack}]
    //   });

    const myRackId = parseInt(req.params.rackId, 10);
    console.log(myRackId);
    console.log(req.body);

    const myRack = await Rack.findAll({
      where: { id: myRackId },
    });

    // console.log(myRack);

    // const destroy = await RacksToGame.findAll({
    //   where: { id: myRackId },
    // });
    await RacksToGame.destroy({
      where: { rackId: myRackId },
    });

    await Rack.destroy({
      where: { id: myRackId },
    });
    res.redirect(`/home`);
  })
);

module.exports = router;
