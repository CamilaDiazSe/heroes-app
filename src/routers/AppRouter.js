import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
// import { MarvelScreen } from '../components/marvel/MarvelScreen';
// import { Navbar } from '../components/ui/NavBar';
import { DashboradRoutes } from './DashboradRoutes';



export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route path="/" component = { DashboradRoutes } />
                </Switch>
            </div>
        </Router>

    )
}
