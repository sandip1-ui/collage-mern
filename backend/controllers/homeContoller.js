const { getDB } = require("../utils/database");

exports.getHomeData=async(req,res)=>{
  const db=getDB();
   const hotelData=await db.collection('hotels').find().toArray();
   const placeData=await db.collection('places').find().toArray();
   res.json({hotelData,placeData}); 
}