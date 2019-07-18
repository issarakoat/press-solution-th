import React from 'react';
import {Row, Col} from 'react-bootstrap'
import Translate from 'react-translate-component'
const VTE = ()=> (
    <div>
    <Row>
      <Col lg={4}>
        <div className="container">
          <img src="images/vte/eng_pic.jpg" className="img-fluid" alt="Responsive"/>
            <p ><Translate content='vte.1' /></p>
          </div>
      </Col>
      <Col lg={8}>
              <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" 
                  src="https://www.youtube.com/embed/plQjJUV0AJM" 
                  allowfullscreen
                  title="vte vid"/>
              </div>
      </Col>
    </Row>
</div>
)

export default VTE;