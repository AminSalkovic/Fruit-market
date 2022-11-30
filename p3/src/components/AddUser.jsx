import React from 'react'
import { useState } from 'react'

const AddUser = ({handleAddUser}) => {

     const[useremail,setUseremail]=useState('');
     const[userPassword,setUserPassword]=useState('')

     const handleChangeEmail=(event)=>{
        setUseremail(event.target.value)
    }

    const handleChangePassword=(event)=>{
           setUserPassword(event.target.value)
    }
      
    const handleSaveClick=(e)=>{
        handleAddUser(useremail,userPassword) 
    }
  return (
    <div>
        <input type="text" placeholder='email'
         value={useremail}
         onChange={handleChangeEmail}
         />
         <input type="text" placeholder='password' 
           onChange={handleChangePassword}
           value={userPassword}
         />
        
        <button onClick={handleSaveClick}>save</button>
    </div>
  )
}

export default AddUser