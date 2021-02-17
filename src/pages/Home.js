import React from 'react';
import { withRouter} from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';


import '../styles/pages/Home.scss';

function Home(props){
    return(
        <Container fluid className='home'>
            <Jumbotron fluid className='container-jumbo'>
                <h1>Studio Ghibli Watchlist </h1>
                <p>Let's find something to watch</p>
                <p>
                    <Button variant="primary" onClick={()=> props.history.push(`/catalog`)}>Go To Catalog</Button>
                </p>
            </Jumbotron>
        </Container>

    )
}

export default withRouter(Home);