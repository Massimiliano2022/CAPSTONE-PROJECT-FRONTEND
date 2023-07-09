import { GET_WALLET_UTENTE_CORRENTE } from "../actions";

const initialState = {
    wallet: {
        
    }
};

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WALLET_UTENTE_CORRENTE:
            return {
                ...state,
                wallet:
                    action.payload
              }
        default:
            return state;
    }
};

export default walletReducer;