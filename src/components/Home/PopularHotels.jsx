import Hotelcards from './Hotelcards';
import style from './PopularHotels.module.css'
import { useSelector } from 'react-redux';


function PopularHotels() {
 const {allHotels}=useSelector(store=>store.hotels)
  
  return (<div className={style.hotel}>
    <div className={style.tital}>Popular Hotels

    </div>
    <div className={style.cardcontainer} id="container">
      {allHotels.map(item => <Hotelcards key={item.name} item={item}></Hotelcards>)}
    </div>
  </div>


  );
}
export default PopularHotels;