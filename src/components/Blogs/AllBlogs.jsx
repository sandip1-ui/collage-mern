import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { blogActios } from "../../store";




const AllBlogs=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    const controller=new AbortController();
    const signal=controller.signal;
    fetch('http://localhost:8080/blogs',{signal})
    .then(res=>res.json()).then(data=>{
      dispatch(blogActios.setItem(data))
      console.log("useEffect exicuted..")
      })
      return ()=>{controller.abort()};
  },[])
  return(<>
  {/* <Navbar></Navbar> */}
  <Outlet></Outlet>
  <Footer></Footer>
  </>)
}
export default AllBlogs;