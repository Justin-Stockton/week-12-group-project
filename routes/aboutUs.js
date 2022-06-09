const express = require("express");
const router = express.Router();
const { requireAuth, restoreUser } = require("../auth");

router.get("/", requireAuth, restoreUser, (req, res) => {
  res.render("about-us", {
    title: "About Us",
  });
});

module.exports = router;
