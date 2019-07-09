import React from 'react';
import {Row,Accordion, Card, Button} from 'react-bootstrap'
import PhotoesGallery from '../components/PhotoesGallery'
import BP5_1_Data from '../data/Maintainance_BP5-1Data'
import BP6_1_Data from '../data/Maintainance_BP6-1Data'


function VTEmaintainance(){
    const BP5_1 = BP5_1_Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const BP6_1 = BP6_1_Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)


    return(
    <div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    SAB BP5-1
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Row>{BP5_1}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    SAB BP6-1
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Row>{BP6_1}</Row>
                </Accordion.Collapse>
            </Card>
            
    
        </Accordion>
    </div>
)}
export default VTEmaintainance;