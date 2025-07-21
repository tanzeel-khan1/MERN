const express = require("express");
const router = express.Router();

const { Signup, Login, getAllUsers } = require("../controller/auth-controller");
const { getAllProducts, getProductById } = require("../controller/product-controller"); // ✅ import new function

const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

router.post("/signup", Signup);
router.post("/login", Login);

router.get("/product", getAllProducts);

router.get("/product/:id", getProductById);

router.get("/users", auth, admin, getAllUsers);
module.exports = router;
