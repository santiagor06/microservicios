const { ClientError } = require("../utils");
const planets = require("./planets.json");
module.exports = {
  list: () => planets,
  create: async () => {
    throw new ClientError("error creando film", 400);
  },
};
