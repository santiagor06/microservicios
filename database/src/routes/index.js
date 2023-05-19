const { Router } = require("express");
const { getDb, getIdDB } = require("../controllers");
const { validateRoute } = require("../middleware");
const router = Router();

router.get("/:model", validateRoute, getDb);
router.get("/:model/:id", validateRoute, getIdDB);

module.exports = router;
