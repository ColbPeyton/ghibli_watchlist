import { ADD_FILM, REMOVE_FILM, CURRENT_FILM} from "../actions/actionTypes";


const INITIAL_STATE = {
    profile: {
        username: '',
        watchlist: []
    },
    currentlyViewedFilm: {
        title: '',
        id: 0
    },
    watchlist: []
}



export const reducers = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ADD_FILM:
            return addFilmToWatchlist(state, action);
        case REMOVE_FILM:
            return removeFilmFromWatchlist(state, action);
        case CURRENT_FILM:
            return updateCurrentFilm(state, action);
        default:
            return state;
    }
}


const addFilmToWatchlist = (state = INITIAL_STATE, action) =>{
    return {...state, profile: 
        {
            username: state.profile.username,
            watchlist: [...state.profile.watchlist, action.payload.id]
        }
    };
}

const removeFilmFromWatchlist = (state = INITIAL_STATE, action) =>{

    return {...state, profile: 
        { 
            username: state.profile.username,
            watchlist: [...state.profile.watchlist.filter(film => film !== action.payload.id)]
        }
    };
}

const updateCurrentFilm = (state= INITIAL_STATE, action) =>{
    return {...state, currentlyViewedFilm: 
        {
            id: action.payload.id, 
            title: action.payload.title
        }
    }
}