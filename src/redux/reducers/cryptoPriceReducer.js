import { GET_CURRENT_CRYPTO_DATA, GET_SELECTED_CRYPTO, GET_CRYPTO_DATA_LOADING_ON,GET_CRYPTO_DATA_LOADING_OFF,GET_CRYPTO_DATA_LOADING,GET_CRYPTO_DATA_ERROR,REMOVE_CRYPTO_DATA_ERROR,CRYPTO_DATA_SUCCESS,CRYPTO_DATA_SUCCESS_RESET} from "../actions";

const initialState = {
    cryptoData: [],
    selectedCrypto: {

    },
    isLoading: false,
    error: null,
    success: false,
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
            case GET_CRYPTO_DATA_LOADING_ON:
                return {
                    ...state,
                    isLoading: true
                };
            case GET_CRYPTO_DATA_LOADING_OFF:
                return {
                    ...state,
                    isLoading: false
                };
            case GET_CRYPTO_DATA_LOADING:
                return {
                    ...state,
                    isLoading: action.payload
                };
            case GET_CRYPTO_DATA_ERROR:
                return {
                    ...state,
                    error: action.payload
                };
            case REMOVE_CRYPTO_DATA_ERROR:
                return {
                    ...state,
                    error: null
                }
            case CRYPTO_DATA_SUCCESS:
                return {
                    ...state,
                    success: true
                };
            case CRYPTO_DATA_SUCCESS_RESET:
                return {
                    ...state,
                    success: false
                };
        default:
            return state;
    }
};

export default cryptoPriceReducer;