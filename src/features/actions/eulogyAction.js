import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAlleulogy = createAsyncThunk(
        "/api/v1/eulogy",async(_,{rejectWithValue})=>{
            try{
                const config={
                    headers:{
                        "content-Type":"application/json"
                    }
                }
                const {data}= await axiosInstance.get(`/api/v1/eulogy`,config)
                return data
            }catch(error){
                if(error.response && error.response.data.message){
                    return rejectWithValue(error.response.data.message)
                }
                else{
                    return rejectWithValue(error.message)
                }
            }
  
        })
        

        
        export const CreateEulogy = createAsyncThunk(
            "eulogy/create",
            async (eulogyData, { rejectWithValue }) => { // Accept eulogyData as an argument
                try {
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    };
                    const { data } = await axiosInstance.post(`/api/v1/eulogy`, eulogyData, config); // Pass eulogyData
                    return data;
                } catch (error) {
                    return rejectWithValue(
                        error.response?.data?.message || error.message
                    );
                }
            }
        );
        