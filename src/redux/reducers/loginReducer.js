import { GET_UTENTE_CORRENTE, LOGIN_LOADING_ON, LOGIN_LOADING_OFF, GET_LOGIN_LOADING, LOGIN_ERROR, REMOVE_LOGIN_ERROR, REMOVE_UTENTE_CORRENTE, LOGIN_SUCCESS, LOGIN_SUCCESS_RESET } from "../actions";

const initialState = {
    userData: {

    },
    isLoading: false,
    error: null,
    success: false,
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
        case LOGIN_LOADING_ON:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_LOADING_OFF:
            return {
                ...state,
                isLoading: false
            };
        case GET_LOGIN_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_LOGIN_ERROR:
            return {
                ...state,
                error: null
            }
        case REMOVE_UTENTE_CORRENTE:
            return {
                ...state,
                userData: {

                },
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true
            };
        case LOGIN_SUCCESS_RESET:
            return {
                ...state,
                success: false
            };
        default:
            return state;
    }
};

export default loginReducer;