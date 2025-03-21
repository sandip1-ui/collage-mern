import Navbar from "../Home/Navbar";
import style from './AllHotels.module.css'
import Hotelcards from "../Home/Hotelcards";
import { FaFilter } from "react-icons/fa6";
import { useContext, useState } from "react";
import HotelFilters from "./HotelFilters";
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hotelActions } from "../../store/hotel";



let hotels1;

const AllHotels=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    const controller=new AbortController();
    const signal=controller.signal;
    fetch('http://localhost:8080',{signal})
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      dispatch(hotelActions.setHotls(data.hotelData))
      hotels1=data.hotelData;
    })
    return ()=>{
      controller.abort();
    }
  },[]) 
  const {allHotels}=useSelector(store=>store.hotels
  );
  const [showFilter,setFilter]=useState(false);
 
  if(hotels1===undefined)
     hotels1=[...allHotels];
 
  const setratingFilter=(value)=>{
      const newItems=[...allHotels];
      if(value)
        newItems.sort((x,y)=>String(y.rating).localeCompare(String(x.rating)))
      hotels1=[...newItems];
    }
 
    const setPrice=(low,high)=>{

      if(low && high){
        hotels1=hotels1.filter(item=>{
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
    {hotels1.map(item=>

    <Hotelcards key={`${item.name}1`} item={item}></Hotelcards>
    )}
        
  </div>
  </>)
}
export default AllHotels;