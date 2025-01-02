import { createAsyncThunk } from "@reduxjs/toolkit"; // Adjust the path to your axios instance
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAllServices = createAsyncThunk(
  "services/get-all", // Action type
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all services
      const { data } = await axiosInstance.get(`/api/v1/services`, config); // Adjust endpoint for fetching all services

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

export const getServiceById = createAsyncThunk(
  "services/get-single", // Action type
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all subjects
      const { data } = await axiosInstance.get(
        `/api/v1/services/${id}`,
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
