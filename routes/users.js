var express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const { loginUser, logoutUser } = require("../auth");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { userValidators, loginValidators } = require("../validations");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/signup", csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render("signup", {
    title: "Sign Up",
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post(
  "/signup",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;

    const user = db.User.build({
      firstName,
      lastName,
      email,
      username,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      user.password = await bcrypt.hash(password, 12);
      await user.save();
      loginUser(req, res, user);
      res.redirect("/home");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("signup", {
        title: "Sign Up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get("/login", csrfProtection, (req, res, next) => {
  res.render("login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.password.toString()
        );

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect("/home");
        }
      }

      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render("login", {
      title: "Login",
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.get(
  "/demo",
  asyncHandler(async (req, res, next) => {
    let demoUser = await db.User.findOne({
      where: { email: "demouser@demo.com" },
    });
    loginUser(req, res, demoUser);
    res.redirect("/home");
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  return res.redirect("/");
});

module.exports = router;
