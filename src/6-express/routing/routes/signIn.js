const express = require("express");
const router = express.Router();

router.get("/signIn", (reg, res) => {
  res.send("signIn sayfası");
});

router.post("/signIn", (reg, res) => {
  res.send("signIn sayfası {POST}");
});

module.exports = router;
