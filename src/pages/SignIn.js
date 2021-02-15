import React, {useState} from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


import {signIn} from '../redux/actions/actions';

import '../styles/pages/SignIn.scss';

function SignIn(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        props.signIn(username);
        props.history.push(`/watchlist`);

    }

    return(
        <Container fluid className='sign-in'>
            <Jumbotron fluid className='jumbo'>
                <Container>
                    <h1>Sign In</h1>
                    <p>To Get Started</p>
                </Container>    
            </Jumbotron>
            <Container className='container-form'>
            <form onSubmit={(e)=> handleSubmit(e)} className='form-body'>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        onChange={((e)=> setUsername(e.target.value))} 
                        placeholder='GhibliFan01'
                        className='form-control'
                        id='username'
                        />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        onChange={((e)=> setPassword(e.target.value))} 
                        placeholder=''
                        className='form-control'
                        id='password'
                        />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </Container>
        </Container>
       
    )
}

const mapStateToProps = state => {
    return {username : state.profile.username}
}

export default connect(
    mapStateToProps,
    {
        signIn
    }
    )(withRouter(SignIn))