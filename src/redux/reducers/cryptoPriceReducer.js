import { GET_CURRENT_CRYPTO_DATA } from "../actions";

const initialState = {
    cryptoData: []
};

const cryptoPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_CRYPTO_DATA:
            return {
                ...state,
                cryptoData:
                    action.payload
              }
        default:
            return state;
    }
};

export default cryptoPriceReducer;