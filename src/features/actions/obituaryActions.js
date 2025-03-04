import { createAsyncThunk } from "@reduxjs/toolkit"; // Adjust the path to your axios instance
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAllObituaries = createAsyncThunk(
  "obituaries/get-all", // Action type
  async (page, { rejectWithValue }) => {
    console.log(page);
    try {
      const { data } = await axiosInstance.get(`/api/v1/obituaries`, {
        params: { page }, // ✅ Correct way to pass query parameters
        headers: {
          "Content-Type": "application/json",
        },
      });

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

export const getObituariesById = createAsyncThunk(
  "obituaries/get-single", // Action type
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all subjects
      const { data } = await axiosInstance.get(
        `/api/v1/obituaries/${id}`,
        config
      ); // Adjust endpoint for fetching all subjects

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
