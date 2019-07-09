import React from 'react'
import {Card,Col} from 'react-bootstrap'

function VTE_clientsItem(props){
    return(
        
            <div className='add-padding'>
                <Col sm={3}>
                    <Card bg="dark" text="white" style={{ width: '20rem' }}>
                    <Card.Link href={props.url} target="_blank" rel="noopener noreferrer">
                    {!props.img ? null : <Card.Img variant="top" height='100'src={props.img} />}
                    </Card.Link>
                    <Card.Body>              
                    <Card.Link href={props.url} target="_blank" rel="noopener noreferrer"><Card.Title>{props.name}</Card.Title></Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </div>          
    )
}
export default VTE_clientsItem;