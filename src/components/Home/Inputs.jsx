import { useRef, useState } from "react";
import style from "./Inputs.module.css"
import {useNavigate} from "react-router-dom"


const Inputs=({setLocationList,showLocatioList})=>{
   
   const navigate=useNavigate()
    const searchInput=useRef();
    const adultInput=useRef();
    const childInput=useRef();
    const roomInput=useRef();
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
        <label htmlFor="destination" className={style.input_text}>Destination</label>
        <div className={style.search}>
            <input id="destination" ref={searchInput} type="text" placeholder="Enter your destination" onClick={(event)=>{event.stopPropagation();setLocationList(true)}} onKeyUp={(action)=>showLocations(action)} required autoComplete="off"/>
            <img src="./logos/search.svg" alt=""/>
        </div>
    </div>
       

    <div className={style.date}>
      <div className={style.date1}>
          <label htmlFor="checkin" className={style.input_text}>Check-in</label>
          <input className={style.i2} id="checkin" type="date" required/>
      </div>
      <div className={style.date1}>
          <label htmlFor="checkout" className={style.input_text}>Check-out</label>
          <input className={style.i2} id="checkout" type="date" required/>
      </div>
    </div>

    <div className={style.details} >
      <div className={style.adult}>
        <input id="adult" ref={adultInput} type="text"  required/>
        <label htmlFor="adult">- Adult</label>
      </div>

      <div className={style.child}>                  
        <input id="child" ref={childInput} type="text"  required/> 
        <label htmlFor="child">- Child</label>
      </div>

      <div className={style.room}>
         <input id="room" ref={roomInput} type="text"  required/> 
         <label htmlFor="room">-Room</label>
      </div>
         
    </div>
    <button type="submit" className={style.buttonstyle}>Submit</button>
    {showLocatioList && <div className={style.option}>
           {newItems.map(item=> <li key={item} className={style.optionlist} onClick={()=>setLocation(item)}>{item}</li>)}
           
          
        </div>}
</form>
</div>
</div>
)
}
export default Inputs;