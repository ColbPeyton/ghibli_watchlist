import React, {useState, useEffect} from 'react';

// import {posterKey} from '../_data/keys';

import image from '../assets/images/temp.png';

import '../styles/components/MovieCard.scss'

function MovieCard(props){

    const [poster, setPoster] = useState(image);

    useEffect(()=>{
        // getPoster(props.film);
    }, [])

    // issue with API, will search for other solution
    async function getPoster(title){
        // let fixedTitle = title.replace(/ /g,"+");
        // const request = await fetch(`http://img.omdbapi.com/?apikey=${posterKey}&t=${fixedTitle}`);
        // const res = await request.json();
        // console.log(res)
        // setPoster(res);


    }



    return(
        <div className='card-container'>
            <button className='card-image' 
                style={
                    {
                        backgroundImage: poster,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                    }
                }>  
            </button>
            <p>{props.title}</p>
        </div>
    )
}

export default MovieCard