const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const logEvents = async (message) => {
  const date = `${format(new Date(), "dd.mm.yyyy")}`;
  const time = `${format(new Date(), "HH:mm:ss")}`;
  const logItem = `On this day ${date} at this time ${time} with an assigned id ${uuid()} a ${message} request has come. \n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
      await fsPromises.appendFile(
        path.join(__dirname, "/logs/eventLog.odt"),
        logItem
      );
      return;
    }
    await fsPromises.appendFile(
      path.join(__dirname, "/logs/eventLog.odt"),
      logItem
    );
    return;
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
