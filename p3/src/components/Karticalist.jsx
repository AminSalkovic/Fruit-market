import React from 'react'
import AddUser from './AddUser'
import Kartica from './Kartica'

const Karticalist = ({users,handleAddUser}) => {
  return (
      <>
        {users.map((items)=>{
            return(
                <Kartica
                email={items.email}
                password={items.password}
                handleAddUser={handleAddUser}
                />
            )
        })}
        <AddUser/>
      </>
  )
}

export default Karticalist