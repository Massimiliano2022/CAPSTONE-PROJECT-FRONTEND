import { GET_MONTHLY_CRYPTO_DATA, GET_MONTHLY_CRYPTO_DATA_LOADING_ON, GET_MONTHLY_CRYPTO_DATA_LOADING_OFF, GET_MONTHLY_CRYPTO_DATA_LOADING, GET_MONTHLY_CRYPTO_DATA_ERROR, REMOVE_MONTHLY_CRYPTO_DATA_ERROR, MONTHLY_CRYPTO_DATA_SUCCESS, MONTHLY_CRYPTO_DATA_SUCCESS_RESET } from "../actions";

const initialState = {
    monthlyData: [],
    isLoading: false,
    error: null,
    success: false,
};

const monthlyCryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MONTHLY_CRYPTO_DATA:
            return {
                ...state,
                monthlyData:
                    action.payload
            }
        case GET_MONTHLY_CRYPTO_DATA_LOADING_ON:
            return {
                ...state,
                isLoading: true
            };
        case GET_MONTHLY_CRYPTO_DATA_LOADING_OFF:
            return {
                ...state,
                isLoading: false
            };
        case GET_MONTHLY_CRYPTO_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case GET_MONTHLY_CRYPTO_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_MONTHLY_CRYPTO_DATA_ERROR:
            return {
                ...state,
                error: null
            }
        case MONTHLY_CRYPTO_DATA_SUCCESS:
            return {
                ...state,
                success: true
            };
        case MONTHLY_CRYPTO_DATA_SUCCESS_RESET:
            return {
                ...state,
                success: false
            };
        default:
            return state;
    }
};

export default monthlyCryptoReducer;