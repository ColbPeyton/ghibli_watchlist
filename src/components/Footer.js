import React from 'react';
import { Container, Row } from 'react-bootstrap';

import '../styles/components/Footer.scss';

const colb = 'https://www.colbypeyton.com/';


function Footer(props){
    return(
        <Container className='footer-container'>
            <p>I Do Not Own Any Of The Films.</p>
            <p>This is a practice project.</p>
            <p>Developed by <a href={colb} target="_blank" rel="noreferrer" className='dev'>ColbPeyton</a></p>
        </Container>
    )
}

export default Footer;