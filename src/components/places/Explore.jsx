import { useRef, useState } from "react";
import style from "../Home/Inputs.module.css"
import {useNavigate} from "react-router-dom"

let showLocatioList=1;
const Explore=()=>{
  const navigate=useNavigate()
  const searchInput=useRef();
  const [newItems,setNewItems]=useState([])

  //  adultInput.current.value="1";
  // childInput.current.value="0";
  // roomInput.current.value="1";
 
  const locations=[
      "Alipurduar", 
      "Bankura", 
      "Birbhum", 
      "Cooch Behar", 
      "Dakshin Dinajpur", 
      "Darjeeling", 
      "Hooghly", 
      "Howrah", 
      "Jalpaiguri", 
      "Jhargram", 
      "Kolkata", 
      "Malda", 
      "Murshidabad", 
      "Nadia", 
      "North 24 Parganas", 
      "Paschim Bardhaman", 
      "Paschim Medinipur", 
      "Purba Bardhaman", 
      "Purba Medinipur", 
      "Purulia", 
      "South 24 Parganas", 
      "Uttar Dinajpur"
  ];
  const showLocations=(action)=>{
   
   const newLocations=searchInput.current.value==="" || action.key==='Enter'?[]:locations.filter(item=>item.toLowerCase().includes(searchInput.current.value));
   setNewItems(newLocations);
   
  }
  
     
  const setSubmit=(event)=>{
    event.preventDefault();
    navigate(`/hotels/${searchInput.current.value}`);
  }
  const setLocation=(name)=>{
    searchInput.current.value=name;
  }
  

return(<div className={style.home}>
    <div className={style.text}>
<form className={style.inputs} onSubmit={(event)=>setSubmit(event)} >

  <div className={style.search_bar}>
       <div className={style.search}>
          <input id="input" ref={searchInput} type="text" placeholder="Enter your destination" onClick={(event)=>{event.stopPropagation();setLocationList(true)}} onKeyUp={(action)=>showLocations(action)} required autoComplete="off"/>
          <img src="./logos/search.svg" alt=""/>
      </div>
  </div>
     {showLocatioList && <div className={style.option}>
                {newItems.map(item=> <li key={item} className={style.optionlist} onClick={()=>setLocation(item)}>{item}</li>)}</div>}

  </form>
</div>
</div>)
}
export default Explore;