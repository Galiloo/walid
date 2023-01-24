const User = require("../models/userModel");

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // create a new user
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    //user already exists
    res.json({
      msg: "User already exist ",
      success: false,
    });
  }
};
module.exports = { createUser };
