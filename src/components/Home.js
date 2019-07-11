import React from 'react';
import {Container,Carousel,Image,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/landing.css'

class Hompage extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
      return (
        <div className='home_container'>
            <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            >
            <Carousel.Item>
              <div className='img-bg-color'>
                  <Link to='/vtm'>
                    <Image
                    src="/images/xuduan_pics/JE25_wt.png"
                    fluid                  
                    />
                  </Link>
              </div>              
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
              <Link to='/vtm'>
                    <Image
                    src="/images/xuduan_pics/YX41-1000_wt.png"
                    fluid                    
                    />
                  </Link>
                  </div>
            </Carousel.Item>
            <Carousel.Item>
              
            <div className='img-bg-color'>
            <Link to='/vtm'>
                    <Image
                    src="/images/xuduan_pics/Servo_press_wt.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='img-bg-color'>
            <Link to='/vtm'>
                    <Image
                    src="/images/xuduan_pics/JF75G-200c.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
             
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
                  <Link to='/vtm'>
                    <Image
                    src="/images/xuduan_pics/JF36.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
              <Link to='/vte'>
                    <Image
                    src="/images/vte/five_more/install.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
                  <Link to='/vte'>
                    <Image
                    src="/images/vte/five_more/install1.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
                  <Link to='/vte'>
                    <Image
                    src="/images/vte/five_more/repair.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
                  <Link to='/vte'>
                    <Image
                    src="/images/vte/five_more/repair1.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
                  <Link to='/vte'>
                    <Image
                    src="/images/vte/five_more/maintain.PNG"
                    fluid                    
                    />
                  </Link>
                    </div>
            </Carousel.Item>
         </Carousel>

            <div className='marketing'>
              <div className='container_'>
                <Row>
                    
                    <Col lg={5}>
                      <Link to='/vte'>
                      <Container>
                          <Image roundedCircle src="/images/vte/vte_enter.PNG" fluid />
                          <h2>VTE</h2>
                          <p>ประกอบกิจการ ซ่อม ติดตั้ง ขนย้าย และงานบำรุงรักษาเชิงป้องกันของเครื่องเพรส(เครื่องปั๊มโลหะ)</p>
                        </Container>
                      </Link>
                    </Col>
                   
                    <Col lg={2}></Col>
                    <Col lg={5}>
                      <Link to='/vtm'>
                        <Container>
                          <Image roundedCircle src="/images/vtm/vtm_enter.PNG" fluid />
                          <h2>VTM</h2>
                          <p>วีที แมชชีนเนอรี่ เป็นตัวแทนจำหน่ายเครื่องเพรสที่ราคา สมเหตุสมผลและมีคุณภาพตามมาตรฐานสากล</p>
                        </Container>
                        </Link>
                    </Col>
       
                  </Row>
                </div>
            </div>
            
        </div>
      );
    }
  }
  
  export default Hompage