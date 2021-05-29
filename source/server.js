const express = require('express');
const connectDB = require('../source/db');
require('dotenv').config()  // Allow us to use the environmental variables in dotenv 
const {PORT}= process.env;
// connect to db

connectDB();

// create a basic express route

const userRoutes = require('./routes/userRoute');

//initialize express
const app = express();

//initialize express middleware

app.use(express.json({extended:false}));

app.use(userRoutes);

//Port
const port = process.env.PORT || PORT;

//Listen to connection
app.listen(port,()=>console.log(`App is running on port ${port}`));

