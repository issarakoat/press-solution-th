import React from 'react';
import {Row,Col,Button, Modal,Image} from 'react-bootstrap'

// import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal'

class MyVerticallyCenteredModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
     const d_list = this.props.list.map(item=>(<li>{item}</li>))
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {this.props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
            <Col lg={4}>
                    <Image 
                        fluid
                        src={this.props.machine_img}
                        />
                </Col>
                <Col lg={8}>
                    <ul>
                        {d_list}
                    </ul>
                </Col>
                
            </Row>
           
            <Image 
                fluid
                src={this.props.desc_img}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class VTMProductItem extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { modalShow: false };
    }
    render() {
      let modalClose = () => this.setState({ modalShow: false });
      return (
     
            <Col sm={4}>
                <div style={{padding:'0.1rem'}}>
                <Image
                    fluid
                    src={this.props.machine_img}
                    onClick={() => this.setState({ modalShow: true })}
                    />  
                </div>
                <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={modalClose}
                id={this.props.id}
                name={this.props.name}
                desc={this.props.desc}
                list={this.props.list}
                machine_img={this.props.machine_img}
                desc_img={this.props.desc_img}
            />
          </Col>
      
      );
    }
  }
  
 export default VTMProductItem;
