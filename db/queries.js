const pool = require("./pool");

// -------------------- getAllFilms --------------------
async function getAllFilms() {
  const { rows } = await pool.query(`
    SELECT 
      f.*,
      COALESCE(
        JSON_AGG(DISTINCT g.name) FILTER (WHERE g.name IS NOT NULL),
        '[]'::JSON
      ) as genres
    FROM films f
    LEFT JOIN film_genres fg ON f.id = fg.film_id
    LEFT JOIN genres g ON fg.genre_id = g.id
    GROUP BY f.id
    ORDER BY f.id
  `);
  return rows;
}

// -------------------- getAllGenres --------------------
async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres ORDER BY name");
  return rows;
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
    SELECT 
      f.*,
      COALESCE(
        JSON_AGG(DISTINCT g.name) FILTER (WHERE g.name IS NOT NULL),
        '[]'::JSON
      ) as genres
    FROM films f
    LEFT JOIN film_genres fg ON f.id = fg.film_id
    LEFT JOIN genres g ON fg.genre_id = g.id
    WHERE f.id = $1
    GROUP BY f.id
    `,
    [id]
  );
  return rows[0] || null;
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
  const { rows } = await pool.query(
    `
    SELECT 
      f.*,
      COALESCE(
        JSON_AGG(DISTINCT g.name) FILTER (WHERE g.name IS NOT NULL),
        '[]'::JSON
      ) as genres
    FROM films f
    LEFT JOIN film_genres fg ON f.id = fg.film_id
    LEFT JOIN genres g ON fg.genre_id = g.id
    WHERE EXISTS (
      SELECT 1 FROM film_genres fg2 
      WHERE fg2.film_id = f.id AND fg2.genre_id = $1
    )
    GROUP BY f.id
    ORDER BY f.id
    `,
    [genreId]
  );
  return rows;
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
    SELECT 
      f.*,
      COALESCE(
        JSON_AGG(DISTINCT g.name) FILTER (WHERE g.name IS NOT NULL),
        '[]'::JSON
      ) as genres
    FROM films f
    LEFT JOIN film_genres fg ON f.id = fg.film_id
    LEFT JOIN genres g ON fg.genre_id = g.id
  `;

  const conditions = [];
  const values = [];
  let index = 1;

  if (genre_id && genre_id !== "all") {
    conditions.push(`EXISTS (
      SELECT 1 FROM film_genres fg2 
      WHERE fg2.film_id = f.id AND fg2.genre_id = $${index}
    )`);
    values.push(genre_id);
    index++;
  }

  if (title) {
    conditions.push(`LOWER(f.title) LIKE LOWER($${index})`);
    values.push(`%${title}%`);
    index++;
  }
  if (director) {
    conditions.push(`LOWER(f.director) LIKE LOWER($${index})`);
    values.push(`%${director}%`);
    index++;
  }
  if (year) {
    conditions.push(`f.release_year = $${index}`);
    values.push(year);
    index++;
  }
  if (min_price) {
    conditions.push(`f.price >= $${index}`);
    values.push(min_price);
    index++;
  }
  if (max_price) {
    conditions.push(`f.price <= $${index}`);
    values.push(max_price);
    index++;
  }
  if (min_stock) {
    conditions.push(`f.stock >= $${index}`);
    values.push(min_stock);
    index++;
  }
  if (max_stock) {
    conditions.push(`f.stock <= $${index}`);
    values.push(max_stock);
    index++;
  }

  if (conditions.length > 0) {
    baseQuery += ` WHERE ${conditions.join(" AND ")}`;
  }

  baseQuery += ` GROUP BY f.id ORDER BY f.title`;

  const { rows } = await pool.query(baseQuery, values);
  return rows;
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
