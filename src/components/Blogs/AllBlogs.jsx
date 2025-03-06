import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";




const AllBlogs=()=>{
  return(<>
  {/* <Navbar></Navbar> */}
  <Outlet></Outlet>
  <Footer></Footer>
  </>)
}
export default AllBlogs;