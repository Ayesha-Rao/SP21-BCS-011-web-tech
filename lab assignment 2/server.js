var express = require('express');
var path=require('path')

var app = express();

//sir code 
app.get("/api/universities",function(req,res){
    res.send([
        {
            name: "Comsats", city: "Lahore"
        },
        {
            name: "LUMS", city: "Lahore"
        },

    ])
})


// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join("public")))

// use res.render to load up an ejs view file


app.get('/land', (req, res) => {
    res.render('pages/landingpage'); // This assumes a file named "landingpage.ejs" in the "views/pages" directory
});


// index page
// app.get('/', function(req, res) {
//   res.render('/pages/landingpage');
// });

// about page
// app.get('/about', function(req, res) {
//   res.render('pages/about');
// });

app.listen(4000);
console.log('Server is listening on port 4000');