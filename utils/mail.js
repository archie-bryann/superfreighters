const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.user,
    pass: process.env.pass
  }
});

module.exports = transporter