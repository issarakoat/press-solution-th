import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap'
function VTENav (){
    return(
    <header>
        <Navbar bg="light" variant="light">
            <Link to='/vte'><Navbar.Brand href="/vte"><Image fluid src='/images/vte/logo-vts-logo_vts.png' alt='vte-enter'/></Navbar.Brand></Link>
            <Nav className="mr-auto">
            <Link to='/vte/about'><Nav.Link href="/vte/about">เกี่ยวกับเรา</Nav.Link> </Link>
            
            <NavDropdown title="Services" id="nav-dropdown">
                
                <NavDropdown.Item ><Link to='/vte/services/installation'>การติดตั้ง </Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to='/vte/services/repair'>การซ่อมแซม </Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to='/vte/services/maintainance'>การบำรุงรักษา </Link></NavDropdown.Item>
                </NavDropdown>
                <Link to='/vte/clients'><Nav.Link href="/vte/clients">ลูกค้าของเรา</Nav.Link> </Link>
            
            </Nav>
        </Navbar>
    </header>
    )
}
export default VTENav;