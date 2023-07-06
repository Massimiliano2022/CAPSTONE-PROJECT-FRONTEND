import { GET_MONTHLY_CRYPTO_DATA } from "../actions";

const initialState = {
    monthlyData: []
};

const monthlyCryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MONTHLY_CRYPTO_DATA:
            return {
                ...state,
                monthlyData:
                    action.payload
              }
        default:
            return state;
    }
};

export default monthlyCryptoReducer;