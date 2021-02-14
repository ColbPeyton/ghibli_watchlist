import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


import {signIn} from '../redux/actions/actions';

function SignIn(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        props.signIn(username);
        props.history.push(`/watchlist`);

    }

    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
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
                <label htmlFor='password'>Username</label>
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