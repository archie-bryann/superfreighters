// const nodemailer = require('nodemailer');

// // var transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user:process.env.user,
// //     pass: process.env.pass
// //   }
// // });

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   protocol: "tls",  
//   auth: {
//     user:process.env.user,
//     pass: process.env.pass
//   }
// });

// module.exports = transporter

const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const dotenv = require('dotenv');
dotenv.config();


var transporter = nodemailer.createTransport(smtpTransport({
  pool:true,
  host: 'mail.foodnet.com.ng',
  port: 587,
  //secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.emailUser, // your domain email address
    pass: process.env.emailPassword // your password
  },
  tls: { 
  rejectUnauthorized: false 
  }
}));

module.exports = transporter