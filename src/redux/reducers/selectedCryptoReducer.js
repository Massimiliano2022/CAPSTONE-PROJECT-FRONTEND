import { GET_SELECTED_CRYPTO} from "../actions";

const initialState = {
    selectedCrypto: {

    },
};

const selectedCryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SELECTED_CRYPTO:
            return {
                ...state,
                selectedCrypto:
                    action.payload
            }
        default:
            return state;
    }
};

export default selectedCryptoReducer;