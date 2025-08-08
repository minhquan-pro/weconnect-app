import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import rootApi from "../services/rootApi";
import snackbarReducer from "./slices/snackbarSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(rootApi.middleware);
  },
});

export default store;
