const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
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

app.get('/milestones', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/milestones.html'); 
});

app.get('/projects', (req, res) => { 
  res.sendFile(process.cwd() + '/public/views/project.html'); 
});

app.get('/*', (req, res) => {
	res.sendFile(process.cwd() + '/public/views/404.html')
})
