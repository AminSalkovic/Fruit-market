import React from 'react'
import './Kartica.css'
const Kartica = ({email,password,deleteUserEmail,id}) => {
  return (
    <div className='kartica'>
        <h1>{email}</h1>
        <h1>{password}</h1>

        <button onClick={()=>deleteUserEmail(id)}>delete</button>
    </div>
  )
}

export default Kartica