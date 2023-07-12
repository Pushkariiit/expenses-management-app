const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({

    userid :{
        type:String,
        required:true,
    },

    amount :{
        type:Number,
        required:[true,'mention the amount'],
    },
    type:{
        type:String,
        required:[true,'mention the type'],
    },
    category :{
        type:String,
        required:[true, 'mention the category'],

    },
    reference:{
        type:String,
        required:[true,'mention the reference'],
    },
    descriptions :{
        type: String,
    },
    date:{
        type:Date,
        required:[true,'mention the date'],
    },

},{timestamps:true,});

const transactionModel = mongoose.model('transactions',transactionSchema);

module.exports = transactionModel;