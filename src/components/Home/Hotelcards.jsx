import { Link } from 'react-router-dom';
import style from './Hotelcards.module.css'
import { useDispatch } from 'react-redux';
import { hotelInfoActions } from '../../store/hotelinfo';
const Hotelcards=({item})=>{
  const dispatch=useDispatch();
  const setItem=()=>{
     dispatch(hotelInfoActions.setHotelInfo(item));
  }
  return(<Link to={`/hotels/${item.location}/${item.name}`} className={style.card} onClick={setItem}>
    <img src={`../images/hotels/${item.name}.jpeg`} />
    <div className={style.pera}>
      <span className={style.pera1}>Name : <span className={style.pera2}>{item.name}</span></span>
      <span className={style.pera1}>Location : <span className={style.pera2}>{item.location}</span></span>
      <span className={style.pera1}>Price/Night : <span className={style.pera2}>{item.price_per_night}</span></span>
      <span className={style.pera1}>Rating : <span className={style.pera2}>{item.rating}⭐</span></span>
      
    </div>
  </Link>)
}
export default Hotelcards