const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config()
// https://nodemailer.com/about/

const app = express();

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

app.listen(3000, () => { 
    console.log('Listening on port 3000') 
})

// https://replit.com/talk/learn/NodeJs-Express-tutorial/23519

app.get('/', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/index.html'); 
});

app.get('/blog', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/blog.html'); 
});

app.get('/contact', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/contact.html'); 
});

app.get('/projects', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/project.html'); 
});

app.get('/*', (req, res) => {
	res.sendFile(process.cwd() + '/public/views/404.html')
});

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   }
// });

// https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a

// var mailOptions = {
//   from: process.env.EMAIL,
//   to: process.env.EMAIL,
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });