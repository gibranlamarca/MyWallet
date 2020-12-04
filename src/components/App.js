import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/Login';
import { UserContextProvider } from '../contexts/UserContext';
import Registros from '../pages/Registros';
export default function App() {
    return (
        <UserContextProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    <Route exact path='/registros/:tipo'>
                         <Registros />
                    </Route>
                </Switch>
            </Router>
        </UserContextProvider>
    )
}