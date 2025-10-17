const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  statement_timeout: 10000,
  query_timeout: 10000,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

pool
  .connect()
  .then((client) => {
    console.log("✅ Connected to PostgreSQL successfully!");
    client.release();
  })
  .catch((err) => {
    console.error("❌ Failed to connect to PostgreSQL:", err.message);
  });

pool.on("connect", (client) => {
  console.log("🆕 New database connection established");
});

pool.on("error", (err, client) => {
  console.error("💥 Database error:", err);
});

module.exports = pool;
