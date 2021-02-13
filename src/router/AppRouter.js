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
import IconAdd from "../components/common/IconAdd";


export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={ Home} />
                    <Route  path='/interventions' component={ Interventions } />

                    <Redirect to="/" />
                </Switch>
                <div className="btnAdd"><IconAdd /></div>
            </>
        </Router>
    )
}
