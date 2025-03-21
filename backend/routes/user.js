const express=require('express');
const { postRegisterController, getLoginDetails } = require('../controllers/userControler');
const userRouter=express.Router();

userRouter.post('/register',postRegisterController);
userRouter.post('/login',getLoginDetails);

module.exports=userRouter;

