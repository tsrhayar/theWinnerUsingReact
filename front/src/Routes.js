import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Signin from './user/Signin'
import Signup from './user/Signup'
import Dashbord from './user/Dashbord'

import Menu from './includes/Menu'
import Home from './includes/Home'

function Routes() {
    return (
        <BrowserRouter>
        <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/dashbord" exact component={Dashbord} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
