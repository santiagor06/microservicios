const { handleAsyncError } = require("../utils");

module.exports = {
  getPlanets: handleAsyncError(require("./getPlanets")),
  getIdPlanet: handleAsyncError(require("./getIdPlanet")),
  createPlanets: handleAsyncError(require("./createPlanets")),
};
