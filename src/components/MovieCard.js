import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import {currentFilm} from '../redux/actions/actions';


// import {posterKey} from '../_data/keys';

import image from '../assets/images/temp.png';

import '../styles/components/MovieCard.scss'
import { Spinner } from 'react-bootstrap';

function MovieCard(props){

    const [poster, setPoster] = useState(image);

    useEffect(()=>{
        // getPoster(props.film);
    }, [])

    // issue with API, will search for other solution
    async function getPoster(title){
        // let fixedTitle = title.replace(/ /g,"+");
        // const request = await fetch(`http://img.omdbapi.com/?apikey=${posterKey}&t=${fixedTitle}`);
        // const res = await request.json();
        // console.log(res)
        // setPoster(res);


    }

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
                        backgroundColor: 'black',
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