const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/node-created-sync.txt",
  `Here are both files content: ${first} ${second}`,
  { flag: "a" }
);
