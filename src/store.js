import { configureStore } from "@reduxjs/toolkit";
// import postReducer from './libs/postSlice';
import counterReducer from './libs/count'

export const store = configureStore({
   reducer: {
      counter: counterReducer,
   },
})