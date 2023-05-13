const { handleAsyncError } = require("../utils");

module.exports = {
  getPlanets: require("./getPlanets"),
  createPlanets: handleAsyncError(require("./createPlanets")),
};
