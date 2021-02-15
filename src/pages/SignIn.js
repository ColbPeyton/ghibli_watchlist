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
        <Container className='sign-in'>
            <Jumbotron className='jumbo'>
                <Container>
                    <h1>SignIn</h1>
                    <p>To Get Started</p>
                </Container>    
            </Jumbotron>
            <form onSubmit={(e)=> handleSubmit(e)} className='container-form'>
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