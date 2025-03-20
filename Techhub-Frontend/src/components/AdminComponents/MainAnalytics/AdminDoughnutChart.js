

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Card } from "react-bootstrap";

const AdminDoughnutChart = () => {
  const { analytics } = useSelector((state) => state.admin);

  const data = {
    labels: ["Total Courses", "Enrolled Courses", "Not Enrolled Courses"],
    datasets: [
      {
        label: "No of Courses",
        data: [
          analytics.totalCourses,
          analytics.totalEnrolledCourses,
          analytics.totalNotEnrolledCourses,
        ],
        backgroundColor: ["#687EF0", "#45B6FE", "#F9A01C"],
        borderColor: ["#687EF0", "#45B6FE", "#F9A01C"],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10, // Reduce top padding
        bottom: 10,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 20,
          padding: 5, // Reduce padding between legend items
          font: {
            size: 12,
          },
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          size: 14,
          weight: "bold",
        },
        formatter: (value) => {
          return value > 0 ? `${value} course` : "";
        },
      },
    },
    cutout: "50%",
    animation: {
      animateScale: true,
    },
  };

  return (
    <Card className="p-3 shadow-sm rounded-lg" style={{ height: "100%" }}>
      <h4 style={{ marginBottom: "10px", color: "#353A40", fontWeight: "bold" }}>
        COURSE ANALYSIS
      </h4>
      <div style={{ height: "400px" }}>
        <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />
      </div>
    </Card>
  );
};

export default AdminDoughnutChart;
