const store = require("../database/index");

module.exports = async (req, res) => {
  const { model } = req.params;
  console.log(model);
  const response = await store[model].list();
  res.status(200).send(response);
};
