const mongoose = require("mongoose");
const Problem = require("../database/problem2")

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/probelm');
    console.log("database started")
  }

  const valuse = [
    {name : "ravi",
     email : "ravi123@gmail.com",
     subjects : ["english","hindi","math"]     
    },
    {name : "kishan",
    email : "kishan11@gmail.com",
    subjects : ["english"]     
   },
   {name : "sameer",
   email : "sameer44@gmail.com",
   subjects : ["english","Maths","English"]     
  },
  ]

  Problem.insertMany(valuse,function(error, docs) {
    console.log(docs)
  })


