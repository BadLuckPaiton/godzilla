import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../playground/counterslice";
import userReducer  from "../playground/userslice";


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    user:userReducer
  },

});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
