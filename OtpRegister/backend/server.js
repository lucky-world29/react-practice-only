const express = require("express");
const nodemailer = require("nodemailer");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "luckyrex",
  database: "jwt_auth",
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

// Generate OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "luckyrex2911@gmail.com",
    pass: "kjvbnxkadtpzpokg",
  },
});

// Routes
app.post("/register", (req, res) => {
  const { name,email, password } = req.body;
  const otp = generateOtp();

  db.query("INSERT INTO auth-user (name, email, password, otp) VALUES (?, ?, ?, ?)", [name,email, password, otp], (err) => {
    if (err) return res.status(500).send({ error: "User already exists or database error." });

    // Send OTP email
    transporter.sendMail(
      {
        from: "luckyrex2911@gmail.com",
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}`,
      },
      (err, info) => {
        if (err) return res.status(500).send({ error: "Failed to send email." });
        res.send({ message: "OTP sent to your email.", success: true });
      }
    );
  });
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  db.query("SELECT * FROM users WHERE email = ? AND otp = ?", [email, otp], (err, results) => {
    if (err || results.length === 0) return res.status(400).send({ error: "Invalid OTP or email." });

    // OTP matches
    db.query("UPDATE users SET otp = NULL WHERE email = ?", [email]);
    res.send({ message: "Successfully registered!" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
