import React from 'react'
import './Card.css'
const Card = ({closebutton}) => {
  return (
    <div className='card'>
        <button onClick={()=>{closebutton((prev)=>!prev)}} >close</button>
    </div>
  )
}

export default Card