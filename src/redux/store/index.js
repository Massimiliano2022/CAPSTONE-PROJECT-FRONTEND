import storage from "redux-persist/lib/storage";

import loginReducer from "../reducers/loginReducer";
import cryptoPriceReducer from "../reducers/cryptoPriceReducer";
import monthlyCryptoReducer from "../reducers/monthlyCryptoReducer";
import walletReducer from "../reducers/walletReducer";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['currentCryptoData','monthlyCryptoData']
  };

const rootReducer = combineReducers({
    utenteCorrente:loginReducer,
    currentCryptoData:cryptoPriceReducer,
    monthlyCryptoData:monthlyCryptoReducer,
    walletCorrente:walletReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
  });
  
  export const persistor = persistStore(store);