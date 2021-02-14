import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import Logo from '../assets/images/temp.png';


import '../styles/components/Header.scss';


function Header(props){

    function renderLoginStatus(){
        if(props.username !== ''){
            return <NavLink to="/logout" activeClassName='selected'>Logout</NavLink>
        }

        return <NavLink to="/login" activeClassName='selected'>Login</NavLink>
    }

    return(
        <header className='header'>
            <div className='container-logo'>
                <img src={Logo} />
            </div>
            <nav className='container-links'>
                <NavLink exact to="/" activeClassName='selected'>Home</NavLink>
                <NavLink to="/catalog" activeClassName='selected'>Catalog</NavLink>
                <NavLink to="/watchlist" activeClassName='selected'>Watchlist</NavLink>
                {renderLoginStatus()}
            </nav>
        </header>
    )
}

const mapStateToProps = state => {
    return {username : state.profile.username}
  }
  
  
  export default connect(mapStateToProps)(Header);
  