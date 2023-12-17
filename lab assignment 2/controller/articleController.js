const Article = require("../models/article");
const bcrypt = require("bcrypt");
const req = require("express/lib/request");

const addarticle = async (req, res) => {
    
    const {title, description, price} = req.body;
    try{
    console.log('Received data:', { title, description, price });
    const newarticle = new Article({ title, description, price});
    await newarticle.save();
    res.send('article added successfully');
    console.log("article added successfully");
}
    catch (error) {  
    console.error(error);
    res.status(500).send('Error adding article');
    console.log("Error adding article");
    }
}
const getarticle = async (req, res) => {
 console.log("getarticle");   
}


module.exports = {addarticle,getarticle,};