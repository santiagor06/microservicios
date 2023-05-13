const express = require("express");
const morgan = require("morgan");
const { handleErrors } = require("./middleware/index");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/characters", require("./routes/index"));

server.use("*", (req, res) => {
  res.status(404).send("NOT FOUND");
});
server.use(handleErrors);

module.exports = server;
