const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

// -------------------- LIST GENRES --------------------
exports.genresList = async (req, res) => {
  try {
    const genres = await db.getAllGenres();
    res.render("genres/list", { title: "Genres", genres });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// -------------------- ADD A GENRE --------------------
exports.genreNewGet = (req, res) => {
  res.render("genres/new", { title: "Add a genre", errors: [] });
};

exports.genreNewPost = [
  body("name").notEmpty().withMessage("Name is required"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("genres/new", {
        title: "Add a genre",
        errors: errors.array(),
      });
    }

    try {
      await db.addGenre(req.body.name);
      res.redirect("/genres");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },
];

// -------------------- FILMS PAR GENRE --------------------
exports.genreDetail = async (req, res) => {
  const genreId = req.params.id;

  try {
    // Récupère le genre
    const genreResult = await db.getGenreById(genreId);
    const genre = genreResult.rows[0];

    if (!genre) {
      return res.status(404).send("Genre not found");
    }

    // Récupère les films liés à ce genre
    const filmsResult = await db.getFilmsByGenre(genreId);
    const films = filmsResult.rows;

    res.render("genres/detail", {
      title: `Films in ${genre.name}`,
      genre,
      films,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// -------------------- LIST ALL GENRES FOR DELETION --------------------
exports.genresDeleteListGet = async (req, res) => {
  try {
    const genres = await db.getAllGenres();
    res.render("genres/delete-list", { title: "Delete Genres", genres });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.genreDeletePost = async (req, res) => {
  const genreId = req.params.id;

  try {
    await db.deleteGenre(genreId);
    res.redirect("/genres");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// -------------------- CONFIRM DELETE GENRE --------------------
exports.genreDeleteGet = async (req, res) => {
  const genreId = req.params.id;

  try {
    const genreResult = await db.getGenreById(genreId);
    const genre = genreResult.rows[0];

    if (!genre) {
      return res.status(404).send("Genre not found");
    }

    res.render("genres/delete", { title: "Confirm deletion", genre });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
