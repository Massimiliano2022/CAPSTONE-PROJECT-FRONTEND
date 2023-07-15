import { GET_SELECTED_CRYPTO, GET_SELECTED_CRYPTO_LOADING_ON, GET_SELECTED_CRYPTO_LOADING_OFF, GET_SELECTED_CRYPTO_LOADING, GET_SELECTED_CRYPTO_ERROR, REMOVE_SELECTED_CRYPTO_ERROR, SELECTED_CRYPTO_SUCCESS, SELECTED_CRYPTO_SUCCESS_RESET } from "../actions";

const initialState = {
    selectedCrypto: {

    },
    isLoading: false,
    error: null,
    success: false,
};

const selectedCryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SELECTED_CRYPTO:
            return {
                ...state,
                selectedCrypto:
                    action.payload
            }
        case GET_SELECTED_CRYPTO_LOADING_ON:
            return {
                ...state,
                isLoading: true
            };
        case GET_SELECTED_CRYPTO_LOADING_OFF:
            return {
                ...state,
                isLoading: false
            };
        case GET_SELECTED_CRYPTO_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case GET_SELECTED_CRYPTO_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_SELECTED_CRYPTO_ERROR:
            return {
                ...state,
                error: null
            }
        case SELECTED_CRYPTO_SUCCESS:
            return {
                ...state,
                success: true
            };
        case SELECTED_CRYPTO_SUCCESS_RESET:
            return {
                ...state,
                success: false
            };
        default:
            return state;
    }
};

export default selectedCryptoReducer;