import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice.js";
import navbarSlice from './../features/navbar/navbarSlice.js';


export const store = configureStore({
    reducer: {
        productsReducer: productsSlice, 
        navbarReducer: navbarSlice,     
       
    }
})
