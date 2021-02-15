import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';

import MovieCard from '../components/MovieCard';

import '../styles/pages/Catalog.scss';
import '../styles/pages/PersonalWatchlist.scss';



import {
    Col,
    Container, Jumbotron, Row, Spinner
} from 'react-bootstrap';


function PersonalWatchlist(props){

    const [films, setFilms] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // Delay if for API call or render empty message/films
    useEffect(()=>{
        getFilmsFromAPI(props.watchlist);
        setTimeout(()=>{
            setSpinner(false);
        }, 1000)
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

    // Use key/value pairs from combineData to render MovieCard. 
    // Needed to combine ID and Name for Redux action on MovieCard.
    function generateMovieCards(films){
        const cards = [];
        let index = 0;
        for(const [key, value] of Object.entries(films)){
            cards.push(<MovieCard key={index} title={key} id={value}/>)
            index++;
        }

        return cards;
    }

    // Render films 
    function renderMessageBasedOnFilms(){
        if(!films.length){
            return(
                <Container className="container">
                    <h4>Nothing here :(</h4>
                </Container>
            )
        }
        return(
            <Container className="container-grid">
                {films}
            </Container>
        )
    }

    // Render spinner while waiting for data from API
    function renderSpinner(){
        return(
            <Container className='spinner'>
                <Row>
                    <Col>
                        <Spinner animation="grow" variant="primary" />
                    </Col>
                    <Col>
                        <Spinner animation="grow" variant="warning" />
                    </Col>
                    <Col>
                        <Spinner animation="grow" variant="primary" />
                    </Col>
                </Row>

            </Container>
        ) 
    }

    return(
        <Container fluid className='catalog'>
            <Jumbotron fluid>
                <Container>
                    <h1>Your Watchlist</h1>
                    <p>Let's Get You Watching Something</p>
                </Container>
                
            </Jumbotron>
            {spinner ? renderSpinner() : renderMessageBasedOnFilms()}
        </Container>

    )
}

const mapStateToProps = state => {
    return {watchlist: state.profile.watchlist}
}

export default connect(mapStateToProps)(PersonalWatchlist);