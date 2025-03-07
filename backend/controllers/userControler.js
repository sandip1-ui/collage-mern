const RegisterUser = require("../models/regiteruser");
const bcryptjs=require("bcryptjs");

exports.postRegisterController=async (req,res,next)=>{ 
  const {name,email,password}=req.body;
  if(await RegisterUser.exist(email)){
    return res.json({msg:"Email already exist"})
  }else{
    const hash_password=await bcryptjs.hash(password,10);
    const registeruser=new RegisterUser(name,email,hash_password)
    registeruser.save();
   return res.json({token:await registeruser.generateToken()});
  }
}

exports.getLoginDetails=async (req,res)=>{
   const {email,password}=req.body;
   const loginData=await RegisterUser.exist(email)
    if(loginData && await bcryptjs.compare(password,loginData.password)){
      return res.json({userId:loginData._id.toString()});
    }
   else{
      return res.json({msg:"plase enter valid email or password"})
   }
} 