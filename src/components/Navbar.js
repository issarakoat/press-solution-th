import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import '../styles/footer.css'
import Couterpart from 'counterpart'
import Translate from 'react-translate-component'
import En from './lang/en'
import Th from './lang/th'
Couterpart.registerTranslations('en',En)
Couterpart.registerTranslations('th',Th)
Couterpart.setLocale('th') //default


class NavBar extends React.Component {
    state = {
        lang: 'th'
      }
    onLangChange= (e)=>{
        this.setState({lang: e.target.value})
        Couterpart.setLocale(e.target.value)
        console.log("changing")
      }
    render() {
        return (
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
                    <Link to='/contact'><Nav.Link href="/contact"><Translate content='contact'/></Nav.Link></Link>
            </Nav>
            </Navbar.Collapse>
            <select value={this.state.lang} onChange={this.onLangChange}>
                <option value='en'>EN</option>
                <option value='th'>TH</option>
            </select>
            </Navbar>
        </div>
        );
    }
}

export default NavBar;
