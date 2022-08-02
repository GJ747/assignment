const mongoose = require('mongoose');
const Customer = require('./database/customers')
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/customers');
    console.log("database started")
  }
  const customers = [{
    email : "anurag11@yopmail.com" ,
    name : "anurag"
    },
    {
    email : "sameer11@yopmail.com" ,
    name : "sameer"
    },
    {
    email : "ravi11@yopmail.com" ,
    name : "ravi"
    },
    {
    email : "akash11@yopmail.com" ,
    name : "akash"
    },
    {
    email : "anjali11@yopmail.com" ,
    name : "anjai"
    },
    {
    email : "santosh11@yopmail.com" ,
    name : "santosh"
    },
    ]

    // insert values in database
    
    customers.map(x=>{
      Customer.exists({email:x.email},async function(err,data){
        if(data){
         await Customer.findOneAndUpdate({email:x.email},{name:x.name},{ new: true })
        }else{
          var user = new Customer({email:x.email,name:x.name})
          user.save()
        }
      })
    })