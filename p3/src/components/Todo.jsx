import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const getLocalItems=()=>{
    let list = localStorage.getItem('items');
    if(list){
        return list = JSON.parse(localStorage.getItem('items'))
    }else{
        return [];
    }
}

const Todo = () => {

    const[inputData,setInputData]=useState('')
    const[items,setItems]=useState(getLocalItems())

    const addItem=()=>{
        if(!inputData){

        }else{
            setItems([...items,inputData])
            setInputData('')
        }
    }

    useEffect(()=>{
         localStorage.setItem('items',JSON.stringify(items))
    },[items])
  return (
    <div>

        <input type="text" 
         value={inputData}
         onChange={(e)=>setInputData(e.target.value)}
        />
        <button onClick={addItem}>add</button>
        {items.map((elem,ind)=>{
            return(
                <div key={ind}>
                    <h3>{elem}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Todo