const mongoose = require("mongoose");
const  bcrypt = require("bcrypt")
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
});

const User = mongoose.model("User", userSchema);
module.exports = User;
