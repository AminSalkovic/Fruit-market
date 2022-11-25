import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Card from './components/Card'

const App = () => {
    const [card,setCard]=useState(false)
    const[users,setUsers]=useState([])
    
    const getData=()=>{
        Axios.get(`https://api.github.com/users/AminSalkovic`)
        .then((res)=>setUsers(res.data))
        .catch((er)=>console.log(er))
    }

    useEffect(()=>{
       getData()
    },[])
    return (
    <>
       {users.map((user) => {
        return (
          <div style={{ backgroundImage: `url(${user?.avatar_url})` }}>
            <h1>{user?.name}</h1>
          </div>
        );
      })}
    <button onClick={()=>{setCard(!card)}}> click</button>
    {card && <Card
     closebutton={setCard}
    />}
       
    </>
  )
}

export default App