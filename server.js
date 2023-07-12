const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require('./config/connectDB');

const path = require('path');

// dotenv

dotenv.config();

// database connect

connectDB();

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// user routes

app.use('/api/users',require('./routes/userRoute'));

// transaction route

app.use('/api/transactions',require('./routes/transactionRoutes'));


app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

const PORT = 8080 || process.env.PORT;

//listen

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})