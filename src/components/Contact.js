import React from 'react';
import {Image,Row,Container,Col} from 'react-bootstrap'
import '../styles/contact.css'
import Translate from 'react-translate-component'
function Contact(){
    return(
<div>
    <div className='space-top'>
  <Container>
        <Row >
            <Col sm={6}>
            <Image
            src='/images/vte_address.jpg'
            height='500'
            width='500'
            fluid
            />
            </Col>
            <Col sm={6}>
            <h2 className="featurette-heading"><Translate content='contact_detail.company'/></h2>
    <p className="lead"><Translate content='contact_detail.company_address'/></p>
    <p><Translate content='contact_detail.company_phone'/> <br/><Translate content='contact_detail.company_fax'/></p>
            </Col>
        </Row>
        </Container>
    </div>

        <div className='marketing'>
                <div className='row'>
                    <div className="col-lg-4">
                        <Image height='200' width='140' src="/images/toy.png" rounded/>
                        <h4><Translate content='contact_detail.toy'/></h4>
                        <p><strong><Translate content='contact_detail.toy_position'/></strong> 
                            <br/><strong><Translate content='contact_detail.phone'/></strong> +66(8)1802 9627
                            <br/><strong><Translate content='contact_detail.email'/></strong> veerasak.iss@gmail.com
                            <br/>       veerasak.vte@gmail.com</p>
                    </div>
                    <div className="col-lg-4">
                        <Image height='200' width='190'src="/images/ta.png" rounded/>
                        <h4><Translate content='contact_detail.ta'/></h4>
                        <p><strong><Translate content='contact_detail.ta_position'/></strong>
                        <br/><strong><Translate content='contact_detail.phone'/></strong> +66(9)3328 6533
                            <br/><strong><Translate content='contact_detail.email'/></strong> sorawit.vtm@gmail.com 
                            </p>
                    </div>
                    <div className="col-lg-4">
                        <Image height='200' width='180'src="/images/too.png" rounded/>
                        <h4><Translate content='contact_detail.too'/></h4>
                        <p><strong><Translate content='contact_detail.too_position'/></strong>
                        <br/><strong><Translate content='contact_detail.phone'/></strong> +66(8)7567 0548
                            <br/><strong><Translate content='contact_detail.email'/></strong> sarangsri@gmail.com
                            </p>
                    </div>
                </div>
            </div>
</div>

    )
}
export default Contact;