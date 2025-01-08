import { createSlice } from "@reduxjs/toolkit";
import { sendEmail } from "../actions/obituarynotification";


const emailSlice = createSlice({
    name: "email",
    initialState: {
      loading: false,
      success: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(sendEmail.pending, (state) => {
          state.loading = true;
          state.success = false;
          state.error = null;
        })
        .addCase(sendEmail.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.error = null;
        })
        .addCase(sendEmail.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload || "Something went wrong";
        });
    },
  });
  
  export default emailSlice.reducer;
  