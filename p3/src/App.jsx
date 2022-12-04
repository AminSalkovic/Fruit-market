import React,{useState} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData'
import Dropdown from './components/Dropdown'
import InfoSection from './components/InfoSection'
import { InfoData } from './data/InfoData'


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
    </>
  )
}

export default App