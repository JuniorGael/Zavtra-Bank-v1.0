//importer le package pour utiliser mes variables d'environnement
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// importer mysql2
import mysql from "mysql2";

// class Database {
//   constructor() {
//     if (!Database.instance) {
//       Database.instance = this;
//       Database.pool = mysql.createPool({
//         host: process.env.DB_HOST,
//         database: process.env.DB_DATABASE,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD
//       });
//     }
//     return Database.instance;
//   }
//   static connection() {
//     return Database.pool;
//   }
//   getConnect() {
//     return new Promise((resolve, reject) => {
//       Database.pool.getConnection((err, connection) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(connection);
//       });
//     });
//   }
// }

// parametres de connexions a la bdd
const mysql2Connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// connexion a la bdd
mysql2Connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
  } else {
    console.log("connexion a la bdd ");
    console.log(`connected as id ${mysql2Connection.threadId}`);
  }
});

// export default Database;
export default mysql2Connection;
