import React from 'react';
import MovieScrollBar from '../components/MovieScrollBar';
import WatchlistBar from '../components/WatchlistBar';
import { Container } from 'react-bootstrap';


function Home(props){
    return(
        <Container fluid className='home'>
            <Container fluid='md' className='container-body'>
                <h1>Studio Ghibli Watchlist </h1>
                <MovieScrollBar />
                <p>Let's find something to watch</p>
                <WatchlistBar />
            </Container>
        </Container>

    )
}

export default Home;