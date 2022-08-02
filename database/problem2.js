const mongoose = require('mongoose');

const problem = new mongoose.Schema({
   name : String,
   email : String,
   subjects : [String]
})

module.exports = mongoose.model('Problem',problem);