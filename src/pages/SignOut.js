import React, {useState} from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


import {signOut} from '../redux/actions/actions';

import '../styles/pages/SignIn.scss';

function SignOut(props){

    function handleClick(){
        props.signOut('');
        props.history.push(`/`);
    }

    return(
        <Container className='sign-in'>
            <Jumbotron className='jumbo'>
                <Container>
                    <h1>Sign Out</h1>
                    <p>See Ya Soon</p>
                </Container>    
            </Jumbotron>
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=> handleClick()}>Sign Out</button>
        </Container>
    )
}

const mapStateToProps = state => {
    return {username : state.profile.username}
}

export default connect(
    mapStateToProps,
    {
        signOut
    }
    )(withRouter(SignOut))