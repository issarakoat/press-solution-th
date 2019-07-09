import React from 'react';
import {Row, Jumbotron} from 'react-bootstrap'
import VTMProductsItem from '../components/VTMProductItem'
// import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal'
import C_seriesData from '../data/VTM_CseriesData'
import H_seriesData from '../data/VTM_HseriesData'

 function VTM_products(){
     const C_series = C_seriesData.map(item=>
         <VTMProductsItem 
         id={item.id} 
         name={item.name} 
         list={item.list} 
         desc={item.desc} 
         machine_img={item.machine_img} 
         desc_img={item.desc_img}
         />
     )
     const H_series = H_seriesData.map(item=>
         <VTMProductsItem 
         id={item.id} 
         name={item.name} 
         list={item.list} 
         desc={item.desc} 
         machine_img={item.machine_img} 
         desc_img={item.desc_img}
         />
     )
     return (
         <div>
             <Jumbotron>
                <h1>Series C Type</h1>
                <p>
                High Performance Press with fixed Bed
                </p>
            </Jumbotron>
             <Row>
                {C_series}
            </Row>
            <Jumbotron>
                <h1>Series H Type</h1>
                <p>
                Single and two Point Press
                </p>
            </Jumbotron>
            <Row>
                {H_series}
            </Row>
         </div>
     )
 }
  
 export default VTM_products;
//   render(<VTM_products />);