import React from 'react';
import {Row,Col,Jumbotron,Container} from 'react-bootstrap'
import '../styles/vtm.css'
const VTM = ()=> (
    <div style={{textAlign:'center'}}className='vte-home'>
        <Jumbotron>
         <h1>วีที แมชชีนเนอรี่</h1>
            <Container>
              <p>
                    วีที แมชชีนเนอรี่ เป็นตัวแทนจำหน่ายเครื่องเพรสที่ราคา 
                    สมเหตุสมผลและมีคุณภาพตามมาตรฐานสากล โดยเป็นผู้นำเข้าเครื่องเพรส 
                    "Xuduan" ดูแลและให้บริการ โดยทีมงานในประเทศไทย 
                    จึงสะดวกและรวดเร็วทันต่อความต้องการของลูกค้า โดยโรงงานผลิตอยู่ที่ประเทศจีน 
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