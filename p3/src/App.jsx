import {nanoid} from 'nanoid'
import React from 'react'
import { useState } from 'react'
import Karticalist from './components/Karticalist'


 const App = () => {

      

          

  
    const[user,setUser]=useState([
        // {    id:nanoid(),
        //     email:'aminsalkovic2019',
        //     password:'amin'
        // },
        // {   id:nanoid(),
        //     email:'saki',
        //     password:'saki'
        // },
    ])

     const addUserEmail=(text,password)=>{
           const newUser={
            email:text,
            password:password,
            id:nanoid()
           }
           const newUsers=[...user,newUser];
           setUser(newUsers)

     }
     
    const deleteUserEmail=(id)=>{
        const newUsers=user.filter((item)=>item.id!== id)
        setUser(newUsers)

    }
     return(
        <>

          <Karticalist
            users={user}
            handleAddUser={addUserEmail}
            deleteUserEmail={deleteUserEmail}
          />
        
        </>
     )
     

































//     const [data,setData]=useState([])
    

//     useEffect(()=>{
//         axios.get(`https://disease.sh/v3/covid-19/countries/`)
//         .then((res)=>setData(res.data))
//         .catch((er)=>console.log(er))
//     },[])
//   return (
//     <div>
   
      
//         {data.map((item)=>{
//             return(
//                 <li onClick={()=>{window.open(`https://en.wikipedia.org/wiki/${item.country}`)}}>
//                    <a href='/'>
//                      <h1>{item.country}</h1>
//                    </a>       
//                 </li>
//                 )
//             })}
        
            
//     </div>
//   )
}

export default App
