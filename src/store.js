import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import ticket from './slices/ticketSlice';
import cinemas from './slices/cinemasSlice';
const store = configureStore({
  reducer: {
    auth,
    ticket,
    cinemas,
  },
});

export default store;
