import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`, (err, decoded) => {
      if (err) {
        req.userId = null;
        res.clearCookie("token");
        res.status(401).json({ error: "Unauthorized" });
      } else {
        req.userId = decoded.userId;
        res.status(200).json({ userId: decoded.userId });
      }
      next();
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default auth;
