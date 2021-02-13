import React, {useState, useEffect} from 'react';

// import {posterKey} from '../_data/keys';

import image from '../assets/images/temp.png';

function MovieCard(props){

    const [poster, setPoster] = useState('http://placekitten.com/g/200/300');

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
        <div>
            <img src={poster}  alt={props.film}/>
            <p>{props.film}</p>
        </div>
    )
}

export default MovieCard