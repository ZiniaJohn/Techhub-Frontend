import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminServices";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  successMessage: "",
  analytics: null,
  users: [],
  user: null,
  courses: [],
  course: null,
  teachers: [], // To store all teachers with their statuses
};

// Get Admin Analytics
export const getAdminAnalytics = createAsyncThunk(
  "admin/analytics",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.getAdminAnalytics(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Admin Users
export const getAdminUsers = createAsyncThunk(
  "admin/users",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.getAdminUsers(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Admin Single User
export const getAdminSingleUser = createAsyncThunk(
  "admin/singleUser",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.getAdminSingleUser(token, id);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Admin All Courses
export const getAdminCourses = createAsyncThunk(
  "admin/courses",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.getAdminCourses(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Admin Single Course
export const getAdminSingleCourse = createAsyncThunk(
  "admin/singleCourse",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.getAdminSingleCourse(token, id);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Teacher Status
export const updateTeacherStatus = createAsyncThunk(
  "admin/updateTeacherStatus",
  async ({ teacherId, status }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.updateTeacherStatus({
        teacherId,
        status,
        token,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Teachers with Status
export const getTeachersByStatus = createAsyncThunk(
  "admin/teachers",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.getAdminTeachers(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = "";
      state.successMessage = "";
      state.teachers = [];
      state.analytics = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdminAnalytics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminAnalytics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.analytics = action.payload.analytics;
      })
      .addCase(getAdminAnalytics.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAdminUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload.users;
      })
      .addCase(getAdminUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAdminSingleUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminSingleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
      })
      .addCase(getAdminSingleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAdminCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = action.payload.courses;
      })
      .addCase(getAdminCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAdminSingleCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminSingleCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.course = action.payload.course;
      })
      .addCase(getAdminSingleCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(updateTeacherStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTeacherStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(updateTeacherStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getTeachersByStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachersByStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teachers = action.payload.teachers; // Store the fetched teachers
      })
      .addCase(getTeachersByStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
