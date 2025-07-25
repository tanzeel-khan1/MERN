const bcrypt = require("bcrypt");
const User = require("../model/user-model");
// ======================== SignUp ===================================


const Signup = async (req, res) => {
  try {
    
    const { username, email, password, address } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const userCount = await User.countDocuments();

    const saltRounds = 10;
    const hash_password = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      email,
      password: hash_password,
      address,
      customId: userCount + 1,
    });

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ msg: "Signup failed", error: error.message });
  }
};



// ======================== Login ===================================
const Login = async (req, res) => {

  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });


    
    if (!userExists) {
          return res.status(400).json({ message: "Invalid Email" });
    }

     const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = await userExists.generateToken(); 
    console.log("TOKEN:", token); 

    res.status(200).json({

      message: "User Login Successful",
      token,
      userId: userExists._id.toString(),
    });


  } catch (error) {

    console.log("Login Error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

const getAllUsers = async (req, res) => {
        try {
    const users = await User.find().select("-password");
    res.json(users);
      } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {Signup,Login,getAllUsers,};
