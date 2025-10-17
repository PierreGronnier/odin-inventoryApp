const pool = require("./pool");

// -------------------- getAllFilms --------------------
async function getAllFilms() {
  const { rows: films } = await pool.query(`
    SELECT DISTINCT films.*
    FROM films
    ORDER BY films.id
  `);

  for (let film of films) {
    const { rows: genres } = await pool.query(
      `SELECT genres.name 
       FROM genres 
       JOIN film_genres ON genres.id = film_genres.genre_id 
       WHERE film_genres.film_id = $1`,
      [film.id]
    );
    film.genres = genres.map((g) => g.name);
  }

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
  const { rows } = await pool.query(`SELECT * FROM films WHERE id = $1`, [id]);

  if (rows.length === 0) return null;

  const film = rows[0];

  // Récupérer les genres séparément
  const { rows: genres } = await pool.query(
    `SELECT genres.name 
     FROM genres 
     JOIN film_genres ON genres.id = film_genres.genre_id 
     WHERE film_genres.film_id = $1`,
    [id]
  );

  film.genres = genres.map((g) => g.name);
  return film;
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

  const values = genreIds
    .map((genreId, index) => `($1, $${index + 2})`)
    .join(", ");

  const query = `INSERT INTO film_genres (film_id, genre_id) VALUES ${values}`;
  await pool.query(query, [filmId, ...genreIds]);
}

// -------------------- linkFilmGenres --------------------
async function linkFilmGenres(filmId, genreIds) {
  if (!genreIds || genreIds.length === 0) return;

  const values = genreIds
    .map((genreId, index) => `($1, $${index + 2})`)
    .join(", ");

  const query = `INSERT INTO film_genres (film_id, genre_id) VALUES ${values}`;
  await pool.query(query, [filmId, ...genreIds]);
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
  const { rows } = await pool.query("SELECT * FROM genres WHERE id = $1", [id]);
  return rows[0] || null;
}

// -------------------- getFilmsByGenre --------------------
async function getFilmsByGenre(genreId) {
  const { rows: films } = await pool.query(
    `SELECT DISTINCT films.*
     FROM films
     JOIN film_genres ON films.id = film_genres.film_id
     WHERE film_genres.genre_id = $1
     ORDER BY films.id`,
    [genreId]
  );

  for (let film of films) {
    const { rows: genres } = await pool.query(
      `SELECT genres.name 
       FROM genres 
       JOIN film_genres ON genres.id = film_genres.genre_id 
       WHERE film_genres.film_id = $1`,
      [film.id]
    );
    film.genres = genres.map((g) => g.name);
  }

  return films;
}

// -------------------- deleteGenre --------------------
async function deleteGenre(id) {
  await pool.query("DELETE FROM film_genres WHERE genre_id = $1", [id]);
  await pool.query("DELETE FROM genres WHERE id = $1", [id]);
}

// -------------------- searchFilms --------------------
async function searchFilms(filters) {
  const {
    title,
    director,
    genre_id,
    year,
    min_price,
    max_price,
    min_stock,
    max_stock,
  } = filters;

  let baseQuery = `
    SELECT DISTINCT films.*
    FROM films
  `;

  const conditions = [];
  const values = [];
  let index = 1;

  if (genre_id && genre_id !== "all") {
    baseQuery += ` JOIN film_genres ON films.id = film_genres.film_id`;
    conditions.push(`film_genres.genre_id = $${index++}`);
    values.push(genre_id);
  }

  if (title) {
    conditions.push(`LOWER(films.title) LIKE LOWER($${index++})`);
    values.push(`%${title}%`);
  }
  if (director) {
    conditions.push(`LOWER(films.director) LIKE LOWER($${index++})`);
    values.push(`%${director}%`);
  }
  if (year) {
    conditions.push(`films.release_year = $${index++}`);
    values.push(year);
  }
  if (min_price) {
    conditions.push(`films.price >= $${index++}`);
    values.push(min_price);
  }
  if (max_price) {
    conditions.push(`films.price <= $${index++}`);
    values.push(max_price);
  }
  if (min_stock) {
    conditions.push(`films.stock >= $${index++}`);
    values.push(min_stock);
  }
  if (max_stock) {
    conditions.push(`films.stock <= $${index++}`);
    values.push(max_stock);
  }

  if (conditions.length > 0) {
    baseQuery += ` WHERE ${conditions.join(" AND ")}`;
  }

  baseQuery += ` ORDER BY films.title`;

  const { rows: films } = await pool.query(baseQuery, values);

  // Récupérer les genres pour chaque film séparément
  for (let film of films) {
    const { rows: genres } = await pool.query(
      `SELECT genres.name 
       FROM genres 
       JOIN film_genres ON genres.id = film_genres.genre_id 
       WHERE film_genres.film_id = $1`,
      [film.id]
    );
    film.genres = genres.map((g) => g.name);
  }

  return films;
}

module.exports = {
  // Films
  getAllFilms,
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
  //Search
  searchFilms,
};
