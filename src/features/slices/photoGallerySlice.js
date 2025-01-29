import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  guestbook: {},
  error: null,
  success: false,
};

const guestGallerySlice = createSlice({
  name: "guestGalleries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllguestGalleries.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getAllguestGalleries.fulfilled, (state, action) => {
        state.loading = false;
        state.obituaries = action.payload.data;
        state.paginate = action.payload.pagination;
        state.success = true;
      })

      .addCase(getAllguestGalleries.rejected, (state, action) => {
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
