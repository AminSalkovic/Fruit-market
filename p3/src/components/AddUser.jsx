import React from 'react'
import { useState } from 'react'

const AddUser = ({handleAddUser}) => {

     const[useremail,setUseremail]=useState('')

  return (
    <div>
         <input type="text" placeholder='email'/>
    </div>
  )
}

export default AddUser