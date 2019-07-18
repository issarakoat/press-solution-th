import React from 'react';
import {Row,Col,Jumbotron,Container} from 'react-bootstrap'
import '../styles/vtm.css'
import Translate from 'react-translate-component'
const VTM = ()=> (
    <div style={{textAlign:'center'}}className='vte-home'>
        <Jumbotron>
         <h1><Translate content='vtm.title' /></h1>
            <Container>
              <p>
                <Translate content='vtm.sub' />
                 </p>
                 </Container>
            </Jumbotron>
        <Row style={{paddingLeft:'1.2rem',paddingTop:'0'}}>
        <Col lg={6}>
        <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"  
                src="https://www.youtube.com/embed/a1TSd5y08tk" 
                allowfullscreen
                title="vtท"/>
            </div>
            </Col>
            <Col lg={6}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" 
                src="https://www.youtube.com/embed/n6cf6XBuofI" 
                allowfullscreen
                title="vte vid at fair"/>
            </div>
            </Col>         
        </Row>

    </div>
)

export default VTM;