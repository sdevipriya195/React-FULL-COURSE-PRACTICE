// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counters from './counterSlice';


const store = configureStore({
  reducer: {
    counter: counters
  }
});

export default store;
