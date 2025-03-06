const RegisterUser = require("../models/regiteruser");
const bcryptjs=require("bcryptjs");

exports.postRegisterController=async (req,res,next)=>{ 
  const {name,email,password,confirmPassword}=req.body;
  if(password!=confirmPassword){
     res.json({msg:"confirm password not matched"})
  }else if(await RegisterUser.exist(email)){
    res.json({msg:"Email already exist"})
  }else{
    const hash_password=await bcryptjs.hash(password,10);
    const registeruser=new RegisterUser(name,email,hash_password)
    await registeruser.save();
    res.json({});
  }
}