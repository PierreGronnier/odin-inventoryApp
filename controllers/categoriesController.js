const pool = require("../db/pool");
const { body, validationResult } = require("express-validator");

// -------------------- LIST CATEGORIES --------------------
exports.categoriesList = async (req, res) => {
  try {
    const { rows: categories } = await pool.query(
      "SELECT * FROM genres ORDER BY name"
    );
    res.render("categories/list", { title: "Categories", categories });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// -------------------- ADD A CATEGORY --------------------
exports.categoryNewGet = (req, res) => {
  res.render("categories/new", { title: "Add a category", errors: [] });
};

exports.categoryNewPost = [
  body("name").notEmpty().withMessage("Name is required"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("categories/new", {
        title: "Add a category",
        errors: errors.array(),
      });
    }

    const { name } = req.body;
    try {
      await pool.query(
        "INSERT INTO genres (name) VALUES ($1) ON CONFLICT DO NOTHING",
        [name]
      );
      res.redirect("/categories");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },
];
