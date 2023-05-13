const ClientError = require("../utils/errors");

module.exports = (req, res, next) => {
  if (req.nombre) next();
  throw new ClientError("Falta el Nombre", 400);
};
