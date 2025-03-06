import { useSelector } from 'react-redux'
import style from './HotelPage.module.css'
// const item={
//   image: "https://theluxurytravelexpert.com/wp-content/uploads/2019/09/oberoi-amarvilas-agra.jpg",
//   name: "The Oberoi Amarvilas",
//   location: "Agra",
//   price_per_night: "30000",
//   rating: "5.0"
// }

const HotelPage=()=>{
  const {item}=useSelector(store=>store.hotelInfo);
  return(<div className={style.main}>
       <div className={style.hoteldetails}>
        <span>{item.name}</span>
        <span className={style.span2}>{item.location} . ⭐ {item.rating}</span>
        <img src={`/images/hotels/${item.name}.jpeg`} alt="" />
        About
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis, labore error doloribus eveniet aspernatur dignissimos laborum ex. Corrupti illum cupiditate alias repellat, vero tempore necessitatibus est voluptatibus sunt at sed animi maxime dolor. Error omnis eum sit iure adipisci.</p>
        Faccilities
        <div className={style.faccilities}>
          <li>Free Wifi</li>
          <li>1 Bathroom</li>
          <li>Swimming Pool</li>
        </div>
       </div>
       <div className={style.hotelform}></div>
  </div>)
}
export default HotelPage;