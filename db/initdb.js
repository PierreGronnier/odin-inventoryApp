const { Client } = require("pg");
require("dotenv").config();

const SQL = `
-- Supprimer les tables si elles existent (dans le bon ordre pour les contraintes)
DROP TABLE IF EXISTS film_genres CASCADE;
DROP TABLE IF EXISTS films CASCADE;
DROP TABLE IF EXISTS genres CASCADE;

-- Table des genres
CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

-- Table des films
CREATE TABLE films (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  release_year INT,
  director VARCHAR(255),
  stock INT NOT NULL DEFAULT 0,
  price NUMERIC(10,2),
  cover_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table de liaison film-genre (relation many-to-many)
CREATE TABLE film_genres (
  film_id INT REFERENCES films(id) ON DELETE CASCADE,
  genre_id INT REFERENCES genres(id) ON DELETE CASCADE,
  PRIMARY KEY (film_id, genre_id)
);

-- Créer des index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_films_title ON films(title);
CREATE INDEX IF NOT EXISTS idx_films_director ON films(director);
CREATE INDEX IF NOT EXISTS idx_films_year ON films(release_year);
CREATE INDEX IF NOT EXISTS idx_film_genres_film_id ON film_genres(film_id);
CREATE INDEX IF NOT EXISTS idx_film_genres_genre_id ON film_genres(genre_id);
`;

async function main() {
  console.log("🧨 Nuking and rebuilding database...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("✅ Database nuked and rebuilt successfully!");
  } catch (err) {
    console.error("💥 Error nuking database:", err.message);
    throw err;
  } finally {
    await client.end();
  }
}

// Exécuter seulement si appelé directement
if (require.main === module) {
  main();
}

module.exports = main;
