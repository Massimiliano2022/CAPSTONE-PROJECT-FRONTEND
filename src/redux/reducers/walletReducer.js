import { GET_WALLET_CORRENTE,REMOVE_WALLET_UTENTE_CORRENTE } from "../actions";

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