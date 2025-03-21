const express=require('express');
const { getBlogData } = require('../controllers/blogController');
const blogRoute=express.Router();

blogRoute.get('/blogs',getBlogData);

module.exports=blogRoute;