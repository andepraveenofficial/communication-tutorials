require("dotenv").config();
const express = require("express");
const mailTemplate = require("./template/mail.template");

const sendEmail = require("./utils/sendEmail");

/* -----> Server Instance <----- */
const app = express();

/* ------> Start the Server <----- */

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* -----> Routes <----- */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* -----> Email Route <----- */

const EMAIL = process.env.EMAIL;

// Define the email message
const msg = {
  from: EMAIL, // Provider : must be verified with SendGrid
  to: "praveenande2023@gmail.com", // Receiver
  subject: "I am Subject", // Subject of the email
  text: "I am text content", // Plain text content of the email
  html: mailTemplate, // HTML content of the email
};

// Define a route to send an email
app.get("/send-email", async (req, res) => {
  try {
    await sendEmail(msg);
    res.send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Failed to send email.");
  }
});
