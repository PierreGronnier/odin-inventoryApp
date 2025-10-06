const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE IF EXISTS film_genres;
DROP TABLE IF EXISTS films;
DROP TABLE IF EXISTS genres;

-- Table des genres
CREATE TABLE IF NOT EXISTS genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

-- Table des films
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

-- Table de liaison film-genre (relation many-to-many)
CREATE TABLE IF NOT EXISTS film_genres (
  film_id INT REFERENCES films(id) ON DELETE CASCADE,
  genre_id INT REFERENCES genres(id) ON DELETE CASCADE,
  PRIMARY KEY (film_id, genre_id)
);
`;

async function main() {
  console.log("Initializing database...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database initialized successfully!");
  } catch (err) {
    console.error("Error initializing database:", err.message);
  } finally {
    await client.end();
  }
}

main();
