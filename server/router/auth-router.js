const express = require("express");
const router = express.Router();


const { Signup, Login, getAllUsers } = require("../controller/auth-controller");
const { getAllProducts } = require("../controller/product-controller");


const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

// =================== Public Routes ===================


router.post("/signup", Signup);


router.post("/login", Login);

router.get("/product", getAllProducts);

// =================== Admin Routes ===================

router.get("/users", auth, admin, getAllUsers);

module.exports = router;
