const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "********@gmail.com",
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});



// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config(); // load EMAIL_USER & EMAIL_PASS from .env

// const app = express();
// const router = express.Router();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/", router);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Configure nodemailer transporter
// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // use environment variable
//     pass: process.env.EMAIL_PASS, // use environment variable
//   },
// });

// // Verify transporter
// contactEmail.verify((error) => {
//   if (error) {
//     console.log("Nodemailer Error:", error);
//   } else {
//     console.log("Ready to send emails");
//   }
// });

// // POST /contact endpoint
// router.post("/contact", (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;

//   if (!firstName || !lastName || !email || !message) {
//     return res.status(400).json({ status: "All fields are required" });
//   }

//   const mail = {
//     from: `${firstName} ${lastName} <${email}>`,
//     to: process.env.EMAIL_USER, // your receiving email
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
//            <p><strong>Email:</strong> ${email}</p>
//            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
//            <p><strong>Message:</strong> ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error, info) => {
//     if (error) {
//       console.log("Email send error:", error);
//       return res.status(500).json({ status: "Error sending message", error });
//     }
//     res.status(200).json({ status: "Message Sent", info });
//   });
// });

