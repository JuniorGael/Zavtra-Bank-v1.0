import Database from "../database/db.mjs";

const db = new Database();

const connection = await db.getConnect();

connection.on("error", async (err) => {
  console.log("db error", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    // restart the connection
    connection = await db.getConnect();
  } else {
    throw err;
  }
});
