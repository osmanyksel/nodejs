// okunabilir ve yazılabilir stream oluşturmak
const fs = require("fs");
const http = require("http");
const file = "src/streams/video.mp4";
const newFile = "src/streams/new.mp4";
const dosya = "src/streams/dosya.txt";

const readStream = fs.createReadStream(file);
//const writeStream = fs.createWriteStream(newFile);
let progress = 0;

fs.stat(file, (err, data) => {
  console.log(`Toplam boyut: ${data.size}`);

  readStream.on("data", (chunk) => {
    progress += chunk.length;
    console.log(Math.round((100 * progress) / data.size) + "%");
  });

  // yazma işlemi
  //readStream.pipe(writeStream);

  readStream.on("end", () => {
    console.log("veri okuması bitti");
    console.log(progress);
  });
});

// Bellek Kullanımı
const server = http.createServer();

server.on("request", (req, res) => {
  /*
  fs.readFile(dosya, (err, data) => {
    if (err) throw err;

    res.end(data);
  });
  */

  // Bunun yerine stream ile data kullanılmaya çalışılırsa bellek açısından çok daha iyi olacaktır.performanas artacaktır.
  const readStream = fs.createReadStream(dosya);
  readStream.pipe(res);
});
server.listen(3000);
