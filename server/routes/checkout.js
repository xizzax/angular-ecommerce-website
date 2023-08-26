var express = require("express");
var router = express.Router();

const { checkout } = require("../controllers/checkout-controller");

router.route("/checkout").post(checkout);

module.exports = router;