// routes/usersRouter.js
const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

router.get("/", controller.indexGet);

module.exports = router;
