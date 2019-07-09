import React from 'react'
import {Row} from 'react-bootstrap'
import '../styles/vte_clients.css'
import ClientData from '../data/VTE_clientsData'
import ClientItem from'../components/VTE_clientsItem'


function VTEClients(){
    const ClientsComponent = ClientData.map(item=>
        <ClientItem id={item.id} name={item.name} url={item.url} img={item.img}/>)
    return(
    <div className='add-padding'>       
        <Row>
            {ClientsComponent}            
        </Row>
    </div>
    )}
export default VTEClients;