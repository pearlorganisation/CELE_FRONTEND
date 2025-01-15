import { createAsyncThunk } from "@reduxjs/toolkit"; // Adjust the path to your axios instance
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAllReviews = createAsyncThunk(
  "reviews/get-all", // Action type
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all subjects
      const { data } = await axiosInstance.get(`/api/v1/reviews`, config); // Adjust endpoint for fetching all subjects

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getReviewsById = createAsyncThunk(
  "reviews/get-single", // Action type
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all subjects
      const { data } = await axiosInstance.get(`/api/v1/reviews/${id}`, config); // Adjust endpoint for fetching all subjects

      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
