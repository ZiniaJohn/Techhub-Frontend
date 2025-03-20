import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = ({ status = "applied" }) => {
  const navigate = useNavigate();

  // Define status levels
  const statusLevels = ["none", "applied", "rejected", "approved"];
  const currentLevel = statusLevels.indexOf(status);

  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <div className="card shadow p-4">
        <h1 className="text-success">Thank You for Your Submission!</h1>
        <p className="mt-4" style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Dear Teacher,
          <br />
          Thank you for taking the time to submit your application to join our
          platform as a verified instructor. Your application has been received
          successfully and is now under review by our administrative team.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Once your application is reviewed, you will receive an email at the
          address you provided, notifying you of the outcome. We are excited to
          have you onboard and look forward to seeing your contributions in
          enhancing the learning experience for students across the platform.
        </p>

        {/* Status Bar */}
        <div className="mt-5">
          <h4>Application Status</h4>
          <div className="progress" style={{ height: "30px" }}>
            {statusLevels.map((level, index) => (
              <div
                key={level}
                className={`progress-bar ${
                  index <= currentLevel ? "bg-success" : "bg-light"
                }`}
                style={{
                  width: `${100 / statusLevels.length}%`,
                  fontSize: "14px",
                  color: index <= currentLevel ? "white" : "black",
                }}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </div>
            ))}
          </div>
          <p className="mt-3" style={{ fontSize: "18px", color: "gray" }}>
            Current Status:{" "}
            <strong className="text-primary">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </strong>
          </p>
        </div>

        <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
