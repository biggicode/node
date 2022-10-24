const os = require("os");

//info about current user

const user = os.userInfo();

console.log(user);

//method to return the system uptime in seconds

console.log(`System is up for: ${os.uptime()} seconds`);

//display os

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
