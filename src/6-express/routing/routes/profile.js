const express = require("express");
const router = express.Router();

router.get("/", (reg, res) => {
  res.send("profile sayfası");
});

module.exports = router;
