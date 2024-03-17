const nodemailer = require('nodemailer');


exports.sendEmail = async(report)=>{

// Create a Nodemailer transporter using SMTP
let transporter = nodemailer.createTransport({
 // host: "smtp.ethereal.email",
    host: "live.smtp.mailtrap.io",
 //service:"gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
   /*  user: process.env.EMAIL,
    pass: process.env.PASS */
    user: 'api',
    pass: process.env.PASS2
  }
});

// Setup email data
let mailOptions = {
  // from: process.env.EMAIL,
  from: 'mailtrap@demomailtrap.com',
  to: process.env.Email,
  subject: 'You are running out of stock!',
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
