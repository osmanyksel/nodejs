const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
// static klasör belirleme
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3001, () => {
  console.log("express server çalıştı.");
});
