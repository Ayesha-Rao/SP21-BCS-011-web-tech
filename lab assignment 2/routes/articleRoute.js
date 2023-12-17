const express = require('express');
const articleController = require('../controller/articleController');
const router = express.Router();
const {requireAuthentication} = require('../middlewares/loginMiddleware');
const {authenticateToken} = require('../middlewares/loginMiddleware');

//jewellery api
router.post('/api/addarticle',articleController.addarticle);
router.get('/api/getarticle',articleController.getarticle);



module.exports = router;