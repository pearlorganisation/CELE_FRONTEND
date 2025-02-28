import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllObituaries,
  getObituariesById,
} from "../actions/obituaryActions";

const initialState = {
  loading: false,
  obituaries: [],
  obituary: {},
  paginate: {},
  error: null,
  success: false,
};    

const obituarySlice = createSlice({
  name: "obituaries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllObituaries.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getAllObituaries.fulfilled, (state, action) => {
        state.loading = false;
        state.obituaries = action.payload.data;
        state.paginate = action.payload.pagination;
        state.success = true;
      })

      .addCase(getAllObituaries.rejected, (state, action) => {
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
        });
      })

      .addCase(getObituariesById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getObituariesById.fulfilled, (state, action) => {
        state.loading = false;
        state.obituary = action.payload;
        state.success = true;
      })

      .addCase(getObituariesById.rejected, (state, action) => {
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
        });
      });
  },
});

export default obituarySlice.reducer;
