import { Form, redirect, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import style from './CreateBlogs.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { blogActios } from "../../store";

const CreateBlogs=()=>{
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const heading=useRef();
  const name=useRef();
  const content=useRef();
  const tags=useRef();

  // title: "Exploring the Hidden Gems of Bali",
  //   author: "Sophia Carter",
  //   date: "2024-02-10",
  //   content: "Bali is more than just beaches and nightlife. Explore the serene waterfalls, lush rice terraces, and authentic cultural villages that make this island truly special...",
  //   tags: [

  const addBlogItems=(event)=>{
    event.preventDefault();
    const date=new Date().toLocaleDateString();
    const payload={title:heading.current.value,
      author:name.current.value,
      date:date,
      content:content.current.value,
      tags:tags.current.value.split(','),
    }
    console.log(payload)
    dispatch(blogActios.addItem(payload));
    heading.current.value="";
    name.current.value="";
    content.current.value="";
    tags.current.value=""
    navigate('/blogs')
  }

  return(<>
<div className={style.container}>
  <form className={style.formdetails} onSubmit={addBlogItems}>
       <div className={style.input}>
        <label htmlFor="heading">Blog Heading</label>
        <input type="text" ref={heading} placeholder="Enter heading for your blog"/>
       </div>
       <div className={style.input}>
        <label htmlFor="name">Auther Name</label>
        <input type="text" ref={name} placeholder="Enter name"/>
       </div>
       <div className={style.input}>
        <label htmlFor="content">Blog Content</label>
        <textarea ref={content} id="" placeholder="Enter blog content" rows="4"></textarea>
       </div>
       <div className={style.input}>
        <label htmlFor="tags">Blog Tags</label>
        <input type="text" ref={tags} placeholder="Enter heading for your blog"/>
       </div>
       <button type="submit">Submit</button>
  </form>
</div>
  </>)
}


export default CreateBlogs;