const bcrypt = require("bcrypt");
const User = require("../model/user-model");
const Message = require("../model/Message");
const cron = require("node-cron");


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
const MSG = async (req, res) => {
  try {
    const { YourName, YourEmail, YourMessage } = req.body;

    const newMsg = await Message.create({
      name: YourName,
      email: YourEmail,
      message: YourMessage,
      status: "pending",
      expireAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 din
    });

    // ✅ Job schedule: 3 din baad chalega
    cron.schedule(
      `0 0 0 ${new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).getDate()} * *`,
      async () => {
        try {
          const msg = await Message.findById(newMsg._id);
          if (msg && msg.status === "pending") {
            msg.status = "secret";
            msg.secretMessage = "🎁 This is your secret message after 3 days!";
            await msg.save();
          }
        } catch (err) {
          console.error("Cron job error:", err);
        }
      }
    );

    res
      .status(201)
      .json({ msg: "Message saved successfully", data: newMsg });
  } catch (error) {
    console.error("Message Save Error:", error);
    res.status(500).json({ msg: "Message save failed", error: error.message });
  }
};

module.exports = {Signup,Login,getAllUsers,MSG, };
