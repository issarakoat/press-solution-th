import React from 'react';
import {Row,Accordion, Card, Button} from 'react-bootstrap'
import PhotoesGallery from '../components/PhotoesGallery'
import Installation_HF_at_SAM_Data from '../data/Installation_HF_at_SAM_Data'
import FagorSLAB_Data from '../data/Fagor_SLAB_Data'
import VersionData from '../data/VersionData'
import Hydraulic from '../data/HydraulicLCM_2500Data'
import Translate from 'react-translate-component'

function VTEservicesInstallation(){
    const Installation_HF_at_SAM = Installation_HF_at_SAM_Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const Fargor_SLAB = FagorSLAB_Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const Version_Data = VersionData.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const Hydraulic_Data = Hydraulic.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    return(
    <div>
        <Accordion defaultActiveKey="0">
            {/* <Col sm={4}> */}
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Translate content='vte.install1' />
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Row>{Installation_HF_at_SAM}</Row>
                    </Accordion.Collapse>
                </Card>
             {/* </Col> */}
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <Translate content='vte.install2' />
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Row>{Fargor_SLAB}</Row>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            <Translate content='vte.install3' />
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Row>{Version_Data}</Row>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            <Translate content='vte.install4' />
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
            <Row>{Hydraulic_Data}</Row>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    </div>
)}
export default VTEservicesInstallation;