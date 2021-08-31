const express = require("express");
const app = express();

const user = require("./routes/user");
const profile = require("./routes/profile");

// middeleware
// request -->middeleware-->response
// burada kullanıcının giriş yaptığını kontrol edeceğiz.
// burada isLogin true ise next bizim verdigimiz yola gidiyor.
// buna birinci parametre olarak route verilmezse bütün sayfalarda calissir.route verilirse sadece o route icin calisir.
/*
app.use("/profile", (req, res, next) => {
  const isLogin = false;
  if (isLogin) {
    next();
  } else {
    res.send("lütfen giriş yapın");
  }
});*/

// helper kullanımı

app.use("/user", user);
app.use("/profile", profile);

app.listen(3000, () => {
  console.log("express server calisiyor.");
});
