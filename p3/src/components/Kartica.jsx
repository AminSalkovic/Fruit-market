import React from 'react'
import './Kartica.css'
const Kartica = ({email,password}) => {
  return (
    <div className='kartica'>
        <h1>{email}</h1>
        <h1>{password}</h1>
    </div>
  )
}

export default Kartica