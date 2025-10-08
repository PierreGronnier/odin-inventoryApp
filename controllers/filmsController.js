const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

// -------------------- LISTE DES FILMS --------------------
exports.filmsList = async (req, res) => {
  try {
    const films = await db.getAllFilms();
    res.render("films/list", { title: "Films", films });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// -------------------- AJOUT D'UN FILM --------------------
exports.filmNewGet = async (req, res) => {
  try {
    const genres = await db.getAllGenres();
    res.render("films/new", {
      title: "Add a film",
      genres,
      errors: [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.filmNewPost = [
  // Validation
  body("title").notEmpty().withMessage("Title is required"),
  body("release_year")
    .isInt({ min: 1800, max: 2100 })
    .withMessage("Invalid year"),
  body("price").isFloat({ min: 0 }).withMessage("Invalid price"),
  body("stock").isInt({ min: 0 }).withMessage("Invalid stock"),

  async (req, res) => {
    const errors = validationResult(req);
    const {
      title,
      description,
      release_year,
      director,
      price,
      stock,
      cover_url,
      genres,
    } = req.body;

    if (!errors.isEmpty()) {
      const allGenres = await db.getAllGenres();
      return res.render("films/new", {
        title: "Add a film",
        genres: allGenres,
        errors: errors.array(),
      });
    }

    try {
      const filmId = await db.insertFilm({
        title,
        description,
        release_year,
        director,
        price,
        stock,
        cover_url,
      });

      const genreIds = Array.isArray(genres) ? genres : [genres];
      await db.linkFilmGenres(filmId, genreIds);

      res.redirect("/films");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },
];

// -------------------- DETAIL D'UN FILM --------------------
exports.filmDetail = async (req, res) => {
  const filmId = req.params.id;
  try {
    const film = await db.getFilmById(filmId);
    if (!film) {
      return res.status(404).send("Film not found");
    }

    res.render("films/detail", {
      title: film.title,
      film,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
