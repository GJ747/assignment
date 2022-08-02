const mongoose = require('mongoose');

const customer = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    name : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Customer',customer);