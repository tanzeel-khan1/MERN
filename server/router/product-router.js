const express = require("express");
const { getAllProducts, Fome } = require("../controller/product-controller"); // 👈 dono yahi se lo
const router = express.Router();

router.get("/product", getAllProducts);
router.get("/fome", Fome);

module.exports = router;
