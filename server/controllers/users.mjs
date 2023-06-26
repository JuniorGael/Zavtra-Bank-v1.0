import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import db from "../database/db.mjs";


export const signup = (req, res, next) => {
  const { username, email, password, policyTerms } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err)
      res.status(500).json({
        error: "erreur serveur",
      });

    if (result.length > 0) {
      // error
      return res.status(400).json({
        message: "This username is already exist!",
      });
    }
    // user not use
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: "erreur serveur hash",
        });
      } else {
        db.query(
          "INSERT INTO users (username, email, password, policy_terms) VALUES(?, ?, ?, ?)",
          [username, email, hash, policyTerms],
          (err) => {
            if (err) {
              return res.status(500).json({
                error: "error serveur insert",
              });
            }
            return res.status(201).json({
              message: "Your registered!",
            });
          }
        );
      }
    });
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(401).json({
        message: "User does not exist!",
      });
    }
    const bcryptResult = await bcrypt.compare(password, rows[0].password);
    if (!bcryptResult) {
      return res.status(401).json({
        error: "Password invalid!",
      });
    }
    const token = jwt.sign(
      {
        userId: rows[0].id,
      },
      `${process.env.JWT_KEY_TOKEN}`,
      { expiresIn: "24h" }
    );
    res.cookie("token", token);
    console.log("TOKENLOGIN", token);

    return res.status(200).json({
      message: "Logged in!",
      token,
      user: {
        userId: rows[0].id,
        email: rows[0].email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Erreur serveur",
    });
  }
};

export const auth = (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);

    const id = decodedToken.userId;
    console.log("idAUTH", id);
    req.userId = id;

    res.status(200).json({
      message: "Authorized",
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      error: "Your session is not valid!",
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Token have been cleared successfully!",
  });
};

