const planets = require("../data/planets.js");

module.exports = (req, res) => {
  const response = planets.list();
  res.status(200).send(response);
};
