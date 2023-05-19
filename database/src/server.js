const express = require("express");
const morgan = require("morgan");
const { validateRoute, errorHandle } = require("./middleware");
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use("/", require("./routes"));
server.use(errorHandle);

module.exports = server;
