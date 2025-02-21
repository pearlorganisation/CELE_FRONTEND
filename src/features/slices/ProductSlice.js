import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/productAction";



const initialState = {
    loading: false,
    products: [],
    product: {},
    error: null,
    success: false,}
const ProductSlice=createSlice({
    name: "product",
    initialState,
    reducers: {},
extraReducers:(builder)=>{
    builder

      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload      
        state.success = true;
      })

      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        toast.error(`Error: ${action.payload}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })


})
}
})

export default ProductSlice.reducer;