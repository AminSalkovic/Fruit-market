import React,{useState} from 'react'
import {nanoid} from 'nanoid'
const LoginSection = () => {
   
    let emails='';

    const[user,setUser]=useState([

        {  id:nanoid(),
          email:'amin',
          password:'',
        },
      ])

    const logiIn=(event)=>{
           emails=event.target.value
           console.log(emails);
    }
   
    
  return (
    <div>
        <input type="text" placeholder='email' 
        onChange={logiIn} />
         
         {emails === user.email ? <h1>amin</h1>:<h1>saki</h1>}
    </div>
  )
  
}

export default LoginSection