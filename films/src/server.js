const express = require("express");
const morgan = require("morgan");
const { notFound, handleError } = require("./middleware");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/films", require("./routes/index"));
server.use("*", notFound);
server.use(handleError);
module.exports = server;
