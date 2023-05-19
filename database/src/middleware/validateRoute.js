const { ClientError } = require("../utils");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Planet", "Film"].includes(model)) {
    return next();
  } else {
    throw new ClientError("No se encontro el modelo", 404);
  }
};
