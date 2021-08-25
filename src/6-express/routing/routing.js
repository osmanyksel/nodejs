const express = require("express");
const app = express();

/*
  get,post,put,delete,all
  ? (zorunlu olmayan) burada soru işaretindeki önceki harfi yazmasanızda sonuç size dönecektir.

  * (yerine herhangi bir ifade gelebilir) Burada *koyduğunuz yere istediğiniz seyi yazabilirsiniz.
  
  + (soldaki ifadenin aynısı olmalı) Burada + işareti koyduğumuz harfin solundaki harfden istediğimiz kadar ekleyebiliriz.
*/

app
  .get("/ilet+isim", (req, res) => {
    res.send("merhaba express");
  })
  .post("iletisim", (req, res) => {
    res.send("iletisim post gonderildi.");
  });

// burası get,post vs. ne gönderirseniz calisacaktir.
app.all("/all", (req, res) => {
  res.send("all isteği calisti.");
});

app.listen(3000, () => {
  console.log("express server calisiyor.");
});
