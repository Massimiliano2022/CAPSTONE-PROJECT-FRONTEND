import { GET_UTENTE_CORRENTE, REMOVE_UTENTE_CORRENTE } from "../actions";

const initialState = {
    userData: {
        
      }
};

const utenteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UTENTE_CORRENTE:
            return {
                ...state,
                userData:
                    action.payload
              }
              case REMOVE_UTENTE_CORRENTE:
                const { userData, ...newState } = state;
                return newState;
        default:
            return state;
    }
};

export default utenteReducer;