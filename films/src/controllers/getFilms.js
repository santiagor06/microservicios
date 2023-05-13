const films = require("../data/films");
module.exports = (req, res) => {
  const response = films.list();
  res.status(200).send(response);
};
