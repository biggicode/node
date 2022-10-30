const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

const server = http.createServer();
//Using event emitter api
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
