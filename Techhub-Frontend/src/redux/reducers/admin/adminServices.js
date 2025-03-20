import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// Fetch Admin Analytics
const getAdminAnalytics = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${API_URL}/api/v1/analytics/admin`, config);

  return data;
};

// Fetch All Users
const getAdminUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/users`,
    config
  );

  return data;
};

// Fetch Single User
const getAdminSingleUser = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/user/${id}`,
    config
  );

  return data;
};

// Fetch All Courses
const getAdminCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/courses`,
    config
  );

  return data;
};

// Fetch Single Course
const getAdminSingleCourse = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/course/${id}`,
    config
  );

  return data;
};

// Fetch All Teachers
const getAdminTeachers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${API_URL}/api/v1/teacher/all`, config);

  return data;
};

// Update Teacher Status
const updateTeacherStatus = async ({ teacherId, status, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/api/v1/teacher/status/${teacherId}`,
    { status },
    config
  );

  return data;
};

const adminService = {
  getAdminAnalytics,
  getAdminUsers,
  getAdminSingleUser,
  getAdminCourses,
  getAdminSingleCourse,
  getAdminTeachers, // Added function to fetch all teachers
  updateTeacherStatus,
};

export default adminService;
