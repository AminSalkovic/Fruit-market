
import React from 'react'
import { useState } from 'react'
import Karticalist from './components/Karticalist'

 const App = () => {
    
    const[user,setUser]=useState([
        {
            email:'aminsalkovic2019',
            password:'amin'
        },
        {
            email:'saki',
            password:'saki'
        }
    ])

     const addUser=(text)=>{
           const newUser={
            email:text,
            password:text
           }
           const newUsers=[...user,newUser];
           setUser(newUsers)
     }
     return(
        <>

          <Karticalist
            users={user}
            handleAddUser={addUser}
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
