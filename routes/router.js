const { Router } = require("express");
const controller = require("../controllers/controller");
const filmsController = require("../controllers/filmsController");
const genresController = require("../controllers/genresController");

const router = Router();

// Accueil et About
router.get("/", controller.indexGet);
router.get("/about", controller.aboutGet);

// Films
router.get("/films", filmsController.filmsList);
router.get("/films/new", filmsController.filmNewGet);
router.post("/films/new", filmsController.filmNewPost);
router.get("/films/:id", filmsController.filmDetail);
router.get("/films/:id/edit", filmsController.filmEditGet);
router.post("/films/:id/edit", filmsController.filmEditPost);
router.get("/films/:id/delete", filmsController.filmDeleteGet);
router.post("/films/:id/delete", filmsController.filmDeletePost);

// Genres
router.get("/genres", genresController.genresList);
router.get("/genres/new", genresController.genreNewGet);
router.post("/genres/new", genresController.genreNewPost);
router.get("/genres/delete", genresController.genresDeleteListGet);
router.get("/genres/:id/delete", genresController.genreDeleteGet);
router.post("/genres/:id/delete", genresController.genreDeletePost);
router.get("/genres/:id", genresController.genreDetail);

// Search
router.get("/search", controller.searchGet);
router.post("/search", controller.searchPost);

module.exports = router;
