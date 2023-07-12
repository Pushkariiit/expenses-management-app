const mongoose = require('mongoose');

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(res=>{
            console.log("DB Connected!")
    }).catch(err => {
      console.log(Error, err.message);
    })
        console.log(`server running on ${mongoose.connection.host}`);
    }
    catch(e){
        console.log(e);
    }
}

module.exports = connectDB;
