const express = require("express");
const { csrfProtection } = require("./utils");
const router = express.Router();

router.get("/", csrfProtection, (req, res) => {
  res.render("home", {
    title: "gGs - Home",
    csrfToken: req.csrfToken(),
  });
});

module.exports = router;