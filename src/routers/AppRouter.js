import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from '../components/Home'

import VTERouter from '../routers/VTERouter'
import VTMRouter from '../routers/VTMRouter'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Contact from '../components/Contact'


const AppRouter = ()=>(
    <BrowserRouter>
    <div>
        <NavBar />
        <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route path='/vte' component={VTERouter} exact={true}/>
            <Route path='/vtm' component={VTMRouter} exact={true}/>
            <Route path='/contact' component={Contact} exact={true} />
            <Route component={Home} />
        </Switch>
        <Footer />
    </div>
    </BrowserRouter>
)
export default AppRouter;