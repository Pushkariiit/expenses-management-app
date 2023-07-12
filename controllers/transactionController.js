const transactionModel = require("../models/transactionModel");
const moment = require("moment/moment");

 

const getAllTransaction =async(req,res)=>{

    try{
        const {frequency,selectedDate,type} = req.body;
         
        const transactions = await transactionModel.find({

            ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
            userid:req.body.userid,

            ...(type !== "all" && { type }),
        });
        res.status(200).json(transactions);
    }
    catch(e){
        console.log(e);
        res.status(500).json(e)
    }

}

const addAllTransaction =async(req,res)=>{
    try{
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send('transaction created');
    }   catch(e){
        console.lohg(e);
        res.status(404).json(e);
    } 
}

const editTransaction = async (req, res) => {
    try {
      await transactionModel.findOneAndUpdate(
        { _id: req.body.transactionId },
        req.body.payload
      );
      res.status(200).send("Edited SUccessfully");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
};

const deleteTransaction = async (req, res) => {
    try {
      await transactionModel.findOneAndDelete({ _id: req.body.transactionId });
      res.status(200).send("Transaction Deleted! :negative_squared_cross_mark:");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

module.exports = {getAllTransaction,addAllTransaction,editTransaction,deleteTransaction};