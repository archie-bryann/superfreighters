const nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user:process.env.user,
//     pass: process.env.pass
//   }
// });

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  protocol: "tls",  
  auth: {
    user:process.env.user,
    pass: process.env.pass
  }
});

module.exports = transporter