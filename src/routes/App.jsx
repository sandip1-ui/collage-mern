import '../App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Home/Navbar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hotelActions, placeActions } from '../store/hotel'

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    const controller=new AbortController();
    const signal=controller.signal;
    fetch('http://localhost:8080',{signal})
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      dispatch(hotelActions.setHotls(data.hotelData))
      dispatch(placeActions.setPlaces(data.placeData))
    })
    return ()=>{
      controller.abort();
    }
  },[])  
  
  return (<>
   <Navbar></Navbar>
   <Outlet></Outlet>
  </>
    
  )
}

export default App
