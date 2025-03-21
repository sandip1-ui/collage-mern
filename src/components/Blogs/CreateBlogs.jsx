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
        <input id="heading" type="text" ref={heading} placeholder="Enter heading for your blog" required/>
       </div>
       <div className={style.input}>
        <label htmlFor="name">Auther Name</label>
        <input id="name" type="text" ref={name} placeholder="Enter name" required/>
       </div>
       <div className={style.input}>
        <label htmlFor="content">Blog Content</label>
        <textarea ref={content} id="content" placeholder="Enter blog content" rows="4" required></textarea>
       </div>
       <div className={style.input}>
        <label htmlFor="tags">Blog Tags</label>
        <input id="tags" type="text" ref={tags} placeholder="Enter heading for your blog" required/>
       </div>
       <button type="submit">Submit</button>
  </form>
</div>
  </>)
}


export default CreateBlogs;