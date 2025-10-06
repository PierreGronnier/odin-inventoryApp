const pool = require("../db/pool");
const { body, validationResult } = require("express-validator");

// -------------------- LISTE DES FILMS --------------------
exports.filmsList = async (req, res) => {
  try {
    const { rows: films } = await pool.query(`
        SELECT films.*, 
               ARRAY_REMOVE(ARRAY_AGG(genres.name), NULL) AS genres
        FROM films
        LEFT JOIN film_genres ON films.id = film_genres.film_id
        LEFT JOIN genres ON genres.id = film_genres.genre_id
        GROUP BY films.id
        ORDER BY films.id
      `);

    res.render("films/list", { title: "Films", films });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// -------------------- AJOUT D'UN FILM --------------------
exports.filmNewGet = async (req, res) => {
  const { rows: categories } = await pool.query(
    "SELECT * FROM genres ORDER BY name"
  );
  res.render("films/new", { title: "Add a film", categories, errors: [] });
};

exports.filmNewPost = [
  // Validation simple
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
      categories,
    } = req.body;

    if (!errors.isEmpty()) {
      const { rows: allCategories } = await pool.query(
        "SELECT * FROM genres ORDER BY name"
      );
      return res.render("films/new", {
        title: "Add a film",
        categories: allCategories,
        errors: errors.array(),
      });
    }

    try {
      const result = await pool.query(
        "INSERT INTO films (title, description, release_year, director, price, stock, cover_url) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id",
        [title, description, release_year, director, price, stock, cover_url]
      );

      const filmId = result.rows[0].id;

      // Insérer les relations film-genre
      if (categories && categories.length > 0) {
        const cats = Array.isArray(categories) ? categories : [categories]; // si une seule catégorie
        for (let catId of cats) {
          await pool.query(
            "INSERT INTO film_genres (film_id, genre_id) VALUES ($1,$2)",
            [filmId, catId]
          );
        }
      }

      res.redirect("/films");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },
];
