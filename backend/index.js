const mongoose = require('mongoose');
const express = require('express');
const connect= require('./config/db');

const app = express();
require("dotenv").config();

app.listen(process.env.PORT,async()=>{
    await connect();
    console.log("Connected to DB");
    console.log(`Server running on port ${process.env.PORT}`);
})
