import React from 'react';
import {Link, useLocation} from "react-router-dom";
import IconArrow from "../common/IconArrow";
import IconClock from "../common/IconClock";

export const Home = () => {
    return (
        <div className="container home">

            <div className="link-content">
                <Link to={{pathname: '/interventions', state: {pageTitle: 'interv'} } }  className="btn btn-outline-secondary text-uppercase d-flex justify-content-center">
                    <span className="icon "><IconArrow/></span>
                    <span>Mes interventions</span>
                    <span className="msg">10</span>
                </Link>

                <Link to="/" className="btn btn-outline-secondary mt-4 text-uppercase d-flex justify-content-center">
                    <span className="icon"><IconClock/></span>
                    <span>Historique</span>
                </Link>




            </div>

        </div>
    )
}
