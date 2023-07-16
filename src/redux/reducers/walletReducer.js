import { GET_WALLET_CORRENTE, GET_WALLET_CORRENTE_LOADING_ON, GET_WALLET_CORRENTE_LOADING_OFF, GET_WALLET_CORRENTE_LOADING, GET_WALLET_CORRENTE_ERROR, REMOVE_WALLET_CORRENTE_ERROR, SELECTED_WALLET_CORRENTE_SUCCESS, SELECTED_WALLET_CORRENTE_SUCCESS_RESET, REMOVE_WALLET_UTENTE_CORRENTE } from "../actions";

const initialState = {
    wallet: {

    }
};

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WALLET_CORRENTE:
            return {
                ...state,
                wallet:
                    action.payload
            }
        case GET_WALLET_CORRENTE_LOADING_ON:
            return {
                ...state,
                isLoading: true
            };
        case GET_WALLET_CORRENTE_LOADING_OFF:
            return {
                ...state,
                isLoading: false
            };
        case GET_WALLET_CORRENTE_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case GET_WALLET_CORRENTE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_WALLET_CORRENTE_ERROR:
            return {
                ...state,
                error: null
            }
        case SELECTED_WALLET_CORRENTE_SUCCESS:
            return {
                ...state,
                success: true
            };
        case SELECTED_WALLET_CORRENTE_SUCCESS_RESET:
            return {
                ...state,
                success: false
            };
        case REMOVE_WALLET_UTENTE_CORRENTE:
            return {
                ...state,
                wallet: {

                }
            }
        default:
            return state;
    }
};

export default walletReducer;