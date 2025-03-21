const { getDB }=require("../utils/database")

exports.getBlogData=async (req,res)=>{
   const db=getDB();
   const blogData=await db.collection('allblogs').find().toArray();
   res.json(blogData);
}