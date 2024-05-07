import { configureStore } from "@reduxjs/toolkit";
import favoriteCompanyReducer from "../reducers";

const store = configureStore({
  reducer: favoriteCompanyReducer,
});

export default store;
