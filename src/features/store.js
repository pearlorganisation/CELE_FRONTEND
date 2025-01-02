import authReducer from "../features/slices/authSlice";
import userReducer from "../features/slices/userSlice";
import contactReducer from "../features/slices/contactSlice";
import obituaryReducer from "../features/slices/obituarySlice";
import servicesReducer from "../features/slices/servicesSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "CELE_WEBSITE",
  storage,
};

// Combine reducers
const combinedReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  contact: contactReducer,
  obituaries: obituaryReducer,
  services: servicesReducer,
});

// Apply persistReducer to the combined reducer
const persistedReducer = persistReducer(persistConfig, combinedReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
