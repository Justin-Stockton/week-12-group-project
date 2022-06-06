const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { User } = require("./db/models");

const validateUser = async (req, res, next) => {
  const { username, email, password, confirmedPassword } = req.body;
  let errors = [];

  // Username
  const usernameList = await User.findAll({
    where: {
      username: username,
    },
  });

  if (!username) errors.push("Please provide a username.");
  if (username && username.length < 5)
    errors.push("Username must be atleast 5 characters.");
  if (usernameList.length) errors.push("Username is already taken.");

  // Password
  const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const numbers = /[0-9]/;
  const lowerCharacters = /[a-z]/;
  const upperCharacters = /[A-Z]/;

  if (!password) errors.push("Please provide a password.");
  if (password && password.length < 6)
    errors.push("Password must be atleast 6 characters.");
  if (
    password &&
    !specialCharacters.test(password) &&
    !numbers.test(password)
  ) {
    errors.push(
      "Password must contain atleast 1 number or 1 special character."
    );
  }
  if (password && !lowerCharacters.test(password)) {
    errors.push("Password must contain atleast 1 lowercase letter.");
  }
  if (password && !upperCharacters.test(password)) {
    errors.push("Password must contain atleast 1 uppercase letter.");
  }
  if (password !== confirmedPassword) errors.push("Passwords do not match.");

  req.errors = errors;
  next();
};

const validateLogin = async (req, res, next) => {
  const { username, password } = req.body;
  // user info
  const usernameList = await User.findAll({
    where: {
      username: username,
      password: password,
    },
  });
  let errors = [];

  if (!username || !password || usernameList.length === 0)
    errors.push("Please provide a valid username password combination.");

  req.errors = errors;
  next();
};
