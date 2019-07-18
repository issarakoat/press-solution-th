import React from 'react';
import {Jumbotron} from 'react-bootstrap'
import Translate from 'react-translate-component'
const VTE_about = ()=>(
    <Jumbotron>
  <h1><Translate content='vte.about'/></h1>
  <p>
  <Translate content='vte.about1'/>
  </p>
  <p>
  <Translate content='vte.about2'/>
  </p>
  <hr />
  <p><Translate content='vte.about3'/></p>
</Jumbotron>
)
export default VTE_about;