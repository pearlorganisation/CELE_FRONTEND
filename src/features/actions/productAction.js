import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";



export const getAllProducts = createAsyncThunk(
    "/get/products",async(_,{rejectWithValue})=>{
        try{
            const config={
                headers:{
                    "content-Type":"application/json"
                }
            }
            const {data}= await axiosInstance.get(`/api/v1/products`,config)
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
    