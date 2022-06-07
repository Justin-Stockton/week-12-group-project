const express = require("express");
const { loginUser, logoutUser } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");

router.get('/games/:gameId/reviews', asyncHandler(async (req, res) => {
    const books = await db.Review.findAll();
    res.render('review-list', { title: 'Reviews', reviews });
  }));

router.get('/games/gameId/reviews/add', csrfProtection, loginUser, (req, res) => {
  const review = db.Review.build();
  res.render('review-add', {
    review: 'Add Review',
    csrfToken: req.csrfToken(),
  });
});


module.exports = router;

