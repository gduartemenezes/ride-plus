// Main Modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Logon from './pages/Logon';
import Register from './pages/Register';
// Router
export default function Router() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Logon} />
            <Route path='/register' component={Register} />
        </Switch>
    </BrowserRouter>
    );
}