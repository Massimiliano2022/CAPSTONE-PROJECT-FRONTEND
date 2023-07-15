import { GET_CURRENT_CRYPTO_DATA, GET_SELECTED_CRYPTO,CURRENT_DATA_LOADING_ON, CURRENT_DATA_LOADING_OFF, GET_CURRENT_DATA_LOADING, CURRENT_DATA_ERROR, REMOVE_CURRENT_DATA_ERROR} from "../actions";

const initialState = {
    cryptoData: [],
    selectedCrypto:{

    },
    isLoading: false,
    error: null,
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
            return{
                ...state,
                selectedCrypto:
                    action.payload
            }      
        default:
            return state;
    }
};

export default cryptoPriceReducer;