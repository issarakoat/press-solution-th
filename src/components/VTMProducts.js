import React from 'react';
import {Row} from 'react-bootstrap'
// import VTMProductsItem from '../components/VTMProductItem'
import VTMProductsImageItem from '../components/VTMProductsImagesItem'
// import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal'
import ProductsData from '../data/VTM_products_allData'

 function VTM_products(){
     const AllProDucts = ProductsData.map(item=>
         <VTMProductsImageItem 
         id={item.id} 
         name={item.name} 
         desc_img={item.desc_img} 
         machine_img={item.machine_img} 
         spec_img={item.spec_img}
         />
     )
     return (
         <div>
             <Row>
                {AllProDucts}
            </Row>
         </div>
     )
 }
  
 export default VTM_products;
//   render(<VTM_products />);