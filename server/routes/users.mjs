import { Router } from "express";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { validatePassword } from "../middlewares/password.mjs";

import { signup, login, logout, auth } from "../controllers/users.mjs";

import { sendEmail } from "../controllers/emailController.mjs";

import { langController } from "../controllers/langController.mjs";

const router = new Router();

//http://localhost:5174/auth
router.post("/auth", auth);

//http://localhost:5174/login
router.post("/login", login);

//http://localhost:5174/sendEmail
router.post("/sendEmail", sendEmail);

//http://localhost:5174/register
router.post("/register", validatePassword, signup);

//http://localhost:5174/auth/logout
router.post("/logout", logout);

router.post("/getLang", langController)

export default router;
