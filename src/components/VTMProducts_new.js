import React from 'react';
import {Row} from 'react-bootstrap'
// import VTMProductsItem from '../components/VTMProductItem'
// import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal'
import Products_data from '../data/VTM_CseriesData'
import VTMProductsImagesItem from '../components/VTMProductsImagesItem'

 function VTM_products_new(){
     const AllProducts = Products_data.map(item=>
         <VTMProductsImagesItem 
         id={item.id} 
         name={item.name} 
         machine_img={item.machine_img} 
         desc_img={item.desc_img}
         spec_img={item.spec_img}
         />
     )
     return (
         <div>
             <Row>
                {AllProducts}
            </Row>
         </div>
     )
 }
  
 export default VTM_products_new;
//   render(<VTM_products />);