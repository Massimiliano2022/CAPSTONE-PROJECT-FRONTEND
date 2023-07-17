import { GET_LISTA_OPERAZIONI } from "../actions";

const initialState = {
    listaOperazioni: [],
};

const cryptoPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LISTA_OPERAZIONI:
            return {
                ...state,
                listaOperazioni:
                    action.payload
            }
        default:
            return state;
    }
};

export default cryptoPriceReducer;