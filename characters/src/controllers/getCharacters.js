const axios = require("axios");
const characters = require("../data/characters");
const { response } = require("../utils/index");
module.exports = async (req, res) => {
  const { data } = await axios.get("http://database:8004/Character");
  response(res, 200, data);
};
