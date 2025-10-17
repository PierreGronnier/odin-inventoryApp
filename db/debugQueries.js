const pool = require("./pool");

async function testFilmsByGenre(genreId) {
  console.log(`🔍 Testing films for genre ID: ${genreId}`);

  // Test 1: Requête simple sans agrégation
  const simpleQuery = await pool.query(
    `SELECT DISTINCT f.id, f.title 
     FROM films f 
     JOIN film_genres fg ON f.id = fg.film_id 
     WHERE fg.genre_id = $1 
     ORDER BY f.id`,
    [genreId]
  );
  console.log(`📊 Simple query count: ${simpleQuery.rows.length}`);
  console.log("Simple results:", simpleQuery.rows.slice(0, 5));

  // Test 2: Vérification des doublons dans film_genres
  const dupCheck = await pool.query(
    `SELECT film_id, genre_id, COUNT(*) as count 
     FROM film_genres 
     WHERE genre_id = $1 
     GROUP BY film_id, genre_id 
     HAVING COUNT(*) > 1`,
    [genreId]
  );
  console.log(`🔎 Duplicate film_genres entries: ${dupCheck.rows.length}`);
  if (dupCheck.rows.length > 0) {
    console.log("Duplicates:", dupCheck.rows);
  }

  return {
    simpleCount: simpleQuery.rows.length,
    duplicates: dupCheck.rows,
  };
}

async function testAllFilms() {
  console.log("🔍 Testing all films query");

  const result = await pool.query(
    `SELECT COUNT(DISTINCT id) as unique_count, COUNT(*) as total_count FROM films`
  );
  console.log(
    `📊 Films - Unique: ${result.rows[0].unique_count}, Total: ${result.rows[0].total_count}`
  );

  return result.rows[0];
}

module.exports = { testFilmsByGenre, testAllFilms };
