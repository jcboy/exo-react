import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Moment from 'react-moment';
import IconLogout from "../common/IconLogout";
import logo from '../../assets/images/logo.png';
import {PageContext} from "../common/PageContext";

const now = new Moment();

export const Navbar = () => {

    const { pageName, setPageName } = useContext(PageContext);

    return (
        <div className="container fixed-top">
            <nav className="navbar navbar-expand-lg px-4  mt-4">
                <div className="titlePage me-auto">
                    {pageName === '' ? 'Accueil' : pageName }
                </div>

                <Link to="/" onClick={ ()=> setPageName('Accueil') } className="navbar-brand"> <img src={logo} alt="Logo" /> </Link>

                <div className="welcome ">Bonjour, Jhon</div>

                <Moment format="DD/MM/YYYY" className="btn btn-primary date ms-4">{now}</Moment>
                <span className="icon ms-4"><IconLogout /></span>
            </nav>
        </div>
    )
}
