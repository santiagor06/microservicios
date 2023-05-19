const planets = require("../data/planets");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { data } = await axios.post(`http://database:8004/Planet`, req.body);
  response(res, 201, data);
};
