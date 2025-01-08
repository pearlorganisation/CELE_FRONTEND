import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";


export const sendEmail= createAsyncThunk(
  "/api/v1/send-email", // Action type
  async ({ to}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const {data}= await axiosInstance.post(
    "/api/v1/send-email",
        { to},
        config
      );

      return data.data; 
    } catch (error) {
 
      return rejectWithValue(
        error.response?.data?.message || "Failed to send email."
      );
    }
  }
);
