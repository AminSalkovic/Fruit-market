import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const UseCountrySearch = (query,pageNumber) => {
     
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(false)
    const[country,setCountry]=useState([])
    const[hasMore,setHasMore]=useState(false)

    useEffect(()=>{
        setCountry([])
    },[query])

    let cancel

    useEffect(()=>{
        setLoading(true)
        setError(false)
        axios({
            method:'GET',
            url:`https://disease.sh/v3/covid-19/countries/`,
            params:{q:query,page:pageNumber},
            cancelToken:new axios.CancelToken(c=> cancel=c)
        }).then((res)=>{
            setCountry(prevCountry=>{
                return [...new Set([...prevCountry,...res.data.map(item=>item.country)])]
            })
            setHasMore(res.data.length>0)
            setLoading(false)
            console.log(res.data);
        }).catch(e=>{
            if(axios.isCancel(e)) return
            setError(true)
        })
        return ()=>cancel()
    },[query,pageNumber])
  return {loading,error,country,hasMore}
}

export default UseCountrySearch