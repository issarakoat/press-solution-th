import React from 'react';
import {Link} from 'react-router-dom'
import {Image,Row,Col} from 'react-bootstrap'
import '../styles/footer.css'
function Footer(){
    return(
  <div>
    <footer class="footer">
      <div class="container">

        <Row>
          <Col sm={6}>

            <Link to='/vte'>
              <Image 
               className='color'
                fluid
                src='/images/vte/logo-vts-logo_vts.png'
              />
            </Link>
          </Col>
          <Col sm={6}>
          <Link to='/vtm'>
              <Image 
               className='color'
                fluid
                width='500'
                src='/images/vtm/logo_vtm.png'
              />
            </Link>

          </Col>
         
        </Row>
        <span class="text-muted">© 2019 VT Group. All rights reserved.</span>
      </div>
    </footer>
  </div>
    )
}
export default Footer;