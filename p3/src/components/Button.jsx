import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button=styled(Link)`
   background:${({primary})=>(primary ? '#000d1a': '#CD853F')};
   border: none;
   outline: none;
   white-space: nowrap;
   min-width: 100px;
   max-width: 200px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   align-items: center;
   justify-content: center;
   padding:${({big_button})=>(big_button ? '16px 40px' : '14px 24px')};
   color:${({primary})=>(primary ? '#fff' : '#000d1a')};
   font-size: ${({big_button})=>(big_button ? '20px' :'14px')};
   &:hover{
    transform: translateY(-2px);
   }
`