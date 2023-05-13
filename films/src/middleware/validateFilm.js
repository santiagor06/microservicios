const { ClientError } = require("../utils");

module.exports = (req, res, next) => {
  const { title } = req.body;
  console.log(req.body);

  if (title) next();
  else throw new ClientError("Enter a Title", 400);
};
