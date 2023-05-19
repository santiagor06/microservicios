const { Router } = require("express");
const controllers = require("../controllers/index");
const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getIdPlanet);
router.post("/", controllers.createPlanets);

module.exports = router;
