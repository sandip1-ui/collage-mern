const mongodb=require('mongodb');
const MongoClint=mongodb.MongoClient;
const url="mongodb+srv://sandip:ssg654123@sandip.cn8xu.mongodb.net/?retryWrites=true&w=majority&appName=sandip";

let _db;

const MongoConnect=(callback)=>{

  MongoClint.connect(url).then(client=>{
    _db=client.db('collage-mern');
  }).catch(err=>{
    console.log(err);
  });
  callback();
} 
const getDB=()=>{
  if(!_db){
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.getDB=getDB;
exports.MongoConnect=MongoConnect;