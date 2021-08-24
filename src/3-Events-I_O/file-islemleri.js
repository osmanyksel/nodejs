console.log(__filename);
console.log(__dirname);

const { Console } = require("console");
// Dosya okuma
const fs = require("fs");

fs.readFile("src/Events-I_O/demo.txt", (error, data) => {
  if (error) console.log(error);

  console.log(data.toString());
  console.log("Dosya okuma isi bitti");
});

// Burada aslında dosya işlemleri bitmeden bir sonraki adıma geçmiyor.
const demoDosyasi = fs.readFileSync("src/Events-I_O/demo.txt");
console.log(demoDosyasi.toString());
console.log("senkron okuma bitti.");

// Dosya oluşturma ve yazma,silme
// appendFile yetine writeFile yazarsak da dosyayı temizler ve verdiğiniz değeri girer.
fs.appendFile("src/Events-I_O/demo.txt", "bu arada bende iyiyim.\n", (err) => {
  if (err) throw err;

  console.log("dosya ekleme yapildi.");
});

// dosya silme
fs.unlink("src/Events-I_O/demo.txt", (err) => {
  if (err) throw err;

  console.log("dosya silme işlemi başarılı");
});
