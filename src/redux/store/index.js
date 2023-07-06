import loginReducer from "../reducers/loginReducer";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cryptoPriceReducer from "../reducers/cryptoPriceReducer";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['currentCryptoData']
  };

const rootReducer = combineReducers({
    utenteCorrente:loginReducer,
    currentCryptoData:cryptoPriceReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
  });
  
  export const persistor = persistStore(store);