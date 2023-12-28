const express = require('express');
const articleController = require('../controller/articleController');
const router = express.Router();
const {requireAuthentication} = require('../middlewares/loginMiddleware');
const {authenticateToken} = require('../middlewares/loginMiddleware');

//MAKEUP API
router.post('/api/addarticle',articleController.addarticle);
router.get('/api/getarticle',articleController.getarticle);
router.get('/api/getArticleById/:id',articleController.getarticle);



module.exports = router;