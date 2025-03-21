const express=require('express');
const { getHomeData } = require('../controllers/homeContoller');
const homeRoute=express.Router();

homeRoute.get('/',getHomeData);

module.exports=homeRoute;