import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';


import {addFilmToWatchlist, removeFilmFromWatchlist} from '../redux/actions/actions';


function AddToWatchlist(props){

    const [currentWatchlist, setCurrentWatchlist] = useState(props.watchlist)
    const [onWatchlist, setOnWatchlist] = useState(props.watchlist.includes(props.id))


    useEffect(()=>{
        console.log('updated')
        setCurrentWatchlist(props.watchlist)
        setOnWatchlist(currentWatchlist.includes(props.id))
    },[props.watchlist])

    function determineIfOnWatchlist(){
        if(onWatchlist){
            return <button onClick={()=> addOrRemoveFromWatchlist()}>Remove from Watchlist</button>
        }

        return <button onClick={()=> addOrRemoveFromWatchlist()}>Add To Watchlist</button>
    }

    function addOrRemoveFromWatchlist(){
        if(onWatchlist){
            removeFilmFromWatchlist(props.id)
            console.log('off ', currentWatchlist)
        }else{
            addFilmToWatchlist(props.id)
            console.log('on ', currentWatchlist)

        }
    }

    return(
        <div className='btn'>
            {determineIfOnWatchlist()}
        </div>
    )
}

const mapStateToProps = state => {
    return {watchlist: state.watchlist}
}

export default connect(
    mapStateToProps,
     {
        addFilmToWatchlist,
        removeFilmFromWatchlist
     }
     )(AddToWatchlist);