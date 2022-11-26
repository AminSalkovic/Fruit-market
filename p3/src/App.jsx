import axios from 'axios'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect } from 'react'
import { useState } from 'react'

 const App = () => {
    const LIMIT =7
    const [data,setData]=useState([])
    const [postData,setPostData]=useState(data.slice(0,LIMIT))
    const [visible,setVisible]=useState(LIMIT)
    const [hasMore,setHasMore]=useState(true)

    const fetchData=()=>{
        const newLimit=visible+LIMIT
        const dataToAdd=data.slice(visible,newLimit)
        if(data.length>postData.length){
            setTimeout(()=>{
                setPostData([...postData].concat(dataToAdd))
            },2000);
            setVisible(newLimit)
        }else{
            setHasMore(false)
        }
    }

    useEffect(()=>{
        axios.get(`https://disease.sh/v3/covid-19/countries/`)
        .then((res)=>setData(res.data))
        .catch((er)=>console.log(er))
    },[])
  return (
    <div>
        <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        >
      
        {data.map((item)=>{
            return(
                <h1>{item.country}</h1>
                )
            })}
        
            </InfiniteScroll>
    </div>
  )
}

export default App
