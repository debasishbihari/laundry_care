const mongoose= require('mongoose');
require("dotenv").config();

const connect= async()=>{
    try {
        return mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.log(error);
    }
}

module.exports=connect;