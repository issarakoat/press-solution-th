import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import VTE from '../components/VTE';
import VTE_services from '../components/VTE_services'
import VTENav from '../components/VTENav'
import VTE_about from '../components/VTE_about'
import VTEClients from '../components/VTEClients'
import VTEinstallation from '../components/VTEservicesInstallation'
import VTERepair from '../components/VTEservicesRepair'
import VTEMaintainance from '../components/VTEservicesMaintainace'

const VTERouter =()=>(
    <BrowserRouter >
    <div>
        <VTENav />
        <Switch>
            <Route path='/vte' exact={true} component={VTE} />
            <Route path='/vte/services' exact={true} component={VTE_services} /> 
            <Route path='/vte/services/installation' component={VTEinstallation} />
            <Route path='/vte/services/repair' component={VTERepair} />
            <Route path='/vte/services/maintainance' component={VTEMaintainance} />
            <Route path='/vte/services/consultant' component={VTE} />
            <Route path='/vte/about' component={VTE_about} />
            <Route path='/vte/clients' component={VTEClients} />
        </Switch>
    </div>
    </BrowserRouter>
)
export default VTERouter;