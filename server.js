const EventEmitter = require("events");
const http = require("http");

const logEvents = require("./logEvents");
const dataFetch = require("./src/caching");

class OurEmitter extends EventEmitter {}
const myEmitter = new OurEmitter();
var dataUrl = "https://jsonplaceholder.typicode.com/photos";
// myEmitter.on("log", (msg) => logEvents(msg));

// setTimeout(() => {
//   myEmitter.emit("log", "Hello World!");
// }, 3000);

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      dataFetch(dataUrl,res);
    } else {
      logEvents(req.method);
    }
  })
  .listen(3000, () => {
      console.log("Server is running!")
});
