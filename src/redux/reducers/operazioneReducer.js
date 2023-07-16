import { ESEGUI_OPERAZIONE,  GET_OPERAZIONE_ERROR, REMOVE_OPERAZIONE_ERROR} from "../actions";

const initialState = {
    operazione: {

    },
    error: null,
};

const operazioneReducer = (state = initialState, action) => {
    switch (action.type) {
        case ESEGUI_OPERAZIONE:
            return {
                ...state,
                operazione:
                    action.payload
            }
        case GET_OPERAZIONE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_OPERAZIONE_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export default operazioneReducer;