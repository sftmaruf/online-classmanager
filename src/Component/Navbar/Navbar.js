import React from 'react';
import logo from '../../resources/logo/graduate.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                &ensp; Graduate
            </a>
        </nav>
    );
};

export default Navbar;