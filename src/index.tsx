import * as React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from './pages/login'
import RegistrationPage from './pages/registration'
import NotfoundPage from './pages/notfound'
import App from './components/App'

render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegistrationPage}/>
            <Route path='*' component={NotfoundPage}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'))