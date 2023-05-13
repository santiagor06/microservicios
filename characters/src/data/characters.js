const characters = require("./characters.json");
const { ClientError } = require("../utils/index");
module.exports = {
  list: () => characters,
  create: async () => {
    throw new ClientError("hubo un error al crear eso", 400);
  },
};
