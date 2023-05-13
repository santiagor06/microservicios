const { ClientError } = require("../utils");
const films = require("./films.json");
module.exports = {
  list: () => films,
  create: async () => {
    throw new ClientError("Error in create film", 400);
  },
};
