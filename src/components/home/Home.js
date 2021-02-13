import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import IconArrow from "../common/IconArrow";
import IconClock from "../common/IconClock";
import {PageContext} from "../common/PageContext";

export const Home = () => {

    const {setPageName} = useContext(PageContext);

    return (
        <div className="container home main">

            <div className="link-content">
                <Link to={{pathname: '/interventions' } } onClick={ ()=> setPageName('Mes interventions') }  className="btn btn-outline-secondary text-uppercase d-flex justify-content-center">
                    <span className="icon "><IconArrow/></span>
                    <span>Mes interventions</span>
                    <span className="msg">10</span>
                </Link>

                <Link to="/" className="btn btn-outline-secondary mt-4 text-uppercase d-flex justify-content-center mb-3">
                    <span className="icon"><IconClock/></span>
                    <span>Historique</span>
                </Link>




            </div>

        </div>
    )
}
