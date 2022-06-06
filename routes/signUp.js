const express = require("express");
const router = express.Router();
router.use(express.urlencoded());

const { validateUser } = require("..validations");

router.get("/sign-up", (req, res) => {
  res.render("sign-up", { title: "gGs - Sign Up" });
});

router.post("/sign-up", validateUser, async (req, res) => {
  const { username, email, password, confirmedPassword } = req.body;

  if (req.errors.length > 0) {
    res.render("sign-up", {
      errors: req.errors,
      username,
      email,
      password,
      confirmedPassword,
    });
    return;
  }

  let pairs = Object.entries(req.body);
  await User.create({
    username: pairs[0][1],
    email: pairs[1][1],
    password: pairs[2][1],
  });
  res.redirect("/");
});
