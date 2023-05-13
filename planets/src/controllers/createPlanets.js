const planets = require("../data/planets");
const { response } = require("../utils");

module.exports = async (req, res) => {
  await planets.create();
  response(res, 201, "se creo el film");
};
