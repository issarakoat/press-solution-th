import React from 'react';
import {Row,Accordion, Card, Button} from 'react-bootstrap'
import PhotoesGallery from '../components/PhotoesGallery'
import SLAB2Data from '../data/Repair_SLAB2Data'
import ChinFongData from '../data/Repair_ChinFongData'
import SchulerData from '../data/Repair_SchulerData'
import AIDA_Data from '../data/Repair_AIDA_Data'
import Translate from 'react-translate-component'
function VTErepair(){
    const SLAB2 = SLAB2Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const ChinFong = ChinFongData.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const Schuler = SchulerData.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const AIDA = AIDA_Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)

    return(
    <div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Translate content='vte.repair1'/>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Row>{SLAB2}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Translate content='vte.repair2'/>      
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Row>{ChinFong}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Translate content='vte.repair3'/>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Row>{Schuler}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <Translate content='vte.repair4'/>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Row>{AIDA}</Row>
                </Accordion.Collapse>
            </Card>
    
        </Accordion>
    </div>
)}
export default VTErepair;