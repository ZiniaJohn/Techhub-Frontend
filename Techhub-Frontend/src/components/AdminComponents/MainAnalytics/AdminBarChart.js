import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const AdminBarChart = () => {
  const { analytics } = useSelector((state) => state.admin);
  const colors = ["#687EF0", "#F9A01C", "#45B6FE"];

  const courses = analytics.singleCourseEnrollments.map(
    (course) => course.name
  );

  const data = {
    labels: courses,
    datasets: [
      {
        label: "No of Students / Course",
        data: analytics.singleCourseEnrollments.map(
          (course) => course.totalEnrollments
        ),
        backgroundColor: courses.map(
          (course, index) => colors[index % colors.length]
        ),
        borderColor: courses.map(
          (course, index) => colors[index % colors.length]
        ),
        borderWidth: 2,
        barPercentage: 0.5,
        categoryPercentage: 1.0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "normal",
          },
          color: "#6c757d",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6c757d",
          font: {
            size: 10,
            weight: "normal",
          },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "#6c757d",
          font: {
            size: 12,
            weight: "normal",
          },
        },
      },
    },
  };

  return (
    <Card className="p-4 shadow-sm rounded-lg" style={{ height: "100%" }}>
      <h4 style={{ marginBottom: "10px", color: "#353A40", fontWeight: "bold" }}>
        STUDENT ENROLLMENT ANALYSIS
      </h4>
      <div style={{ height: "400px" }}>
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default AdminBarChart;
