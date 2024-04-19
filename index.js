const express = require("express")
const app = express()
// const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

dotenv.config()

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// if there is a problem, check 7:40
// mongoose.connect(process.env.MONGO_URL, () => {
//     console.log("connected to MongoDB")
// });


app.listen(8000, ()=>{
    console.log("Backend server is running!")
})