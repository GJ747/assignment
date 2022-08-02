const mongoose = require("mongoose");
const Problem = require("../database/problem2")

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/probelm');
    console.log("database started")
  }
async function hello(){
    console.log("hello",await Problem.find({}, null, {sort: {name: 1}}))
}
 
hello();