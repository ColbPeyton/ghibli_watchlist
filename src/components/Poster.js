import React from 'react';

import '../styles/components/Poster.scss';

function Poster(props){
    return(
        <div className='poster'>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Poster;