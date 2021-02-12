import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from "react-router-dom";
import Moment from 'react-moment';
import IconLogout from "../common/IconLogout";
import logo from '../../assets/images/logo.png';

const now = new Moment();

export const Navbar = ({mapage}) => {

    const [pageState, setPageState] = useState('homepage');

    return (
        <div className="container fixed-top">
            <nav className="navbar navbar-expand-lg px-4  mt-4">
                <div className="titlePage me-auto">
                    {mapage}-------
                </div>
                <Link to="/" className="navbar-brand"> <img src={logo} alt="Logo" /> </Link>
                <div className="welcome ">Bonjour, Jhon</div>

                <Moment format="DD/MM/YYYY" className="btn btn-primary date ms-4">{now}</Moment>
                <span className="icon ms-4"><IconLogout /></span>
            </nav>
        </div>
    )
}

Navbar.defaultProps = {
    mapage: 'Home page'
}