const { Client } = require("pg");
require("dotenv").config();
const { films } = require("./filmsData.js");

async function seed() {
  console.log("🌱 Checking and seeding database with missing data...");

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();

    const { rows: existingFilms } = await client.query(
      "SELECT COUNT(*) as count FROM films"
    );
    const filmCount = parseInt(existingFilms[0].count);

    if (filmCount > 0) {
      console.log(`📊 Database already has ${filmCount} films. Skipping seed.`);
      return;
    }

    console.log("🆕 Database is empty. Starting seed...");

    // --- Genres ---
    const genresSet = new Set();
    films.forEach((film) => {
      film.genres.forEach((g) => genresSet.add(g));
    });
    const genres = Array.from(genresSet);

    console.log(`→ Inserting ${genres.length} genres...`);
    for (const name of genres) {
      await client.query(
        `INSERT INTO genres (name) VALUES ($1) ON CONFLICT (name) DO NOTHING;`,
        [name]
      );
    }

    // --- Films ---
    console.log(`→ Inserting ${films.length} films...`);
    for (const film of films) {
      const { rows: existing } = await client.query(
        `SELECT id FROM films WHERE title = $1 AND release_year = $2`,
        [film.title, film.release_year]
      );

      let filmId;

      if (existing.length === 0) {
        const result = await client.query(
          `INSERT INTO films (title, description, release_year, director, price, stock, cover_url)
           VALUES ($1, $2, $3, $4, $5, $6, $7)
           RETURNING id;`,
          [
            film.title,
            film.description,
            film.release_year,
            film.director,
            parseFloat(film.price),
            film.stock,
            film.cover_url,
          ]
        );
        filmId = result.rows[0].id;
      } else {
        filmId = existing[0].id;
        continue;
      }

      for (const genreName of film.genres) {
        const { rows: genreRows } = await client.query(
          `SELECT id FROM genres WHERE name = $1;`,
          [genreName]
        );
        const genreId = genreRows[0]?.id;
        if (genreId) {
          await client.query(
            `INSERT INTO film_genres (film_id, genre_id)
             VALUES ($1, $2)
             ON CONFLICT DO NOTHING;`,
            [filmId, genreId]
          );
        }
      }
    }

    console.log("✅ Seed completed successfully!");
  } catch (err) {
    console.error("❌ Error seeding database:", err.message);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

if (require.main === module) {
  seed();
}

module.exports = seed;
