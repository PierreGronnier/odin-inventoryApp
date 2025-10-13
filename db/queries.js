const pool = require("./pool");

// -------------------- getAllFilms --------------------
async function getAllFilms() {
  const { rows: films } = await pool.query(`
    SELECT films.*, 
           ARRAY_REMOVE(ARRAY_AGG(genres.name), NULL) AS genres
    FROM films
    LEFT JOIN film_genres ON films.id = film_genres.film_id
    LEFT JOIN genres ON genres.id = film_genres.genre_id
    GROUP BY films.id
    ORDER BY films.id
  `);
  return films;
}

// -------------------- getAllGenres --------------------
async function getAllGenres() {
  const { rows: genres } = await pool.query(
    "SELECT * FROM genres ORDER BY name"
  );
  return genres;
}

// -------------------- insertFilm --------------------
async function insertFilm({
  title,
  description,
  release_year,
  director,
  price,
  stock,
  cover_url,
}) {
  const result = await pool.query(
    `INSERT INTO films (title, description, release_year, director, price, stock, cover_url)
     VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING id`,
    [title, description, release_year, director, price, stock, cover_url]
  );
  return result.rows[0].id;
}

// -------------------- GET FILM BY ID --------------------
async function getFilmById(id) {
  const { rows } = await pool.query(
    `
      SELECT films.*, 
             ARRAY_REMOVE(ARRAY_AGG(genres.name), NULL) AS genres
      FROM films
      LEFT JOIN film_genres ON films.id = film_genres.film_id
      LEFT JOIN genres ON genres.id = film_genres.genre_id
      WHERE films.id = $1
      GROUP BY films.id
    `,
    [id]
  );

  return rows[0];
}

// -------------------- deleteFilm --------------------
async function deleteFilm(id) {
  await pool.query("DELETE FROM film_genres WHERE film_id = $1", [id]);
  await pool.query("DELETE FROM films WHERE id = $1", [id]);
}

// -------------------- updateFilm --------------------
async function updateFilm(
  id,
  { title, description, release_year, director, price, stock, cover_url }
) {
  await pool.query(
    `UPDATE films
     SET title=$1, description=$2, release_year=$3, director=$4, price=$5, stock=$6, cover_url=$7
     WHERE id=$8`,
    [title, description, release_year, director, price, stock, cover_url, id]
  );
}

// -------------------- updateFilmGenres --------------------
async function updateFilmGenres(filmId, genreIds) {
  await pool.query("DELETE FROM film_genres WHERE film_id=$1", [filmId]);
  if (!genreIds || genreIds.length === 0) return;
  for (let genreId of genreIds) {
    await pool.query(
      "INSERT INTO film_genres (film_id, genre_id) VALUES ($1, $2)",
      [filmId, genreId]
    );
  }
}

// -------------------- linkFilmGenres --------------------
async function linkFilmGenres(filmId, genreIds) {
  if (!genreIds || genreIds.length === 0) return;
  for (let genreId of genreIds) {
    await pool.query(
      "INSERT INTO film_genres (film_id, genre_id) VALUES ($1, $2)",
      [filmId, genreId]
    );
  }
}

// -------------------- getAllGenres --------------------
async function getAllGenres() {
  const { rows: genres } = await pool.query(`
      SELECT * FROM genres
      ORDER BY name
    `);
  return genres;
}

// -------------------- addGenre --------------------
async function addGenre(name) {
  await pool.query(
    "INSERT INTO genres (name) VALUES ($1) ON CONFLICT DO NOTHING",
    [name]
  );
}

// -------------------- getGenreById --------------------
async function getGenreById(id) {
  return pool.query("SELECT * FROM genres WHERE id = $1", [id]);
}

// -------------------- getFilmsByGenre --------------------
async function getFilmsByGenre(genreId) {
  return pool.query(
    `
      SELECT films.*, 
             ARRAY_REMOVE(ARRAY_AGG(genres.name), NULL) AS genres
      FROM films
      LEFT JOIN film_genres ON films.id = film_genres.film_id
      LEFT JOIN genres ON genres.id = film_genres.genre_id
      WHERE film_genres.genre_id = $1
      GROUP BY films.id
      ORDER BY films.id
    `,
    [genreId]
  );
}

// -------------------- deleteGenre --------------------
async function deleteGenre(id) {
  await pool.query("DELETE FROM film_genres WHERE genre_id = $1", [id]);
  await pool.query("DELETE FROM genres WHERE id = $1", [id]);
}

module.exports = {
  // Films
  getAllFilms,
  getAllGenres,
  insertFilm,
  getFilmById,
  updateFilm,
  updateFilmGenres,
  deleteFilm,
  // Genres
  linkFilmGenres,
  getAllGenres,
  addGenre,
  getGenreById,
  getFilmsByGenre,
  deleteGenre,
};
