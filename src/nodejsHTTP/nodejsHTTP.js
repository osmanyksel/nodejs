const http = require("http");

const server = http.createServer((request, response) => {
  response.write("<b>OSMAN YÜKSEL</b>");
  response.end();
});

server.listen(3000);
