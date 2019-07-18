import React from 'react';
import XuduanModal from '../components/XuduanModal'
import {Jumbotron} from 'react-bootstrap'
import Translate from 'react-translate-component'
const VTMWhy = ()=>(
    <div>
        <Jumbotron>
        <h1><Translate content="xuduan.why" /></h1>
            <p>
                <li><Translate content="xuduan.1" /></li>
                <li><Translate content="xuduan.2" /></li>
                <li><Translate content="xuduan.3" /></li>
                <li><Translate content="xuduan.4" /></li>
                <li><Translate content="xuduan.5" /></li>
                <li><Translate content="xuduan.6" /></li>
            </p>
            <p>
                <XuduanModal />
            </p>
        </Jumbotron>
                
    </div>
)
export default VTMWhy
