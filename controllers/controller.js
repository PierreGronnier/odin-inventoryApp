// -------------------- GET / --------------------
exports.indexGet = async (req, res) => {
  try {
    res.render("index", {
      title: "Welcome to inventory application",
    });
  } catch (err) {
    console.error("Erreur lors de la récupération des usernames :", err);
    res.status(500).send("Erreur serveur");
  }
};
