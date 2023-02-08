const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {
  if (password !== repeatPassword) {
    throw new Error("Passwords do not match");
  }
  // TODO: validate password

  const existingUser = await this.findByUsername(username);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ username, email, password: hashedPassword });
};

exports.login = async (email, password) => {
  const user = await this.findByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isValid = await bcrypt.compare(user.password, password);

  if (!isValid) {
    throw new Error("Invalid email or password");
  }
};
