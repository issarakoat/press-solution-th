import React from 'react';
import{Button,Modal,ButtonToolbar,Card} from 'react-bootstrap'
import Translate from 'react-translate-component'
class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <Translate content="xuduan.name"/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            <Translate content="xuduan.about"/>
            </p>
            <Translate content="xuduan.research"/>
            <p>
            <Translate content="xuduan.research1"/>
            </p>

            <Card.Body>
            <Card.Link href='http://www.xuduan.com.cn/' target="_blank" rel="noopener noreferrer"><Translate content="xuduan.visit"/></Card.Link>
            </Card.Body>
      
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}><Translate content="xuduan.close"/></Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class XuduanModal extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            <Translate content="xuduan.learn"/>
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default XuduanModal;
//   render(<XuduanModal />);