import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    value: [],
    error: ""
}

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await axios.get("https://dummyjson.com/products");
 
    return response.data.products;
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload; 
        })

        builder.addCase(getProducts.rejected, (state, action) => {
            state.error = "Bad fetching!"
        })
    }
});

export default productsSlice.reducer;