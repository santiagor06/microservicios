const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/index");
const { charachterSchema } = require("./schema/index");
const conn = mongoose.createConnection(MONGO_URI);
const Character = conn.model("Character", charachterSchema);
Character.find().then((res) => console.log(res));
