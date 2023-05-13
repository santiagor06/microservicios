const characters = require("../data/characters");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
  await characters.create();
  response(res, 200, "se creo correctamente");
};
