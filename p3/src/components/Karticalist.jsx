import React from 'react'
import AddUser from './AddUser'
import Kartica from './Kartica'
import './KarticaList.css'

const Karticalist = ({users,handleAddUser,deleteUserEmail}) => {
  return (
      <div className='karticalist'>
      {console.log(users)}
        {users.map((items,key)=>{
            return(
                <Kartica key={key}
                id={items.id}
                email={items.email}
                password={items.password}
                deleteUserEmail={deleteUserEmail}
                />
            )
        })}
        <AddUser handleAddUser={handleAddUser}/>
      </div>
  )
}

export default Karticalist