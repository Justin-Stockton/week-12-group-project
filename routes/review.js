const express = require("express");
const router = express.Router();

const { csrfProtection, asyncHandler } = require("./utils");
const { userValidators, loginValidators } = require("../validations");
const { requireAuth, restoreUser } = require("../auth");
const { loginUser, logoutUser } = require("../auth");
const db = require("../db/models");
const { Review } = db;

router.get(
  "/reviews",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    res.render("review-list", {
      csrfToken: req.csrfToken(),
      reviews,
    });
  })
);



module.exports = router;
