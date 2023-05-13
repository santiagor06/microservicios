const films = require("../data/films");
const { response } = require("../utils");

module.exports = async (req, res) => {
  await films.create();
  response(res, 201, "the fil was created");
};
