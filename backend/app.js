require("dotenv").config();
const express=require('express');
const userRouter = require('./routes/user');
const { MongoConnect } = require('./utils/database');
const cors=require('cors');
const blogRoute = require("./routes/blog");
const homeRoute = require("./routes/home");

const app=express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors({origin:'http://localhost:5173'}))
app.use(userRouter)
app.use(homeRoute)
app.use(blogRoute)

const PORT=8080;
MongoConnect(()=>{

  app.listen(8080,()=>{
    console.log(`server run on port :${PORT}`); 
  }) 
})