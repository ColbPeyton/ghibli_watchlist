import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import {currentFilm} from '../redux/actions/actions';

import '../styles/components/MovieCard.scss'


function MovieCard(props){

    // Onclick, update store and direct to MovieDetails page
    function updateCurrentFilmAndLoadDetails(id, title){
        props.currentFilm(id, title);
        props.history.push(`/details/${title}`);
    }

    function renderTextOrSpinner(){
        if(props.title){
            return <p className='middle'>{props.title}</p>
        }
        return <Spinner animation="border" variant="primary" className='spinner'/>
    }


    return(
        <div className='card-container'>
            <button className='card-image' onClick={()=> updateCurrentFilmAndLoadDetails(props.id, props.title)}
                style={
                    {
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                    }
                }>  
            </button>
            {renderTextOrSpinner()}
        </div>
    )
}

export default connect(
    null,
    {
        currentFilm
    }
)(withRouter(MovieCard))