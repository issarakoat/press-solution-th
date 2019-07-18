import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav, Image} from 'react-bootstrap'
import Translate from 'react-translate-component'
const VTMNav = ()=>(
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/vtm"><Image fluid src='/images/vtm/logo_vtm.png' alt='vtm Logo' /></Navbar.Brand>
        <Nav className="mr-auto">
        <Link to='/vtm/why_us'><Nav.Link href="/vtm/why_us"><Translate content='vtmNav.1' /> "Xuduan"</Nav.Link> </Link>
        <Link to='/vtm/products'><Nav.Link href="/vtm/products"><Translate content='vtmNav.2' /></Nav.Link></Link>
          
        </Nav>
      </Navbar>
    </div>
)
export default VTMNav;