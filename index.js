const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config()
const multiparty = require("multiparty");

const app = express();

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log(`Listening on port ${port}`);
})

// https://replit.com/talk/learn/NodeJs-Express-tutorial/23519

app.get('/', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/index.html'); 
});

app.get('/skills', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/skills.html'); 
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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("All set.");
  }
});

app.post("/send", (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    console.log(data);
    const mail = {
      from: data.email,
      to: process.env.EMAIL,
      subject: data.subject,
      text: `Sent by ${data.name} via email - ${data.email} \n${data.message}`,
    };
    let r = /[A-Za-z0-9$!@#%^&*]+@[A-Za-z]+\.[A-Za-z]+/g;
    if(r.test(data.email)){
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  }
  });
});