const EventEmitter = require("events");
const http = require("http");

const logEvents = require("./logEvents");
class OurEmitter extends EventEmitter {}

const myEmitter = new OurEmitter();
// myEmitter.on("log", (msg) => logEvents(msg));

// setTimeout(() => {
//   myEmitter.emit("log", "Hello World!");
// }, 3000);

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.end("Hi Deepak");
    } else {
      logEvents(req.method);
    }
  })
  .listen(3000);
