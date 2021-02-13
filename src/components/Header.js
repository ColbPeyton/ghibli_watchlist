import React from 'react';

import { NavLink } from 'react-router-dom';

import {Nav} from 'react-bootstrap';

import Logo from '../assets/images/temp.png';


import '../styles/components/Header.scss';


function Header(props){

    return(
        <header className='header'>
            <div className='container-logo'>
                <img src={Logo} />
            </div>
            <nav className='container-links'>
                <NavLink exact to="/" activeClassName='selected'>Home</NavLink>
                <NavLink to="/catalog" activeClassName='selected'>Catalog</NavLink>
                <NavLink to="/watchlist" activeClassName='selected'>Watchlist</NavLink>
            </nav>
        </header>
    )
}

export default Header;