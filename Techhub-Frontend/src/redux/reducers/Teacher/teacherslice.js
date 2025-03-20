import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import teacherService from "./teacherservice";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  successMessage: "",
  errorMessage: "",
  teacherDetails: null, // To store teacher details
  teacherStatus: null, // To store teacher status
};

// Register Teacher
export const registerTeacher = createAsyncThunk(
  "teacher/register",
  async (formData, thunkAPI) => {
    try {
      console.log("service", formData);
      const token = thunkAPI.getState().auth.user.token; // Get token from auth state
      return await teacherService.registerTeacher({ formData, token });
    } catch (error) {
      console.log("inslice", error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Teacher Details
export const getTeacherDetails = createAsyncThunk(
  "teacher/details",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token; // Get token from auth state
      return await teacherService.getTeacherDetails(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Teacher Status
export const getTeacherStatus = createAsyncThunk(
  "teacher/status",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token; // Get token from auth state
      return await teacherService.getTeacherStatus(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.successMessage = "";
      state.errorMessage = "";
      state.teacherDetails = null;
      state.teacherStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register Teacher
      .addCase(registerTeacher.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(registerTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.successMessage = "";
        state.errorMessage = action.payload;
      })

      // Get Teacher Details
      .addCase(getTeacherDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.teacherDetails = action.payload.teacher;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(getTeacherDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.teacherDetails = null;
      })

      // Get Teacher Status
      .addCase(getTeacherStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.teacherStatus = action.payload.status;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(getTeacherStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.teacherStatus = null;
      });
  },
});

export const { reset } = teacherSlice.actions;
export default teacherSlice.reducer;
