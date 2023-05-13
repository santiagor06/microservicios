const { catchAsyncError } = require("../utils");

module.exports = {
  getFilms: require("./getFilms"),
  createFilm: catchAsyncError(require("./createFilm")),
};
