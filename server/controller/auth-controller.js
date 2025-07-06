// const products = require("./Products/first");

// const product = async (req, res) => {
//   try {
//     res.status(200).json(products);
//     console.log("Products sent successfully");
//   } catch (error) {
//     console.error("Product Error:", error);
//     res.status(500).send("Something went wrong in product route.");
//   }
// };

// module.exports = { product };

// ================  Signup ===========================
const User = require("../model/user-model");

const Signup = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User pehle se mojood hai" });
    }

    const newUser = await User.create({ username, email, password, address });

    res.status(201).json({
      message: "Signup kamyab hua",
      user: newUser,
    });
  } catch (error) {
    console.error("Signup Error", error);
    res.status(500).json({ msg: "Signup fail hua", error: error.message });
  }
};

module.exports = Signup;
