// Basit bir hhtp sunucusu oluşturmak

const http = require("http");

const server = http.createServer((request, response) => {
  console.log("bir istekde bulunuldu.");
  console.log(request.url);
  response.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  response.write("<b>OSMAN YÜKSEL</b>");
  // Burada isterseniz write icine yazılanları direk end içine yazabilirsiniz.
  response.end();
});

server.listen(3000);

// Mevcut bir html safyasını basma

const fs = require("fs");

const server2 = http.createServer((request, response) => {
  console.log("bir istekde bulunuldu.");
  console.log(request.url);
  response.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  fs.readFile("", (err, data) => {});
});

server2.listen(3001);
