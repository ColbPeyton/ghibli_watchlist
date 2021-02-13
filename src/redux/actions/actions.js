import { ADD_FILM, REMOVE_FILM, CURRENT_FILM, LOGIN, LOGOUT} from "./actionTypes";


export const addItemToWatchlist = (id) =>{
    return{
        type: ADD_FILM,
        payload:{
            id,
        }
    };
};


export const removeItemFromWatchlist = (id) =>{
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

export const login = (user) => {
    return{
        type: LOGIN,
        payload:{
            user
        }
    }
}