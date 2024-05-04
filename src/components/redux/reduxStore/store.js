import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../Slice/authSlice";
import menu from "../Slice/menu";
const store = configureStore({
  reducer: {
    auth: authSlice,
    menu: menu,
  },
});
const { dispatch } = store;

export { store, dispatch };
