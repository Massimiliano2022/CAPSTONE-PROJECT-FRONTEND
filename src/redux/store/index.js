import storage from "redux-persist/lib/storage";

import loginReducer from "../reducers/loginReducer";
import cryptoPriceReducer from "../reducers/cryptoPriceReducer";
import monthlyCryptoReducer from "../reducers/monthlyCryptoReducer";
import walletReducer from "../reducers/walletReducer";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import registraUtenteReducer from "../reducers/registraUtenteReducer";
import selectedCryptoReducer from "../reducers/selectedCryptoReducer";
import operazioneReducer from "../reducers/operazioneReducer";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['registraUtente','currentCryptoData','selectedCryptoData','monthlyCryptoData','walletCorrente','effettuaOperazione']
  };

const rootReducer = combineReducers({
    utenteCorrente:loginReducer,
    registraUtente:registraUtenteReducer,
    currentCryptoData:cryptoPriceReducer,
    selectedCryptoData:selectedCryptoReducer,
    monthlyCryptoData:monthlyCryptoReducer,
    walletCorrente:walletReducer,
    effettuaOperazione:operazioneReducer
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
  });
  
  export const persistor = persistStore(store);