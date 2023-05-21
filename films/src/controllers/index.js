const { catchAsyncError } = require("../utils");

module.exports = {
  getIdFilms: catchAsyncError(require("./getIdFilms")),
  getFilms: catchAsyncError(require("./getFilms")),
  createFilm: catchAsyncError(require("./createFilm")),
};
