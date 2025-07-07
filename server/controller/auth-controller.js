const bcrypt = require("bcrypt");
const User = require("../model/user-model");

const Signup = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const saltRounds = 10;
    const hash_password = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      email,
      password: hash_password, 
      address,
    });

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ msg: "Signup failed", error: error.message });
  }
};

module.exports = Signup;
