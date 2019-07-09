import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import VTMNav from '../components/VTMNav'
import VTM from '../components/VTM';
import VTMWhy from '../components/VTMWhy'
import VTMProducts from '../components/VTMProducts'

const VTMRouter = ()=>(
    <BrowserRouter>
    <div>
        <VTMNav />
        <Switch>
            <Route path='/vtm' component={VTM} exact={true}/>
            <Route path='/vtm/why_us' component={VTMWhy} />
            <Route path='/vtm/products' component={VTMProducts} />
        </Switch>
    </div>
    </BrowserRouter>
)
export default VTMRouter;