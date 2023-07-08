import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { dbQuery } from "../database/sqlite/config.mjs";

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const signup = async (req, res) => {
  try {
    let admin = false;
    const [{ "COUNT()": count }] = await dbQuery("SELECT COUNT() FROM users");

    if (count === 0) {
      admin = true;
    }

    const { username, email, password, policyTerms } = req.body;

    const user = await dbQuery("SELECT * FROM users WHERE email = ?", [email]);
    if (user[0]) {
      return res.status(400).json({
        message: "This user is already exist!",
      });
    }
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });

    const response = await dbQuery(
      "INSERT INTO users (username, email, password, policy_terms, admin) VALUES(?, ?, ?, ?, ?)",
      [username, email, hashedPassword, policyTerms, admin]
    );

    if (response) {
      return res.status(201).json({
        message: "Registration successful!",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const rows = await dbQuery("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const bcryptResult = await bcrypt.compare(password, rows[0].password);
    if (!bcryptResult) {
      return res.status(400).json({
        error: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: rows[0].id,
      },
      process.env.JWT_KEY_TOKEN,
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );

    res.cookie("token", token);

    return res.status(200).json({
      token: token,
      user: {
        id: rows[0].id,
        admin: rows[0].admin,
      },
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const logout = (_, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Token have been cleared successfully!",
  });
};

export const getUsers = async (req, res) => {
  try {
    const user = await dbQuery("SELECT * FROM users WHERE id = ?", [
      req.userId,
    ]);

    if (!user[0].admin) {
      return res.status(401).json({
        error: "Unauthorized access!",
      });
    }
    const users = await dbQuery("SELECT * FROM users");
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await dbQuery("DELETE * FROM users WHERE id = ?", [req.params.id]);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
