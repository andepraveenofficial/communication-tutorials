# Setup : sendgrid

## Steps

### Step 1 : Set up a SendGrid account

- Sign up for a SendGrid account at https://sendgrid.com/
- Obtain your API key from the SendGrid dashboard

### Step 2 : Create Environment

1. Create Node Environment
2. Create Server : `npm install express`
3. Setup Environmental Variables : `npm install dotenv`
4. Install sendgrid : `npm install @sendgrid/mail`

### step 3 : Import the SendGrid package

`const sgMail = require('@sendgrid/mail');`

### step 4 : Set up your SendGrid API key

`sgMail.setApiKey('YOUR_SENDGRID_API_KEY');`

### step 5 : Create Message

```js
const msg = {
  to: "praveenande2023@gmail.com", // Receiver
  from: EMAIL, // Provider : must be verified with SendGrid take from .env
  subject: "I am Subject", // Subject of the email
  text: "I am text content", // Plain text content of the email
  html: "<strong>I am HTML Template</strong>", // HTML content of the email
};
```

### step 6 : Send Email

```js
app.get("/send-email", async (req, res) => {
  try {
    await sendEmail(msg);
    res.send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Failed to send email.");
  }
});
```

### Installation

- `npm install`

### Start the Appliacation

- Production : `npm start`
- Development : `npm run dev`
