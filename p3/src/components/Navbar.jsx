import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{height:'100px',backgroundColor:'red'}}>
        <ul>
            <li>
                <Link to='/'>home</Link>
            </li>
            <li>
                <Link to='about'>about</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar