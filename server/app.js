const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));
require('dotenv').config();

var checkoutRouter = require('./routes/checkout');

// console.log(`api_key: ${process.env.api_key}`);

app.use('/', checkoutRouter);

app.listen(4242, () => console.log("app is running on 4242"));
