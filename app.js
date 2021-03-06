const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const splashRouter = require("./routes/splash");
const usersRouter = require("./routes/users");
const gamesRacksRouter = require("./routes/gameRack");
const gamesRouter = require("./routes/games");
const homeRouter = require("./routes/home");
const aboutUsRouter = require("./routes/aboutUs");
const userRacksRouter = require("./routes/userRack");

const app = express();

// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: "superSecret",
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();

// ==== routes ==== //
app.use("/", splashRouter);
app.use("/users", usersRouter);
app.use("/MyGames", gamesRacksRouter);
app.use("/games", gamesRouter);
app.use("/home", homeRouter);
app.use("/about-us", aboutUsRouter);
app.use("/my-game-racks", userRacksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  console.log(err.message);
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
