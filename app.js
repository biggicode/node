const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

// default 64kb
// last buffer remainder
// const stream = createReadStream("./content/big.txt", {highWaterMark: 90000}); -> fce bufferul de 90kb
// const stream = createReadStream("./content/big.txt", {encoding: 'utf8'});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
