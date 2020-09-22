import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import Translate from 'react-translate-component';
function VTENav() {
  return (
      <Navbar bg="light" variant="light">
        <Link to="/vte">
          <Navbar.Brand href="/vte">
            <Image
              fluid
              src="/images/vte/logo-vts-logo_vts.png"
              alt="vte-enter"
            />
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link to="/vte/about">
            <Nav.Link href="/vte/about">
              <Translate content="vteNav.1" />
            </Nav.Link>{' '}
          </Link>
          <Link
            href="https://press-solutuion-gallery.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Nav.Link
              href="https://press-solutuion-gallery.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VTE Gallery
            </Nav.Link>{' '}
          </Link>

          <NavDropdown title="Services" id="nav-dropdown">
            <NavDropdown.Item>
              <Link to="/vte/services/installation">
                <Translate content="vteNav.2" />
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/vte/services/repair">
                <Translate content="vteNav.3" />
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/vte/services/maintainance">
                <Translate content="vteNav.4" />
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link to="/vte/clients">
            <Nav.Link href="/vte/clients">
              <Translate content="vteNav.5" />
            </Nav.Link>{' '}
          </Link>
        </Nav>
      </Navbar>
  );
}
export default VTENav;
