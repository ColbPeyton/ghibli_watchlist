import React, {useState, useEffect} from 'react';

import MovieCard from '../components/MovieCard';

import '../styles/pages/Catalog.scss';

import {
    Col,
    Container, Row
} from 'react-bootstrap';

function Catalog(props){
    
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        getFilms();
    }, []);

    // Grab all films from API for MovieCard
    async function getFilms(){

        const requests = await fetch('https://ghibliapi.herokuapp.com/films');
        const data  = await requests.json();
        setFilms(data);
    }

    function renderFilms(){
        return films.map((film, index)=> {
            return <MovieCard title={film.title} id={film.id} key={index}/>
        })
    }

    // Displays placeholder cards while API request is resolving
    function renderPlaceHolderCards(){
        const placeHolders = Array(20).fill(null);
        return placeHolders.map((film, index)=> {
            return <MovieCard key={index}/>
        }) 
    }

    function renderDataIfAvailable(){
        if(!films.length){
            return renderPlaceHolderCards()
        }

        return renderFilms()
    }


    return(
        <Container fluid className='catalog'>
            <h1>All Movies</h1>
            <Container className="container-grid">
                {renderDataIfAvailable()}
            </Container>
        </Container>
    )
}

export default Catalog;