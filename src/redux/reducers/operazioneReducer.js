import { POST_OPERAZIONE } from "../actions";

const initialState = {
    operazione: {
        
      }
};

const operazioneReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_OPERAZIONE:
            return {
                ...state,
                operazione:
                    action.payload
              }
        default:
            return state;
    }
};

export default operazioneReducer;