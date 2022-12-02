import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer=styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0%;
    left: 0%;
    transition: 0.3s ease-in-out;
    opacity: 1;
`;
const Icon = styled.div``;
const CloseIcon=styled(FaTimes)``;
const DropdownWrapper=styled.div``;
const DropdownMenu=styled.div``;
const DropdownLink=styled(Link)``;
const BtnWrap=styled.div``

const Dropdown = () => {
  return (
    <DropdownContainer>
        <Icon>
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