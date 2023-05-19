const { catchAsyncError } = require("../utils");

module.exports = {
  getDb: catchAsyncError(require("./getDb")),
  getIdDB: catchAsyncError(require("./getIdDb")),
};
