import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';


const AppLayout=()=>(
  <>
     <Navbar/>
     <Outlet/>
  </>
  )

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
  
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    }
  ]
}
])
 createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
);

