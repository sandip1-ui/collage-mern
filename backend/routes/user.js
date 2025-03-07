const express=require('express');
const { postRegisterController, getLoginDetails } = require('../controllers/userControler');
const router=express.Router();

router.post('/register',postRegisterController);
router.post('/login',getLoginDetails);

module.exports=router;

