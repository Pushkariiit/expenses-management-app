const mongoose = require('mongoose');

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`server running on ${mongoose.connection.host}`);
    }
    catch(e){
        console.log(e);
    }
}

module.exports = connectDB;