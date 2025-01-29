import authReducer from "../features/slices/authSlice";
import userReducer from "../features/slices/userSlice";
import contactReducer from "../features/slices/contactSlice";
import obituaryReducer from "../features/slices/obituarySlice";
import servicesReducer from "../features/slices/servicesSlice";
import reviewsReducer from "../features/slices/reviewsSlice.js";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import emailReducer from "./slices/Notification.js";
import candlereducer from "./slices/candleSlice.js"
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
  reviews: reviewsReducer,
  email: emailReducer,
  candle:candlereducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
