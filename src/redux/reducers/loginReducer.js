import { GET_UTENTE_CORRENTE,LOGIN_ERROR,REMOVE_UTENTE_CORRENTE } from "../actions";

const initialState = {
    userData: {

    },
    error: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UTENTE_CORRENTE:
            return {
                ...state,
                userData:
                    action.payload,
                error: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_UTENTE_CORRENTE:
            return {
                ...state,
                userData:{
                    
                },
                error: null
            }
        default:
            return state;
    }
};

export default loginReducer;