import { useRef, useState } from 'react'
import style from './AllHotels.module.css'

let forRating=false;
let lowPriceValue,highPriceValue;

const HotelFilters=({setratingFilter,setPrice,showFilter})=>{

  const lowPrice=useRef();
  const highPrice=useRef();
  const [ratingValues,setRatingValues]=useState(forRating)
  const [price,setPriceFilter]=useState(false)
 
   if(showFilter){
    setratingFilter(ratingValues);
    setPrice(lowPriceValue,highPriceValue)
   }
   
  const ratingFilter=(n)=>{
    switch(n){
      case 0:forRating=!forRating
        setRatingValues(forRating); 
      break;
      case 1:setPriceFilter(item=>!item);
        lowPriceValue=lowPrice.current.value;
        lowPrice.current.value="";
        highPriceValue=highPrice.current.value;
        highPrice.current.value="";
        break; 
     
    }
  }

  return(<div className={style.allfilters}>
    <button type="button" className={ratingValues?style.onclick1:style.onclick2} 
    onClick={()=>ratingFilter(0)}>Rating</button>
    <button type="button" className={price?style.onclick1:style.onclick2} 
    onClick={()=>ratingFilter(1)}>{price ?'Set Price Limit':'Enter Price Limit'}</button>
    {price && <div className={style.priceinput} >
      <input ref={lowPrice} type="text" placeholder='Lower limit'  required/> To 
      <input ref={highPrice} type="text" placeholder='Upper limit' required/>
    </div>}
      </div>)
}
export default HotelFilters;