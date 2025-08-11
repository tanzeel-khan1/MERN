const mongoose = require("mongoose");
const  bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
 username: {
        type : String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type : String,
        require: true,
    },
    Address: {
        type: String,
        require: true
    },
       isAdmin: {
        type: Boolean,
        default : false
    },

     customId: {
    type: Number,
    unique: true,
  },
});
userSchema.methods.generateToken = async function () {
    try{
    return jwt.sign({
    userId:this._id.toString(),
    email:this.email,
    isAdmin: this.isAdmin,
    },
    process.env.JWT_SELECT_KEY,
    {
expiresIn: "30d"
    }
)
    } catch (error) {
        console.log(error)
    }
}
const User = mongoose.model("User", userSchema);
module.exports = User;
