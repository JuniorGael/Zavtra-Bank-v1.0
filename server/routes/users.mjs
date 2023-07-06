import { Router } from "express";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { validatePassword } from "../middlewares/password.mjs";

import { signup, login, logout } from "../controllers/users.mjs";

import { sendEmail } from "../controllers/emailController.mjs";

import auth from "../middlewares/auth.mjs";

const router = new Router();

///api/auth
router.post("/auth", auth);

///api/login
router.post("/login", login);

///api/sendEmail
router.post("/sendEmail", sendEmail);

///api/register
router.post("/register", validatePassword, signup);

///api/auth/logout
router.post("/logout", logout);

export default router;
