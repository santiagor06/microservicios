const { Router } = require("express");
const controllers = require("../controllers/index");
const { validateFilms } = require("../middleware");
const router = Router();

router.get("/", controllers.getFilms);
router.post("/", validateFilms, controllers.createFilm);

module.exports = router;
