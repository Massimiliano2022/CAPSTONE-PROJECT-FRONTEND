import { POST_REGISTRA_UTENTE, REGISTRA_LOADING_ON, REGISTRA_LOADING_OFF, GET_REGISTRA_LOADING, REGISTRA_ERROR, REMOVE_REGISTRA_ERROR, REGISTRA_SUCCESS, REGISTRA_SUCCESS_RESET } from "../actions";

const initialState = {
    userData: null,
    isLoading: false,
    error: null,
    success: false,
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
        case REGISTRA_SUCCESS:
            return {
                ...state,
                success: true
            };
        case REGISTRA_SUCCESS_RESET:
            return {
                ...state,
                success: false
            };
        default:
            return state;
    }
};

export default registraUtenteReducer;