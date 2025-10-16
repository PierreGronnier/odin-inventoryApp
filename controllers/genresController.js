const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

// -------------------- LIST GENRES --------------------
exports.genresList = async (req, res) => {
  try {
    const genres = await db.getAllGenres();
    let flash = null;
    if (req.query.deleted) {
      flash = {
        type: "success",
        message: "Genre successfully deleted.",
      };
    }

    res.render("genres/list", { title: "Genres", genres, flash });
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
    const { name, adminPassword } = req.body;

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return res.render("genres/new", {
        title: "Add a genre",
        genre: { name },
        errors: [{ msg: "Incorrect admin password" }],
      });
    }

    if (!errors.isEmpty()) {
      return res.render("genres/new", {
        title: "Add a genre",
        genre: { name },
        errors: errors.array(),
      });
    }

    try {
      await db.addGenre(name);
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
    const genreResult = await db.getGenreById(genreId);
    const genre = genreResult.rows[0];

    if (!genre) {
      return res.status(404).send("Genre not found");
    }

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

exports.genreDeleteGet = async (req, res) => {
  const genreId = req.params.id;

  try {
    const genreResult = await db.getGenreById(genreId);
    const genre = genreResult.rows[0];

    if (!genre) {
      return res.status(404).send("Genre not found");
    }

    res.render("genres/delete", {
      title: "Confirm deletion",
      genre,
      errors: [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.genreDeletePost = async (req, res) => {
  const genreId = req.params.id;
  const { adminPassword } = req.body;

  try {
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      const genreResult = await db.getGenreById(genreId);
      const genre = genreResult.rows[0];
      return res.render("genres/delete", {
        title: "Confirm deletion",
        genre,
        errors: [{ msg: "Incorrect admin password" }],
      });
    }

    await db.deleteGenre(genreId);
    res.redirect("/genres?deleted=1");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
