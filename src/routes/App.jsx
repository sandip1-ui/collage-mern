import '../App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Home/Navbar'

function App() {
  
    
  // console.log("i am app");
  return (<>
   <Navbar></Navbar>
   <Outlet></Outlet>
  </>
    
  )
}

export default App
