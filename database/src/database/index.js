const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/index");
const {
  charachterSchema,
  filmSchema,
  planetSchema,
} = require("./schema/index");
const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: conn.model("Character", charachterSchema),
  Film: conn.model("Film", filmSchema),
  Planet: conn.model("Planet", planetSchema),
};
