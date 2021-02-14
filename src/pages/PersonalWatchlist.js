import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';

import MovieCard from '../components/MovieCard';


import {
    Col,
    Container, Row
} from 'react-bootstrap';


function PersonalWatchlist(props){

    const [films, setFilms] = useState([]);

    
    useEffect(()=>{
        getFilmsFromAPI(props.watchlist);
    }, [])

    // Using id, grab title from API to be sued for MovieCard Posters
    async function getFilmsFromAPI(urls){
        let requests = urls.map(url => fetch(`https://ghibliapi.herokuapp.com/films/${url}`));

        Promise.all(requests)
        .then(async (responses) => {
            const data = [];
            for(const response of responses){
                let film = await response.json();
                data.push(film.title);
            }
            const combined = combineData(data, props.watchlist);
            const cards = generateMovieCards(combined);
            setFilms(cards);
        })
        .catch(e => console.log(e));
    }

    // combine keys and names from api for MovieCard
    function combineData(a, b){
        const combined = {};
        for(let i = 0; i < a.length; i++){
            combined[a[i]] = b[i]
        }
        return combined;
    }

    function generateMovieCards(films){
        const cards = [];
        let index = 0;
        for(const [key, value] of Object.entries(films)){
            cards.push(<MovieCard key={index} title={key} id={value}/>)
            index++;
        }

        return cards;
    }

    return(
        <Container fluid className='catalog'>
            <h1>Your Watchlist</h1>
            <Container className="container-grid">
                {films}
            </Container>
        </Container>

    )
}

const mapStateToProps = state => {
    return {watchlist: state.profile.watchlist}
}

export default connect(mapStateToProps)(PersonalWatchlist);