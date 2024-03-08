const nodemailer = require('nodemailer');


exports.sendEmail = async(report)=>{

// Create a Nodemailer transporter using SMTP
let transporter = nodemailer.createTransport({
 // host: "smtp.ethereal.email",
 service:"gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

// Setup email data
let mailOptions = {
  from: 'medmanager897@gmail.com',
  to: 'medmanager897@gmail.com',
  subject: 'Test Email',
  text: `Report: ${report}`
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
    return;
  }
  console.log('Email sent successfully!');
 });
}
/* const emailjs = require('emailjs');

exports.sendEmail = (report) => {
  var templateParams = {
    message: `REPORT: ${report}`
  };

  const server = emailjs.server.connect({
    user: process.env.PUBLIC_KEY,
    password: process.env.PRIVATE_KEY,
    host: 'smtp.emailjs.com',
    ssl: true
  });

  server.send({
    text: 'REPORT: ' + report,
    from: 'TEST@example.com',
    to: 'medmanager897@gmail.com',
    subject: 'Your Subject'
  }, function(err, message) {
    if (err) {
      console.log('FAILED...', err);
    } else {
      console.log('SUCCESS!', message);
    }
  });
}



 */
/* 
const emailjs = require('');

exports.sendEmail = (report)=>{

var templateParams = {
  message: `REPORT: ${report}`
};

emailjs
  .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY, // optional, highly recommended for security reasons
  })
  .then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function (err) {
      console.log('FAILED...', err);
    },
  );
}


 */




/* const emailjs = '@emailjs/nodejs';
const { EmailJSResponseStatus } = '@emailjs/nodejs';

exports.sendEmail = async(report)=>{
try {
  await emailjs.send(
    process.env.SERVICE_ID,
    process.env.PRIVATE_KEY,

    {
      message: `Report: ${report}`,
    },

    {
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY, // optional, highly recommended for security reasons
    },
  );
  console.log('SUCCESS!');
} catch (err) {
  if (err) {
    console.log('EMAILJS FAILED...', err);
    return;
  }

  console.log('ERROR', err);
 }
} */