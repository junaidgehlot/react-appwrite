import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../store/AuthSlice'


const store = configureStore({
    reducer: authReducer
});

export default store;