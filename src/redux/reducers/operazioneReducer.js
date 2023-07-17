import { ESEGUI_OPERAZIONE, OPERAZIONE_LOADING_ON, OPERAZIONE_LOADING_OFF, GET_OPERAZIONE_LOADING, GET_OPERAZIONE_ERROR, REMOVE_OPERAZIONE_ERROR, OPERAZIONE_SUCCESS, OPERAZIONE_SUCCESS_RESET } from "../actions";

const initialState = {
    operazione: null,
    isLoading: false,
    error: null,
    success: false,
};

const operazioneReducer = (state = initialState, action) => {
    switch (action.type) {
        case ESEGUI_OPERAZIONE:
            return {
                ...state,
                operazione:
                    action.payload
            }
        case OPERAZIONE_LOADING_ON:
            return {
                ...state,
                isLoading: true
            };
        case OPERAZIONE_LOADING_OFF:
            return {
                ...state,
                isLoading: false
            };
        case GET_OPERAZIONE_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
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
        case OPERAZIONE_SUCCESS:
            return {
                ...state,
                success: true
            };
        case OPERAZIONE_SUCCESS_RESET:
            return {
                ...state,
                operazione: null,
                isLoading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};

export default operazioneReducer;