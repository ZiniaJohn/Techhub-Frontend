import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import teacher from "../../Images/teacherform.jpg";
import { useNavigate } from "react-router-dom";
import {
  registerTeacher,
  reset,
} from "../../redux/reducers/Teacher/teacherslice.js";

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    universityEmail: "",
    teacherCard: null,
    additionalDocument: null,
  });

  const [teacherCardPreview, setTeacherCardPreview] = useState("");
  const [additionalDocumentPreview, setAdditionalDocumentPreview] =
    useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, errorMessage, successMessage } =
    useSelector((state) => state.teacher);

  useEffect(() => {
    if (isSuccess) {
      toast.success(successMessage);
      dispatch(reset());
      navigate("/thank-you");
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(reset());
    }
  }, [isSuccess, isError, successMessage, errorMessage, dispatch, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;

    if (name === "teacherCard") {
      setFormData({ ...formData, teacherCard: file });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setTeacherCardPreview(fileReader.result);
      };
    } else if (name === "additionalDocument") {
      setFormData({ ...formData, additionalDocument: file });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setAdditionalDocumentPreview(fileReader.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.universityEmail) {
      return toast.error("University email is required.");
    }
    if (!formData.teacherCard) {
      return toast.error("Teacher card is required.");
    }
    if (!formData.additionalDocument) {
      return toast.error("Additional university document is required.");
    }

    // Ensure FormData is passed directly
    console.log(formData);
    dispatch(registerTeacher(formData));
  };

  return (
<div
  className="container"
  style={{ marginTop: "200px", paddingBottom: "50px" }}
>
  <div className="d-flex vh-100">
    <div className="w-40 d-none d-md-block">
      <img
        src={teacher}
        className="img-fluid"
        alt="Login Illustration"
        style={{
          objectFit: "cover",
          width: "90%",
          height: "90%",
          marginTop: "-80px",
        }}
      />
    </div>
    <div className="w-50" style={{marginTop: "-50px"}}>
      <h2 className="text-center text-bold my-4" style={{color:"#A45EE9" ,fontWeight: "bold"}}>Teacher Registration Form</h2>
      <p style={{color:"#A45EE9", textAlign: "center"}}>
                Please provide your Credentials to become an Instructor at TechHub
                and teach the World.
              </p>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">University Email</label>
          <input
            type="email"
            className="form-control"
            name="universityEmail"
            value={formData.universityEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">University Teacher Card</label>
          {teacherCardPreview && (
            <img
              src={teacherCardPreview}
              alt="Teacher Card Preview"
              className="img-fluid rounded mb-2"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <input
            type="file"
            className="form-control"
            name="teacherCard"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Additional University Document</label>
          {additionalDocumentPreview && (
            <img
              src={additionalDocumentPreview}
              alt="Additional Document Preview"
              className="img-fluid rounded mb-2"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <input
            type="file"
            className="form-control"
            name="additionalDocument"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ backgroundColor: "#A45EE9", color: "white", borderRadius: "8px" }}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default TeacherForm;
