const { Router } = require("express");
const controllers = require("../controllers/index");
const { validationCharacter } = require("../middleware/index");
const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getIdCharacter);
router.post("/", validationCharacter, controllers.createCharacter);

module.exports = router;
