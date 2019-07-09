import React from 'react';
import {Image,Row,Container,Col} from 'react-bootstrap'
import '../styles/contact.css'
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
            <h2 className="featurette-heading">กลุ่มบริษัทวีที</h2>
    <p className="lead">99/113 หมู่ 9 ต.บางโฉลง อ.บางพลี จ.สมุทรปราการ 10540 ประเทศไทย </p>
    <p>โทรศัพท์ : +66(2) 312 7790 <br/>แฟ็กซ์ : +66(2) 312 7791</p>
            </Col>
        </Row>
        </Container>
    </div>

        <div className='marketing'>
                <div className='row'>
                    <div className="col-lg-4">
                        <Image height='200' width='140' src="/images/toy.png" rounded/>
                        <h4>คุณ วีรศักดิ์ อิสระโคตร</h4>
                        <p><strong>กรรมการผู้จัดการ</strong> 
                            <br/><strong>โทรศัพท์ :</strong> +66(8)1802 9627
                            <br/><strong>อีเมล์ :</strong> veerasak.iss@gmail.com
                            <br/>       veerasak.vte@gmail.com</p>
                    </div>
                    <div className="col-lg-4">
                        <Image height='200' width='190'src="/images/ta.png" rounded/>
                        <h4>คุณ สรวิศ อิสระโคตร</h4>
                        <p><strong>การตลาด</strong>
                        <br/><strong>โทรศัพท์ :</strong> +66(9)3328 6533
                            <br/><strong>อีเมล์ :</strong> sorawit.vtm@gmail.com 
                            </p>
                    </div>
                    <div className="col-lg-4">
                        <Image height='200' width='180'src="/images/too.png" rounded/>
                        <h4>คุณ สรังสี อิสระโคตร</h4>
                        <p><strong>วิศวะกร โปรเจค</strong>
                        <br/><strong>โทรศัพท์ :</strong> +66(8)7567 0548
                            <br/><strong>อีเมล์ :</strong> sarangsri@gmail.com
                            </p>
                    </div>
                </div>
            </div>
</div>

    )
}
export default Contact;