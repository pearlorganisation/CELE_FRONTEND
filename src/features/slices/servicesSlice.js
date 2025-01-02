import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllServices } from "../actions/servicesAction";

const initialState = {
  loading: false,
  services: [],
  paginate: {},
  error: null,
  success: false,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllServices.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getAllServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload.data;
        state.paginate = action.payload.pagination;
        state.success = true;
      })

      .addCase(getAllServices.rejected, (state, action) => {
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

export default servicesSlice.reducer;
