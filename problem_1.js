const express = require("express");
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const User = require("./database/user")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/test_Login_signup');
    console.log("database started")
  }

  //signup user with mobile number and password

  app.post('/signup',async(req,res,next)=>{
    const {number,password} = req.body;
    const user = new User({
        number,
        password
    })
    await user.save();
})

// login user with mobile number and password

app.post('/login',async (req,res)=>{
  const {number,password} = req.body;
  const user = await User.findOne({number});
  
  if(password===user.password){
      res.send("welcome")
  }
})

  app.listen(3000,()=>{
    console.log("server started")
  })