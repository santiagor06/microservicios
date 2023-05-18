const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});
filmSchema.statics.list = async function () {
  return await this.find()
    .populate("planets", ["_id", "name"])
    .populate("characters", ["_id", "title"]);
};
filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("planets", ["_id", "name"])
    .populate("characters", ["_id", "title"]);
};
filmSchema.statics.insert = async function (films) {
  return await this.create(films);
};
module.exports = filmSchema;
