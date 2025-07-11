// const mongoose = require("mongoose");
// const  bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const userSchema = new mongoose.Schema({
//  username: {
//         type : String,
//         require: true,
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type : String,
//         require: true,
//     },
//     Address: {
//         type: String,
//         require: true
//     },
//        isAdmin: {
//         type: Boolean,
//         default : false
//     },
// });
// userSchema.methods.generateToken = async function () {
//     try{
//     return jwt.sign({
//     userId:this._id.toString(),
//     email:this.email,
//     isAdmin: this.isAdmin,
//     },
//     process.env.JWT_SELECT_KEY,
//     {
// expiresIn: "30d"
//     }
// )
//     } catch (error) {
//         console.log(error)
//     }
// }
// const User = mongoose.model("User", userSchema);
// module.exports = User;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // ✅ spelling fix
  },
  email: {
    type: String,
    required: true // ✅ spelling fix
  },
  password: {
    type: String,
    required: true // ✅ spelling fix
  },
  Address: {
    type: String,
    required: true // ✅ spelling fix
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
});

// ✅ CORRECTED: use "methods" not "method"
userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin
      },
      process.env.JWT_SELECT_KEY,
      {
        expiresIn: "30d"
      }
    );
  } catch (error) {
    console.log("JWT Error:", error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
