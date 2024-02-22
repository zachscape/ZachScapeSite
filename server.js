const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!email) {
    return res.status(400).send({ error: 'Email is required' });
  }

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Send email
  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: 'New contact form submission',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Send success response to client
    res.send({ success: true });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
