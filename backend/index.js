//const mongoose = require('mongoose');
const express = require('express');
const connect= require('./config/db');
const cors = require('cors');

const appRoute= require("./routes/app.route");
const userRoute = require("./routes/user.route");
const notificationRoute = require("./routes/notification.route");
const otpRoute = require("./routes/resetpassword.route");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/user",userRoute);
app.use("/notification",notificationRoute);
app.use("/otp",otpRoute);
app.use("/laundry",appRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to laundry care");
})

app.listen(process.env.PORT,async()=>{
    await connect();
    console.log("Connected to DB");
    console.log(`Server running on port ${process.env.PORT}`);
})
