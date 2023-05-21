const express = require("express");
const morgan = require("morgan");
const { handleErrors, notFound } = require("./middleware/index");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/characters", require("./routes/index"));

server.use("*", notFound);
server.use(handleErrors);

module.exports = server;
