import React,{useState} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData'
import Dropdown from './components/Dropdown'


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
        <Dropdown toggle={toggle} isOpen={setIsopen}/>
        <Hero slides={SliderData}/>
    </>
  )
}

export default App