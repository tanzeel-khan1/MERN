const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
  
router.route("/product").get(authController.product);


module.exports = router;
