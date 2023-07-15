import { GET_CURRENT_CRYPTO_DATA, GET_SELECTED_CRYPTO, CURRENT_DATA_LOADING_ON, CURRENT_DATA_LOADING_OFF, GET_CURRENT_DATA_LOADING, CURRENT_DATA_ERROR, REMOVE_CURRENT_DATA_ERROR } from "../actions";

const initialState = {
    cryptoData: [],
    selectedCrypto: {

    },
    isLoading: false,
    error: null,
    success: false
};

const cryptoPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_CRYPTO_DATA:
            return {
                ...state,
                cryptoData:
                    action.payload
            }
        case GET_SELECTED_CRYPTO:
            return {
                ...state,
                selectedCrypto:
                    action.payload
            }
        case CURRENT_DATA_LOADING_ON:
            return {
                ...state,
                isLoading: true
            };
        case CURRENT_DATA_LOADING_OFF:
            return {
                ...state,
                isLoading: false
            };
        case GET_CURRENT_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case CURRENT_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_CURRENT_DATA_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export default cryptoPriceReducer;