// app.js
const express = require('express');
//const mongoose = require('./configs/mongo');
const article=require("./models/article");
const bcrypt=require("bcrypt");
var path=require('path')
var path=require('path');

const app = express();
const port = 3000;
const mongoose=require("mongoose");
const connect=require("./configs/mongo");
connect();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join("public")))



app.use(require("./routes/articleRoute"));

app.get('/admin', (req, res) => {
  res.render('pages/admincontrol'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});

app.get('/articleform.html', (req, res) => {
  res.render('pages/articleform'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});