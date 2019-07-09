import React from 'react';
import {Row, Col} from 'react-bootstrap'

const VTE = ()=> (
    <div>
    <Row>
      <Col lg={4}>
        <div className="container">
          <img src="images/vte/eng_pic.jpg" className="img-fluid" alt="Responsive"/>
            <p >ประกอบกิจการ ซ่อม ติดตั้ง ขนย้าย และงานบำรุงรักษาเชิงป้องกันของเครื่องเพรส(เครื่องปั๊มโลหะ)และเครื่องจักรในอุสาหกรรมยานยนต์และอุตสาหกรรมงานปั๊มทุกประเภท</p>
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