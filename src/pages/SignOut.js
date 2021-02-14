import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


import {signOut} from '../redux/actions/actions';

function SignOut(props){

    function handleClick(){
        props.signOut('');
        props.history.push(`/`);
    }

    return(
        <Container>
            <button type="button" className="btn btn-primary" onClick={()=> handleClick()}>Sign Out</button>
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