import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData'
import Dropdown from './components/Dropdown'
import InfoSection from './components/InfoSection'
import { InfoData } from './data/InfoData'
import Utah from './pages/Utah'


const App = () => {

  const[isOpen,setIsopen]=useState(false)
 
   const toggle=()=>{
    setIsopen(!isOpen)
    console.log("a,in");
   }
  return (
    <>
     <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <Dropdown toggle={toggle} isOpen={isOpen}/>
        <Hero slides={SliderData}/>
        <InfoSection {...InfoData}/>
        <Routes>
          <Route path="/homes3" element={<Utah/>}/>
        </Routes>
    </>
  )
}

export default App