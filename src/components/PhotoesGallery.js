import React from 'react'
import {Container,Col,Image} from 'react-bootstrap'
import '../styles/photoes_gallery.css'
function PhotoesGallery(props){
    return (
        <div className='item'>   
      
            <Col sm={4} >
                <Container>
                <Image 
                //  fluid
                //  height='300'
                width='300'
                src={props.img}
                />
                </Container>
            </Col>     
        </div>
    )
}
export default PhotoesGallery;