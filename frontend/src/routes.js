// Main Modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Logon from './pages/Logon';

// Router
export default function Router() {
    return (
    <BrowserRouter>
        <Switch>
            <Route  path='/' exact component={Logon} />
        </Switch>
    </BrowserRouter>
    );
}