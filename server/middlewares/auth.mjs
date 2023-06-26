import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("TOKENAUTH", token);

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
    console.log("decodedToken", decodedToken);

    if (decodedToken.exp < Date.now() / 1000) {
      return res.status(401).json({ error: "Unauthorized: Token expired" });
    }

    const id = decodedToken.userId;
    console.log("idAUTH", id);
    req.userId = id;

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Your session is not valid!",
    });
  }
};
