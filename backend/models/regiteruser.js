const { getDB } = require("../utils/database");
const jwt=require('jsonwebtoken');

module.exports=class RegisterUser{
  constructor(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
  }
  async save(){
    const db=getDB();
    const getData=await db.collection('register').insertOne(this);
    this._id=getData.insertedId.toString();
  }
  static async exist(email){
    const db=getDB();
    return await db.collection('register').findOne({email:email});
  }
  generateToken(){
    return jwt.sign({
      userId:this._id,
      email:this.email, 
    },
    process.env.JWT_SECRET_KEY,  
    {
      expiresIn:'30d',
    }
    )
  } 
}