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
