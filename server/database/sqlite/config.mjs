import sqlite3 from "sqlite3";

const db = new sqlite3.Database("db-bank.sqlite", (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
    console.log("Connected to the sqlite database.");
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    policy_terms BOOLEAN NOT NULL DEFAULT false,
    timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
		)`,
      (err) => {
        if (err) {
          console.log(err.message);
          throw err;
        }
      }
    );
  }
});

/**
 * @param {string} query SQL syntax query
 * @param {[]} params Array of values request on query
 * @returns resolve promise
 */
export const dbQuery = async (query, params) => {
  return await new Promise((resolve, reject) => {
    db.all(query, params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

export default db;
