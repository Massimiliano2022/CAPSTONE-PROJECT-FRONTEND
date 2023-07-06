import { GET_CURRENT_CRYPTO_DATA, GET_SELECTED_CRYPTO} from "../actions";

const initialState = {
    cryptoData: [],
    selectedCrypto:{

    },
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