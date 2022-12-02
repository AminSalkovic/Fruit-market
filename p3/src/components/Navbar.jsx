import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import {Button} from './Button';

const Nav=styled.nav`
  background:#000;
  width: 100%;
  height:60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 100;
  `;
 const NavLinks=css`
   height: 100%;
   display:flex;
   align-items: center;
   padding: 0rem 1rem;
   color: #fff;  
   text-decoration: none;
 `
const Logo=styled(Link)` 
   ${NavLinks}
   font-style: italic;
`;
const MenuBars=styled.a``;
const NavMenu=styled.div`
  display: flex;
  align-items: center;
`;

const NavMenuLinks=styled(Link)`
    ${NavLinks}
    color: #fff;
`;

const NavBtn=styled.div`
    
`


const Navbar = () => {
  return (
    <Nav>
       <Logo to='/'>Elix</Logo>
       <MenuBars/>
       <NavMenu>

        {menuData.map((items,index) => {
            return(
                <NavMenuLinks to={items.link} key={index}>
                     {items.title}
                </NavMenuLinks>
                )
        })}

       </NavMenu>
       <NavBtn>
        <Button to='/contatc'>Contact Us</Button>
       </NavBtn>
    </Nav>
  )
}

export default Navbar