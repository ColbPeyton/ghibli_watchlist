import React from 'react';
import { connect } from 'react-redux';



function MovieDetails(props){
    console.log(props)
    return(
        <div>
        <p>{props.currentFilm.title}</p>
        <p>heere</p>
        </div>

    )
}

const mapStateToProps = state => {
    return {currentFilm: state.currentlyViewedFilm}
}

export default connect(mapStateToProps)(MovieDetails);