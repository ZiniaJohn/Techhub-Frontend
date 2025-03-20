import ImageCarousel from "./ImageCarousel";
import Container from "react-bootstrap/Container";
import pcBoy from "../../Images/brainstorm-meeting.jpg";
import { Navigate, useNavigate } from "react-router";

const HomeCarousel = () => {
  // Inline styles
  const navigate=useNavigate();
  const sectionStyle = {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const textContainerStyle = {
    flex: 1,
    textAlign: "left",
    paddingRight: "30px",
    paddingLeft: "20px",
    paddingTop: "10px",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#000000", // Changed to Black
  };

  const highlightStyle = {
    color: "#000000", // Changed to Black
    fontWeight: "bold",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#000000", // Changed to Black
    fontWeight: "500", // Medium Font Weight
    marginTop: "10px",
  };

  return (
    <Container fluid style={sectionStyle}>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>
            Now learning from anywhere, and build your{" "}
            <span style={highlightStyle}>bright career.</span>
          </h2>
          <p style={paragraphStyle}>
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <button 
  style={{ 
    padding: "10px 20px", 
    fontSize: "1rem", 
    borderRadius: "5px",
    backgroundColor: "#007bff",  // Bootstrap Primary Blue
    color: "#ffffff",  // White text
    border: "none",
    cursor: "pointer"
  }} 
  onClick={() => navigate("/Register")}  // Change the path accordingly
>
  Start A Journey
</button> 
        </div>
        <ImageCarousel text="laptop image" imagePath={pcBoy} />
      </div>
    </Container>
  );
};

export default HomeCarousel;
