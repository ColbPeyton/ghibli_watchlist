import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieScrollBar from '../components/MovieScrollBar';
import WatchlistBar from '../components/WatchlistBar';
import { Container } from 'react-bootstrap';


function Home(props){
    return(
        <Container fluid className='home'>
            <Header />
            <Container fluid='md' className='container-body'>
                <h1>Studio Ghibli Watchlist </h1>
                <MovieScrollBar />
                <p>Let's find something to watch</p>
                <WatchlistBar />
            </Container>
            <Footer />
        </Container>

    )
}

export default Home;