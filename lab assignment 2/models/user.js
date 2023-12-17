const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    // username:{
    //     type: String,
    //     required :true,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    // Add other relevant information fields here
});


const User = mongoose.model('User', userSchema);

module.exports = User;