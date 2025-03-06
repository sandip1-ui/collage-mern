import { useSelector } from "react-redux"
import style from "./PopulerPlaces.module.css"
import {Link} from 'react-router'

const PopularPlaces=()=>{
    const {allPlaces}=useSelector(store=>store.places)

  return(<div className={style.place}>
    <div className={style.tital}>Popular Places
       
    </div>
    <div className={style.cardcontainer} id="container">
      {allPlaces.map((item)=>
        <div className={style.card} key={item.name}>
            <img src={`./images/places/${item.name}.jpeg`} />
            <div className={style.pera}>
                <span className={style.pera1}>Name : <span className={style.pera2}>{item.name}</span></span>
                <span className={style.pera1}>Location : <span className={style.pera2}>{item.location}</span></span>
                <span className={style.pera1}>Discription : <p className={style.pera2}>{item.description}</p>

                </span>
            </div>
        </div>)}
       </div>
       </div>
       
       
     )
}
export default PopularPlaces;