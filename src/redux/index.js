//External Lib Import
import { configureStore } from "@reduxjs/toolkit";

//Internal Lib Import
import { apiService } from "./api";

import authReducer from "./features/auth.reducer";
import settingReducer from "./features/setting.reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    setting: settingReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export default store;
