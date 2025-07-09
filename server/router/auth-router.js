const express = require("express");
const router = express.Router();

const { Signup, Login } = require("../controller/auth-controller");

router.post("/Signup", Signup); 
router.post("/Login", Login);    
module.exports = router;
