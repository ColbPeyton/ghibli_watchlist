import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieScrollBar from '../components/MovieScrollBar';
import WatchlistBar from '../components/WatchlistBar';
import { Container } from 'react-bootstrap';


function Home(props){
    return(
        <Container className='home'>
            <Container fluid className='container-header'>
                <Header />
            </Container>
            <Container fluid='md' className='container-body'>
                <h3>Studio Ghibli Watchlist </h3>
                <MovieScrollBar />
                <p>Let's find something to watch</p>
                <WatchlistBar />
            </Container>
            <Container fluid className='container-footer'>
                <Footer />
            </Container>
        </Container>

    )
}

export default Home;