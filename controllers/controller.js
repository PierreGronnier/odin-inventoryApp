const db = require("../db/queries");

// -------------------- GET / --------------------
exports.indexGet = async (req, res) => {
  try {
    res.render("index", {
      title: "Cine Invetory App",
    });
  } catch (err) {
    console.error("Erreur lors de la récupération des usernames :", err);
    res.status(500).send("Erreur serveur");
  }
};

// -------------------- GET /about --------------------
exports.aboutGet = async (req, res) => {
  try {
    res.render("about", {
      title: "About page",
    });
  } catch (err) {
    console.error("Erreur lors de la récupération des usernames :", err);
    res.status(500).send("Erreur serveur");
  }
};

// -------------------- GET /search --------------------
exports.searchGet = async (req, res) => {
  try {
    const genres = await db.getAllGenres();
    res.render("search/search", {
      title: "Search films",
      films: [],
      genres,
      query: {},
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// -------------------- POST /search --------------------
exports.searchPost = async (req, res) => {
  const {
    title,
    director,
    genre_id,
    year,
    min_price,
    max_price,
    min_stock,
    max_stock,
  } = req.body;

  try {
    const genres = await db.getAllGenres();
    const films = await db.searchFilms({
      title,
      director,
      genre_id,
      year,
      min_price,
      max_price,
      min_stock,
      max_stock,
    });

    res.render("search/search", {
      title: "Search results",
      films,
      genres,
      query: req.body,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
