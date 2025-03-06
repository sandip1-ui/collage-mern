const express=require('express');
const { postRegisterController } = require('../controllers/userControler');
const router=express.Router();

router.post('/register',postRegisterController);

module.exports=router;

