import { ADD_FILM, REMOVE_FILM, CURRENT_FILM, LOGIN, LOGOUT} from "./actionTypes";


export const addFilmToWatchlist = (id) =>{
    return{
        type: ADD_FILM,
        payload:{
            id,
        }
    };
};


export const removeFilmFromWatchlist = (id) =>{
    return{
        type: REMOVE_FILM,
        payload:{
            id
        }
    };
}


export const currentFilm = (id, title) => {
    return{
        type: CURRENT_FILM,
        payload:{
            id, 
            title
        }
    }
}

export const signIn = (username) => {
    return{
        type: LOGIN,
        payload:{
            username
        }
    }
}

export const signOut = (username) => {
    return{
        type: LOGIN,
        payload:{
            username
        }
    }
}