const { Router } = require("express");
const controller = require("../controllers/controller");
const filmsController = require("../controllers/filmsController");
const categoriesController = require("../controllers/categoriesController");

const router = Router();

// Accueil et About
router.get("/", controller.indexGet);
router.get("/about", controller.aboutGet);

// Films
router.get("/films", filmsController.filmsList);
router.get("/films/new", filmsController.filmNewGet);
router.post("/films/new", filmsController.filmNewPost);

// Catégories
router.get("/categories", categoriesController.categoriesList);
router.get("/categories/new", categoriesController.categoryNewGet);
router.post("/categories/new", categoriesController.categoryNewPost);

module.exports = router;
