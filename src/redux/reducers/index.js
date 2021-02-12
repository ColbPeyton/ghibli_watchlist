import { ADD_FILM, REMOVE_FILM, CURRENT_FILM, LOGIN, LOGOUT} from "../actions/actionTypes";


const INITIAL_STATE = {
    profile: {
        username: '',
        watchlist: ["58611129-2dbc-4a81-a72f-77ddfc1b1b49", "12cfb892-aac0-4c5b-94af-521852e46d6a"]
    },
    currentlyViewedItem: {
        name: '',
        id: 0
    }
}



export const reducers = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ADD_FILM:
            return addFilmToWatchlist(state, action);
        case REMOVE_FILM:
            return removeFilmFromWatchlist(state, action);
        case CURRENT_FILM:
            return updateCurrentFilm(state, action);
        // case LOGIN:
        //     return removeItemQuanityFromCart(state, action);
        // case LOGOUT:
        //     return updateCurrentItem(state, action);
        default:
            return state;
    }
}


const addFilmToWatchlist = (state = INITIAL_STATE, action) =>{
    if(action.type === ADD_FILM){
        return {...state, cart:[...state.cart, action.payload]};
    }
    return state;
}

const removeFilmFromWatchlist = (state = INITIAL_STATE, action) =>{
    return {...state, cart: [...state.cart.filter(item => item.id !== action.payload.id)]};
}

const updateCurrentFilm = (state= INITIAL_STATE, action) =>{
    return {...state, currentlyViewedFilm: 
        {
            id: action.payload.id, 
        }
    }
}