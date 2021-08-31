const express = require("express");
const router = express.Router();

// router nesnesinin kullanımı

router.get("/signIn", (reg, res) => {
  res.send("signIn sayfası");
});

router.post("/signIn", (reg, res) => {
  res.send("signIn sayfası {POST}");
});
router.get("/signUp", (reg, res) => {
  res.send("signUp sayfası");
});

router.post("/signUp", (reg, res) => {
  res.send("signUp sayfası {POST}");
});

module.exports = router;
