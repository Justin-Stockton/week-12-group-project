const db = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const restoreUser = async (req, res, next) => {
  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        if (req.path === "/" || req.path === "/users/login") {
          res.redirect("/home");
        } else {
          next();
        }
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    if (!req.path.startsWith("/users") && req.path !== "/") {
      res.redirect("/users/login");
    } else {
      next();
    }
  }
};

const logoutUser = (req, res) => {
  delete req.session.auth;
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect("/users/login");
  } else {
    return next();
  }
};

module.exports = {
  loginUser,
  restoreUser,
  logoutUser,
  requireAuth,
};
