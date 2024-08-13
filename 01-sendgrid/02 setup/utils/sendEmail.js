const sgMail = require("../config/sendgrid");

// Define a function to send an email
const sendEmail = async (msg) => {
  try {
    // Attempt to send the email
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    // Log the error details
    console.error("Error sending email:", error);

    // If there is a response from SendGrid, log its body
    if (error.response) {
      console.error("Response body:", error.response.body);
    }
  }
};

module.exports = sendEmail;
