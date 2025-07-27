const express = require("express");
const router = express.Router();

const { Signup, Login, getAllUsers } = require("../controller/auth-controller");
const { getAllProducts, getProductById, getMobiles, getSports, getCars, getLaptop } = require("../controller/product-controller");

const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

router.post("/signup", Signup);
router.post("/login", Login);

router.get("/product", getAllProducts);
router.get("/product/:id", getProductById);

router.get("/mobile", getMobiles);
router.get("/sports", getSports); 
router.get("/cars", getCars); 
router.get("/laptop", getLaptop);


router.get("/users", auth, admin, getAllUsers);

module.exports = router;
