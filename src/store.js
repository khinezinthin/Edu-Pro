import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./route/NavSlice";

export const store = configureStore({
  reducer: {
    navSlice: NavSlice,
  },
});
