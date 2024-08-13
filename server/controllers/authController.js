const User = require("../db/models/userModels.js");

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log("something went wrong!", error.message);
  }
};

const loginUser = async (req, res) => {
  
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(404).send("User not found!");
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) res.status(404).send("password doesn't match");
    const token = user.generateToken();
    res.status(200).send({ user: user, token: token });
  } catch (error) {
    console.log("something went wrong!");
  }
};

module.exports = { registerUser, loginUser };
