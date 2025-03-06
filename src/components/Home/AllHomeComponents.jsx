import { useState } from 'react'
import Footer from './Footer'
import Inputs from './Inputs'
import Navbar from './Navbar'
import PopularHotels from './PopularHotels'
import PopularPlaces from './PopulerPlaces'
const AllHomeComponents=()=>{
  const [showLocatioList,setLocationList]=useState(true)
  return(
      <div className="main" onClick={()=>{setLocationList(false)}}>
          <Inputs setLocationList={setLocationList} showLocatioList={showLocatioList}></Inputs>
          
      <PopularPlaces></PopularPlaces>
      <PopularHotels></PopularHotels>
      <Footer></Footer>
  </div>)
}
export default AllHomeComponents;