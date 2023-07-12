const userModel = require('../models/userModel');

// login callback

const loginController = async (req,res) =>{

    try{

        const {email,password} = req.body;

        const user = await userModel.findOne({email,password});

        if(!user){
            return res.status(400).send("user doesn't exist");
        }
        res.status(200).json({
            success:true,
            user,
        });

    }catch(e){
        res.status(400).json({
            success:false,
            e,
        });
    }

}

// register controller

const registerController = async (req,res) =>{

    try{

        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(200).json({
            success:true,
            newUser,
        });

    }
    catch(e){
        res.status(400).json({
            success:false,
            e,
        })
    }

}

module.exports = {loginController,registerController};