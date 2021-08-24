const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  // render ederken views icindeki pug dosyalarını otomatik algılar ama burada algılamıyor.
  // o yüzden views set ettik.
  // Ayrıca render da gonderdigimiz objeyi pug dosyasında kullanabiliriz.
  res.render("index", { name: "Osman", surname: "Yüksel", job: "developer" });
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000, () => {
  console.log("express server çalıştı.");
});
