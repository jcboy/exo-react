import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import {Navbar} from "../components/navbar/Navbar";
import {Home} from "../components/home/Home";
import {Interventions} from "../components/interventions/Interventions";

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={ Home} />
                    <Route exact path='/interventions' component={ Interventions } />

                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
