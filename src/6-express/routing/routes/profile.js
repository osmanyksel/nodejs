const express = require("express");
const router = express.Router();

// helper

const isLogin = require("../helper/isLogin");

router.get("/", isLogin, (reg, res) => {
  res.send("profile sayfası");
});

module.exports = router;
