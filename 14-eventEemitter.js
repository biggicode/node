const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (numar, geam) => {
  console.log(`Response event executed, data received ${numar + " " + geam}`);
});

customEmitter.on("response", () => {
  console.log("You can listen for an event twice");
});

customEmitter.emit("response", "sapte", "orice");
