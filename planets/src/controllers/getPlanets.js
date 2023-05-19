const axios = require("axios");
const { response } = require("../utils/index.js");
module.exports = async (req, res) => {
  const { data } = await axios.get("http://database:8004/Planet");
  response(res, 200, data);
};
