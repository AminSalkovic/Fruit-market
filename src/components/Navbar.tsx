 import {Button, Container,Nav, Navbar as NavbarBs} from 'react-bootstrap'
 import * as AiIcons from 'react-icons/ai'
 import { NavLink } from 'react-router-dom'

export function Navbar(){
    return(
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
             <Container>
                <Nav className='me-auto'>
                     <Nav.Link to='/' as={NavLink}>
                         Home
                     </Nav.Link>
                     <Nav.Link to='/store' as={NavLink}>
                         Store
                     </Nav.Link>
                     <Nav.Link to='/about' as={NavLink}>
                         About
                     </Nav.Link>
                </Nav>
                <Button style={{width:'3rem',height:"3rem",position:'relative'}} className='rounded-circle'>
                     <AiIcons.AiOutlineShoppingCart/>
                     <Container className="rounded-circle bg-danger d-flex align-items-center justify-content-center"
                     style={{
                        position:"absolute",
                        bottom:'0',
                        right:'0',
                        width:'1.5rem',
                        height:'1.5rem',
                        transform:'translate(25%,25%)'}}
                     >
                        3
                     </Container>
                </Button>
             </Container>
        </NavbarBs>
    )
}