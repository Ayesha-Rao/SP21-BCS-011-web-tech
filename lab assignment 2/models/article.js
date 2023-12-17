const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required :true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});


const Article = mongoose.model('Article', articleSchema);

module.exports = Article;