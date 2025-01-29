import { createSlice } from "@reduxjs/toolkit";
import { getallCandle } from "../actions/candleAction";

const initialState = {
  loading: false,
  candle: [],
  error: null,
  success: false,
};

const candleSlice = createSlice({
  name: "candle",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getallCandle.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getallCandle.fulfilled, (state, action) => {
        state.loading = false;
        state.candle = action.payload;
        state.success = true;
      })
      .addCase(getallCandle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;

        // Toast for displaying error
        toast.error(`Error: ${action.payload}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      });
  },
});

export default candleSlice.reducer;
