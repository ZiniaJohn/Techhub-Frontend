import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// Register Teacher
export const registerTeacher = async ({ formData, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  console.log("formdata", formData);
  const { data } = await axios.post(
    `${API_URL}/api/v1/teacher/register`,
    formData,
    config
  );
  return data;
};

// Get Teacher Details
export const getTeacherDetails = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/api/v1/teacher/details`, config);
  return data;
};

// Get Teacher Status
export const getTeacherStatus = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/api/v1/teacher/status`, config);
  return data;
};

const teacherService = {
  registerTeacher,
  getTeacherDetails,
  getTeacherStatus, // Added for retrieving teacher status
};

export default teacherService;
