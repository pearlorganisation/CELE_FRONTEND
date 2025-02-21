import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CreateEulogy, getAlleulogy } from "../actions/eulogyAction.js";

const initialState = {
    loading: false,
    success: false,
    error: null,
    eulogy: null,
};

const eulogySlice = createSlice({
    name: "eulogy",
    initialState,
    reducers: {
        resetEulogyState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
            state.eulogy = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle Get All Eulogies
            .addCase(getAlleulogy.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(getAlleulogy.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.eulogy = action.payload;
                state.success = true;
            })
            .addCase(getAlleulogy.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
                state.success = false;
                toast.error(`Error: ${state.error}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
            })

            // Handle Create Eulogy (Ensure these cases are NOT duplicated)
            .addCase(CreateEulogy.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(CreateEulogy.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.eulogy = action.payload;
                state.success = true;
            })
            .addCase(CreateEulogy.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
                state.success = false;
                toast.error(`Error: ${state.error}`, {
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

export const { resetEulogyState } = eulogySlice.actions;
export default eulogySlice.reducer;
