import React, {useState, useEffect} from 'react';


import Header from '../components/Header';
import Footer from '../components/Footer';
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


    return(
        <Container fluid className='catalog'>
        <Header />
            <h1>All Movies</h1>
            <Container className="container-grid">
                {renderFilms()}
            </Container>
        <Footer />
        </Container>
    )
}

export default Catalog;