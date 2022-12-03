import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaTimes } from 'react-icons/fa';

//https://www.youtube.com/watch?v=sKs9FiAHSN4

const DropdownContainer=styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: ${(props)=>(props.isOpen==='true' ? '0' : '-100%')};
    left: 0%;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen ? '1' : '0')};
`;
const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`;
const CloseIcon=styled(FaTimes)`
 color: #000d1a;
`;
const DropdownWrapper=styled.div``;

const DropdownMenu=styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,80px);
  margin-bottom: 4rem;
  text-align: center;

  @media screen  and (max-width:480px){
     grid-template-rows: repeat(4,60px);
  }

`;
const DropdownLink=styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   text-decoration: none;
   list-style: none;
   cursor: pointer;
   transition: 0.2s ease-in-out;

   &:hover{
    color: #000d18;
   }
`;
const BtnWrap=styled.div`
   display: flex;
   justify-content: center;
`;

const Dropdown = ({isOpen,toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item,index)=>{
                    return(
                        <DropdownLink to={item.path} key={index}>
                              {item.title}
                        </DropdownLink>
                    )
                })}
            </DropdownMenu>
            <BtnWrap>
                <Button primary='true' round='true' big_button='true'  to='/contact'>
                    Contact Us
                </Button>
            </BtnWrap>
        </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown