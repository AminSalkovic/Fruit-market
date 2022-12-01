import React from 'react'

const Search = (handleSearchUser) => {
  return (
    <div>
        <input type="text" placeholder='search...' onChange={(event)=>handleSearchUser(event.target.value)} />
    </div>
  )
}

export default Search