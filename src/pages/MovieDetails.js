import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { currentFilm } from '../redux/actions/actions';

import Poster from '../components/Poster';

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


    return(
        <Container fluid className='details'>
            <Container className="container-details">
                <div className='top'>
                    <div className='poster'>
                        <Poster title={details.title} />
                    </div>
                    <div className='description'>
                        {details.description}
                    </div>
                </div>
                <div className='bot'>
                    {renderFilmInfo()}
                </div>
            </Container>
        </Container>
    )
}

const mapStateToProps = state => {
    return {currentFilm: state.currentlyViewedFilm}
}

export default connect(mapStateToProps)(MovieDetails);