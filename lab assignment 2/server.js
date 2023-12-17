var express = require('express');
const userRoutes=require('./routes/userRoutes');
var path=require('path')

var app = express();
var path=require('path');
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const User=require("./models/user");
const connect=require("./configs/mongo");
connect();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
//app.use(express.json()); //this is for sending the same data in receive that you initially send in req

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({
    secret: 'your-secret-key', // Change this to a secure random string
    resave: false,
    saveUninitialized: true,
  }));
  
  app.use(bodyParser.urlencoded({ extended: true }));

//sir code 
// app.get("/api/universities",function(req,res){
//     res.send([
//         {
//             name: "Comsats", city: "Lahore"
//         },
//         {
//             name: "LUMS", city: "Lahore"
//         },

//     ])
// })

//npm install mongoose
//make folder model
//file university.js



// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join("public")))



app.use(require("./routes/userRoutes"));






// use res.render to load up an ejs view file

app.get('/jqueryvalidate.html', (req, res) => {
    res.render('pages/jqueryvalidate'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});
app.get('/login.html', (req, res) => {
    res.render('pages/login'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});
app.get('/products.html', (req, res) => {
    res.render('pages/products'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});
app.get('/landingpage.html', (req, res) => {
    res.render('pages/landingpage'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});
app.get('/land', (req, res) => {
    res.render('pages/landingpage'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});

app.get('/reg', (req, res) => {
    res.render('pages/jqueryvalidate'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});
app.get('/products', (req, res) => {
    res.render('pages/products'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});
app.get('/login', (req, res) => {
    res.render('pages/login'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});



// index page
// app.get('/', function(req, res) {
//   res.render('/pages/landingpage');
// });

// about page
// app.get('/about', function(req, res) {
//   res.render('pages/about');
// });

app.listen(3000);
console.log('Server is listening on port 3000');