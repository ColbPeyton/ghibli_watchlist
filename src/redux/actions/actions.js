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


export const currentItem = (id) => {
    return{
        type: CURRENT_FILM,
        payload:{
            id
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