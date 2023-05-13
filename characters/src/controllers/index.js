const { catchedAsyncError } = require("../utils");
module.exports = {
  getCharacters: catchedAsyncError(require("./getCharacters")),
  createCharacter: catchedAsyncError(require("./createCharacter")),
};
