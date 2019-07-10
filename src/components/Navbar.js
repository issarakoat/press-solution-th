import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import '../styles/footer.css'
function NavBar(){
    return(
        <div>
            <Navbar 
            bg="dark"
            variant="dark"
            sticky='top'>
            <Navbar.Brand href="/">Press-solution</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                    <Link to='/vte'><Nav.Link href="/vte">VTE</Nav.Link></Link>
                    <Link to='/vtm'><Nav.Link href="/vtm">VTM</Nav.Link></Link>
                    <Link to='/contact'><Nav.Link href="/contact">ติดต่อเรา</Nav.Link></Link>
            </Nav>
            </Navbar.Collapse>
            {/* <a style={{paddingLeft:'0.8rem'}}href='https://awesome-villani-6bed18.netlify.com/'  rel="noopener noreferrer">TH</a>
            <a style={{paddingLeft:'0.8rem'}}href='https://awesome-villani-6bed18.netlify.com/'  rel="noopener noreferrer">EN</a> */}
            </Navbar>
        </div>
    )
}
export default NavBar;