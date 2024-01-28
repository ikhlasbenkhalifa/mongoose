const express = require("express");
const mongoose = require("mongoose");
const app = express();

const morgan=require('morgan')

const cors= require('cors')
app.use(cors())
app.use(cors({
  origin: 'http://localhost:4000' // Allow only requests from this origin
 }));

const getUserRoute=require('../server/routes/getUserRoute')

// Now you can use authRoute as required

const url = "mongodb://localhost:27017/users";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Parse incoming request bodies

app.use('/getUser', getUserRoute)

app.use(morgan('dev'))


//connection to data base
async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
}

connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});