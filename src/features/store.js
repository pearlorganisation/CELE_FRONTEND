import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../features/slices/authSlice";
import userReducer from "../features/slices/userSlice";
import contactReducer from "../features/slices/contactSlice";
import obituaryReducer from "../features/slices/obituarySlice";
import servicesReducer from "../features/slices/servicesSlice";
import reviewsReducer from "../features/slices/reviewsSlice.js";
import emailReducer from "./slices/Notification.js";
import candleReducer from "./slices/candleSlice.js";
import eulogyReducer from "./slices/eulogySlice.js";
import cartReducer from "./slices/CartSlice.js";
import productReducer from "./slices/ProductSlice.js";

const persistConfig = {
  key: "CELE_WEBSITE",
  storage,
  whitelist: ["auth", "cart", "product"], // Persist only necessary reducers
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
  candle: candleReducer,
  eulogy: eulogyReducer,
  cart: cartReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
