import Navbar from "../Home/Navbar";
import style from './AllHotels.module.css'
import Hotelcards from "../Home/Hotelcards";
import { FaFilter } from "react-icons/fa6";
import { useContext, useState } from "react";
import HotelFilters from "./HotelFilters";
import { useSelector } from "react-redux";

let hotels;

const AllHotels=()=>{
  const {allHotels}=useSelector(store=>{
    return store.hotels;
  });
  const [showFilter,setFilter]=useState(false);
 
  if(hotels===undefined)
     hotels=[...allHotels];
 
  const setratingFilter=(value)=>{
      const newItems=[...allHotels];
      if(value)
        newItems.sort((x,y)=>y.rating.localeCompare(x.rating))
      hotels=[...newItems];
    }
 
    const setPrice=(low,high)=>{

      if(low && high){
        hotels=hotels.filter(item=>{
          if(Number(item.price_per_night)>=Number(low) && Number(item.price_per_night) <= Number(high))
            return true;
          return false
        })
      }
      
    }
    
  return(<>
  {/* <Navbar></Navbar> */}
  <div className={style.container}>
    <div className={style.filter} onClick={()=>setFilter(item=>!item)}><FaFilter style={{color:'blue',height:'20px',width:'20px'}}/></div>
    {showFilter&&<HotelFilters setratingFilter={setratingFilter} setPrice={setPrice} showFilter={showFilter}></HotelFilters>}
    {hotels.map(item=>

    <Hotelcards key={`${item.name}1`} item={item}></Hotelcards>
    )}
        
  </div>
  </>)
}
export default AllHotels;