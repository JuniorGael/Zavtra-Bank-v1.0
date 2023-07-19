import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// IMPORTER LE PACKAGE NODEMAILER
import nodemailer from "nodemailer";

let transporter = null;

if (process.env.NODE_ENV === "production") {
  transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEJSMAILERUSER, // celui qui recoit les messages
      pass: process.env.NODEJSMAILERPASSWORD,
    },
  });
  console.log(transporter);
} else {
  transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    secure: false,
    ignoreTLS: true,
  });
}

export const sendEmail = (req, res) => {
  const { username, email, subject, message } = req.body;

  const htmlTemplate = `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width,initial-scale=1">
	  <meta name="x-apple-disable-message-reformatting">
	  <title>${subject}</title>
	  <!--[if mso]> 
      <noscript> 
        <xml> 
          <o:OfficeDocumentSettings> 
          <o:PixelsPerInch>96</o:PixelsPerInch> 
          </o:OfficeDocumentSettings> 
        </xml> 
      </noscript> 
  <![endif]-->
</head>
<body style="margin:0; padding:0; font-size:18px; font-family: Arial,sans-serif;">
  <header style="background-color: #ececec; padding:1rem">
    <h2 style="text-transform: capitalize;">Subject: ${subject}</h1>
    <h2 style="text-transform: capitalize;">From: ${username}</h2>
    <h2 style="text-transform: capitalize;">Email: <a style="text-transform: lowercase;" href="mailto:${email}">${email}</a></p>
  </header>
	<main style="line-height: 2; padding: 2rem 4rem; text-align: justify;">
    <p>${message}</p>
  </main>
</body>
</html>`;

  const mailOptions = {
    from: email, // celui qui envoit les messages
    to: process.env.NODEJSMAILERUSER,
    subject: subject,
    text: message,
    html: htmlTemplate,
  };


  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent successfully!");
      res.status(200).json({ message: "Email sent successfully!" });
    }
  });
};
