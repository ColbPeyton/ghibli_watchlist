import React, {useState, useEffect} from 'react';

import { connect} from 'react-redux';

import MovieCard from './MovieCard';


function WatchlistBar(props){
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        getFilmsFromAPI(props.watchlist);
    }, [])

    // Using id, grab title from API to be sued for MovieCard Posters
    function getFilmsFromAPI(urls){
        let requests = urls.map(url => fetch(`https://ghibliapi.herokuapp.com/films/${url}`));

        Promise.all(requests)
        .then(async (responses) => {
            const data = [];
            for(const response of responses){
                let film = await response.json();
                data.push(film.title);
            }
            setFilms(data);
        })
        .catch(e => console.log(e));

    }

    function renderFilms(){
        return films.map((el, index) => {
            return <MovieCard key={index} film={el}/>
        })
    }


    return(
        renderFilms()
    )
}

const mapStateToProps = state => {
    return {watchlist: state.profile.watchlist}
}

export default connect(mapStateToProps)(WatchlistBar);