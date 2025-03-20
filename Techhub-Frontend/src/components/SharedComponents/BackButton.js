import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <Button
  variant="primary"
  style={{
    background: "linear-gradient(135deg, #007bff, #0056b3)",
    border: "none",
    color: "white",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "8px",
  }}
  onClick={() => navigate(-1)}
  onMouseOver={(e) => {
    e.target.style.background = "#0056b3";
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
  }}
  onMouseOut={(e) => {
    e.target.style.background = "linear-gradient(135deg, #007bff, #0056b3)";
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  }}
>
  <BiArrowBack style={{ marginRight: "8px" }} />
  Back
</Button>
    </div>
  );
};

export default BackButton;
