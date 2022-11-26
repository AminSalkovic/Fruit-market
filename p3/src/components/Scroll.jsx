import React,{useState,useEffect} from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import UseCountrySearch from './UseCountrySearch'

const Scroll = () => {
   const[query,setQuery]=useState('')
   const[pageNumber,setPageNumber]=useState(1)

   const observer=useRef()
   const lastCountryElementRef=useCallback()
   function handleSearch(e){
        setQuery(e.target.value)
        setPageNumber(1)
   }

  const{
    loading,
    error,
    country,
    hasMore
  }=UseCountrySearch(query,pageNumber)
  return(
    <>
    <input type="text" value={query} onChange={handleSearch} />
    {country.map((item)=>{
      return(
        <div ref={lastCountryElementRef} key={item}>{item}</div>
      )
    })}
    <div>{loading && 'Loading'}</div>
    <div>{error && 'error'}</div>
    </>
  )
}

export default Scroll;