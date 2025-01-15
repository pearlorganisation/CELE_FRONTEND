import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllReviews, getReviewsById } from "../actions/reviewsActions";

const initialState = {
  loading: false,
  reviews: [],
  review: {},
  paginate: {},
  error: null,
  success: false,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.data;
        state.paginate = action.payload.pagination;
        state.success = true;
      })

      .addCase(getAllReviews.rejected, (state, action) => {
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

      .addCase(getReviewsById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getReviewsById.fulfilled, (state, action) => {
        state.loading = false;
        state.review = action.payload;
        state.success = true;
      })

      .addCase(getReviewsById.rejected, (state, action) => {
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

export default reviewsSlice.reducer;
