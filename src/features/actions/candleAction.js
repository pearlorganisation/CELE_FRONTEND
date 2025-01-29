import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getallCandle = createAsyncThunk(
  "candle/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(`/api/v1/candle`, config);
      return data; // Resolves and sends data to fulfilled case
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message); // Custom error message from server
      } else {
        return rejectWithValue(error.message); // General error
      }
    }
  }
);
