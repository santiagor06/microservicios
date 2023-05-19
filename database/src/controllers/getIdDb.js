const store = require("../database");
module.exports = async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).send(response);
};
