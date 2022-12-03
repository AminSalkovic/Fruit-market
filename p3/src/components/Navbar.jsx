import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import {Button} from './Button';
import {FaBars} from 'react-icons/fa'

const Nav=styled.nav`
  background:#000;
  width: 100%;
  height:60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const MenuBars=styled(FaBars)`
  display: none;
  
  @media screen and (max-width:768px){
      display: block;
      color: white;
      cursor: pointer;
  }
`;

const NavMenu=styled.div`
  display: flex;
  align-items: center;
  margin-right:-48px;
  @media screen and (max-width:768px){
     display: none;
  }
`;

const NavMenuLinks=styled(Link)`
    ${NavLinks}
    color: #fff;
`;

const NavBtn=styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width:768px){
     display: none;
  }
`;


const Navbar = ({toggle}) => {
  return (
    <Nav>
       <Logo to='/'>ELXR</Logo>
       <MenuBars onClick={toggle}/>
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
        <Button to='/contatc' primary='true'>Contact Us</Button>
       </NavBtn>
    </Nav>
  )
}

export default Navbar