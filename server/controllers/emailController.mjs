import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// IMPORTER LE PACKAGE NODEMAILER
import nodemailer from "nodemailer";

let transporter = null;

if (process.env.NODE_ENV === "production") {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEJSMAILERUSER,
      pass: process.env.NODEJSMAILERPASSWORD,
    },
  });
} else {
  transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    secure: false,
    ignoreTLS: true,
  });
}

export const sendEmail = (req, res) => {
  const { subject, email, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: process.env.NODEJSMAILERUSER,
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent successfully!");
      res.status(200).json({ message: "Email sent successfully!" });
    }
  });
};
