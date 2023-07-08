import { Router } from "express";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { validatePassword } from "../middlewares/password.mjs";

import {
  signup,
  login,
  logout,
  getUsers,
  deleteUser,
} from "../controllers/users.mjs";

import { sendEmail } from "../controllers/emailController.mjs";

import auth from "../middlewares/auth.mjs";

const router = new Router();

router.post("/register", validatePassword, signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/auth", auth, (req, res) => {
  res.status(200).json({ token: req.cookies.token });
});

router.get("/users", auth, getUsers);
router.delete("/users/:id", deleteUser);

router.post("/sendEmail", sendEmail);

export default router;
