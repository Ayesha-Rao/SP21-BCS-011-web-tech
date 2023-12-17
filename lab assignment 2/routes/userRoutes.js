const usercontroller = require('../controller/userController');
const {authenticateToken} = require('../middlewares/loginMiddleware');


const express = require('express');

const router = express.Router();

const {requireAuthentication} = require('../middlewares/loginMiddleware');
//router.post('/register', usercontroller.register);

//api
router.get('/api/users', authenticateToken,usercontroller.getUsers);

//router.post('/login', usercontroller.login);

router.post('/products.html', requireAuthentication, function(req, res) {
    res.render('pages/products');
  });
  router.get("/logout",usercontroller.logout)

  router.post('/register', usercontroller.register);
router.post('/login', usercontroller.login);
router.post('/logout', usercontroller.logout);
router.get('/',function(req,res){
  res.render("pages/landingpage")
})

module.exports = router;