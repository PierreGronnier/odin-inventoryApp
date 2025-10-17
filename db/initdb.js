const { Client } = require("pg");
require("dotenv").config();

const SQL = `
-- Créer les tables SEULEMENT si elles n'existent pas
CREATE TABLE IF NOT EXISTS genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS films (
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

CREATE TABLE IF NOT EXISTS film_genres (
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
  console.log("🔧 Setting up database tables (if they don't exist)...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("✅ Database tables ready!");
  } catch (err) {
    console.error("❌ Error setting up database:", err.message);
    throw err;
  } finally {
    await client.end();
  }
}

if (require.main === module) {
  main();
}

module.exports = main;
