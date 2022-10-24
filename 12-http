const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my first server");
  }
  if (req.url === "/about") {
    res.end("bla bla about us");
  }
  res.end(`<h1>Oppppsss</h1>
  <p>Wrong page</p>
  <a href="/">Go home</a>`);
});

server.listen(5000);
