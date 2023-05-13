const characters = require("../data/characters");
const { response } = require("../utils/index");
module.exports = (req, res) => {
  const data = characters.list();
  response(res, 200, data);
};
