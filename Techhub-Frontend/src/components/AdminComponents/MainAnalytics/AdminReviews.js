
import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Rating from "../../SharedComponents/Rating";

const AdminReviews = () => {
  const { analytics } = useSelector((state) => state.admin);

  return (
    <div>
      <h3
        className="text-center"
        style={{
          color: "#687EF0",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "10px",
          backgroundColor: "#f0f4ff",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        LATEST REVIEWS FROM STUDENTS
      </h3>

      <Table
        striped
        bordered
        hover
        responsive
        className="shadow-sm rounded mt-4"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <thead className="bg-light">
          <tr>
            <th style={{ fontWeight: "bold", color: "#333", padding: "15px" }}>Student Name</th>
            <th style={{ fontWeight: "bold", color: "#333", padding: "15px" }}>Course Name</th>
            <th style={{ fontWeight: "bold", color: "#333", padding: "15px" }}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {analytics.reviews.map((review) => (
            <tr key={review._id} className="align-middle">
              <td className="d-flex align-items-center" style={{ padding: "20px" }}>
                <img
                  src={review.review.user.avatar.url}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: "50%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    marginRight: "10px",
                  }}
                  alt="User Avatar"
                />
                <span style={{ fontSize: "1rem", color: "#333" }}>{review.review.user.name}</span>
              </td>
              <td style={{ fontSize: "1rem", color: "#333", padding: "20px" }}>{review.title}</td>
              <td style={{ padding: "20px" }}>
                <div className="d-flex align-items-center">
                  <Rating value={review.review.rating} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminReviews;
