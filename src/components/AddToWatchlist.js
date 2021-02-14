import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


import {addFilmToWatchlist, removeFilmFromWatchlist} from '../redux/actions/actions';


import '../styles/components/AddToWatchlist.scss';

function AddToWatchlist(props){

    // Keep track of watchlist in local state, imports from store
    const [currentWatchlist, setCurrentWatchlist] = useState(props.watchlist)
    // Check for conditional rendering of button and actions, will be updated with bool to reduce .includes calls
    const [onWatchlist, setOnWatchlist] = useState(currentWatchlist.includes(props.currentFilm.id))

    useEffect(()=>{
        setCurrentWatchlist(props.watchlist)
    },[props.watchlist])

    function determineIfOnWatchlist(){
        if(onWatchlist){
            return <Button 
                    variant="danger" 
                    size="lg" 
                    block 
                    onClick={()=> addOrRemoveFromWatchlist()}>
                    Remove From Watchlist
                </Button>
        }

        return <Button 
                variant="success" 
                size="lg" 
                block 
                onClick={()=> addOrRemoveFromWatchlist()}>
                Add To Watchlist
            </Button>
    }

    function addOrRemoveFromWatchlist(){
        if(onWatchlist){
            props.removeFilmFromWatchlist(props.id)
            setOnWatchlist(false)
        }else{
            props.addFilmToWatchlist(props.id)
            setOnWatchlist(true)
        }
    }

    return(
        <div className='btn-container'>
            {determineIfOnWatchlist()}
        </div>
    )
}

const mapStateToProps = state => {
    return {watchlist: state.profile.watchlist, currentFilm: state.currentlyViewedFilm}
}

export default connect(
    mapStateToProps,
     {
        addFilmToWatchlist,
        removeFilmFromWatchlist
     }
     )(AddToWatchlist);