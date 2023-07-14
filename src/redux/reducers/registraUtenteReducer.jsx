import { POST_REGISTRA_UTENTE, REGISTRA_LOADING_ON, REGISTRA_LOADING_OFF, GET_REGISTRA_LOADING, REGISTRA_ERROR, REMOVE_REGISTRA_ERROR } from "../actions";

const initialState = {
    userData: {

    },
    isLoading: false,
    error: null
};

const registraUtenteReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REGISTRA_UTENTE:
            return {
                ...state,
                userData:
                    action.payload,
                error: null
            }
        case REGISTRA_LOADING_ON:
            return {
                ...state,
                isLoading: true
            };
        case REGISTRA_LOADING_OFF:
            return {
                ...state,
                isLoading: false
            };
        case GET_REGISTRA_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case REGISTRA_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_REGISTRA_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export default registraUtenteReducer;