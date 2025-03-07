import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './routes/App.jsx'
import Register from './routes/Register.jsx'
import Contact from './routes/Contact.jsx'
import AllHotels from './components/Hotels/AllHotels.jsx'
import AllBlogs from './components/Blogs/AllBlogs.jsx'
import CreateBlogs from './components/Blogs/CreateBlogs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import AllHomeComponents from './components/Home/AllHomeComponents.jsx'
import { Provider } from 'react-redux'
import blogStore from './store/index.js'
import HotelPage from './components/Hotels/HotelPage.jsx'
import LogIn from './components/Home/LogIn.jsx'
import PlacePage from './components/places/PlacePage.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[{
      path:'/',
      element:<AllHomeComponents></AllHomeComponents>
    },
      {
      path:'/hotels/:placename',
      element:<AllHotels></AllHotels>,
    },
    {path:'/hotels/:placename/:hotelname',
      element:<HotelPage></HotelPage>
    },
      {
      path:'/explore/:placename',
      element:<></>,
    },
    {path:'/explore/:placename/:location',
      element:<PlacePage></PlacePage>
    },
    {
      path:'/blogs',
      element:<AllBlogs></AllBlogs>,
      children:[{path:'/blogs',
        element:<Blogs></Blogs>
      },{path:'create-blog',
        element:<CreateBlogs></CreateBlogs>},
      ]
    },
  ]
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<LogIn></LogIn>
  },
  {
    path:'/contact-us',
    element:<Contact></Contact>
  },
  
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={blogStore}>

    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
