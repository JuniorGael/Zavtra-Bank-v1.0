// importer express
import Express from "express";

// importer le package http de nodejs
import http, { METHODS } from "http";

import dotenv from "dotenv";

import morgan from "morgan";

import cors from "cors";

import usersRoutes from "./routes/users.mjs";

import cookieParser from "cookie-parser";
// importer le package pour utiliser les variables d'environnement
dotenv.config({ path: "./.env" });

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

app.use("/", usersRoutes);

// la methode 'createServer()' prend en argument, la fonction qui sera appele a chaque requete recu par le serveur. Ici les fonctions seront dans 'app.js'
const server = http.createServer(app);

// le serveur ecoute les requetes sur le port
// server.listen(process.env.PORT, console.log(`ecoute sur le port: ${process.env.PORT}`));
server.listen(process.env.PORT, () => {
  console.log(`connexion au serveur ${process.env.PORT}`);
});
