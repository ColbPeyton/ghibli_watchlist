import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { currentFilm } from '../redux/actions/actions';

import Poster from '../components/Poster';
import AddToWatchlist from '../components/AddToWatchlist';

import {
    Col,
    Container, 
    Card,
    Row,
    Accordion,
    Button,
    ListGroup 
} from 'react-bootstrap';


import '../styles/pages/MovieDetails.scss';

function MovieDetails(props){
    const [details, setDetails] = useState({});

    useEffect(()=>{
        getFilmDetails(props.currentFilm.id)
    }, [])

    function getFilmDetails(id){
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setDetails(data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    function renderFilmInfo(){
        const {director, producer, release_date, rt_score} = details;
        return(
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        More Details
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <ListGroup variant="flush">
                        <ListGroup.Item>Director: {director}</ListGroup.Item>
                        <ListGroup.Item>Producer: {producer}</ListGroup.Item>
                        <ListGroup.Item>Release Date: {release_date}</ListGroup.Item>
                        <ListGroup.Item>Score: {rt_score}</ListGroup.Item>
                    </ListGroup>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )

    }

    function renderDescription(){
        return(
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Description
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>{details.description}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }


    return(
        <Container fluid className='details'>
            <Container className="container-details">
                <div className='top'>
                    <div className='poster'>
                        <Poster title={details.title} />
                    </div>
                </div>
                <div className='mid'>
                    <AddToWatchlist id={details.id} />
                </div>
                <div className='bot'>
                    <div className='description sep'>
                        {renderDescription()}
                    </div>
                    <div className='info sep'>
                        {renderFilmInfo()}
                    </div>
                </div>
            </Container>
        </Container>
    )
}

const mapStateToProps = state => {
    return {currentFilm: state.currentlyViewedFilm}
}

export default connect(mapStateToProps)(MovieDetails);