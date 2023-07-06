// importer express
import Express from "express";

// importer le package http de nodejs
import http from "http";

import dotenv from "dotenv";

import morgan from "morgan";

import cors from "cors";

import usersRoutes from "./routes/users.mjs";

import cookieParser from "cookie-parser";

import * as path from "path";

import { fileURLToPath } from "url";

// importer le package pour utiliser les variables d'environnement
dotenv.config({ path: "./.env" });

// Fix for __dirname and __filename in ES6 modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// importer l'appli app
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(cookieParser());

// logger les requests et les responses
app.use(morgan("dev"));

app.use("/api", usersRoutes);

// Serve static files from the React app.
app.use(Express.static(path.join(__dirname, "../client/dist")));

// Resolve react-router issue.
app.get("/public/*", (_, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"), (err) => {
    if (err) res.status(500).json(err);
  });
});

// la methode 'createServer()' prend en argument, la fonction qui sera appele a chaque requete recu par le serveur. Ici les fonctions seront dans 'app.js'
const server = http.createServer(app);

// le serveur ecoute les requetes sur le port
// server.listen(process.env.PORT, console.log(`ecoute sur le port: ${process.env.PORT}`));
server.listen(process.env.PORT, () => {
  console.log(`connexion au serveur ${process.env.PORT}`);
});
