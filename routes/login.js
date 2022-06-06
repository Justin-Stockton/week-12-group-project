const express = require("express");
const router = express.Router();
router.use(express.urlencoded());

const { validateLogin } = require("..validations");

router.get("/login", (req, res) => {
    res.render("login", { title: "gGs - Login" });
});

router.post("/login", validateLogin, async (req, res) => {
    const { email, password } = req.body;

    if (req.errors.length > 0) {
        res.render("login", {
            errors: req.errors,
            email,
            password,
        });
        return;
    }
    res.redirect("/");
});