const express = require("express");
const { getAllProducts } = require("../controller/product-controller");
const router = express.Router();

router.get("/product", getAllProducts);

module.exports = router;
