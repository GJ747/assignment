const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    number : {
        type : Number,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('User',userSchema);