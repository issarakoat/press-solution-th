import React from 'react';
import {Row,Accordion, Card, Button} from 'react-bootstrap'
import PhotoesGallery from '../components/PhotoesGallery'
import SLAB2Data from '../data/Repair_SLAB2Data'
import ChinFongData from '../data/Repair_ChinFongData'
import SchulerData from '../data/Repair_SchulerData'
import AIDA_Data from '../data/Repair_AIDA_Data'
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
                    SLAB2 เปลี่ยนเพลาความเร็วสูง (JIER)
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Row>{SLAB2}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    ชินฟง       
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Row>{ChinFong}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                การซ่อมเบาะสำหรับ“ Schuler” เพลส
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Row>{Schuler}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    งานซ่อมสำหรับ -AIDA- กด 60 ตัน
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