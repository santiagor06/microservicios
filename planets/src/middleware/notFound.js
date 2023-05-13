const { ClientError } = require("../utils");

module.exports = (req, res, next) => {
  throw new ClientError("Route not Found", 404);
};
