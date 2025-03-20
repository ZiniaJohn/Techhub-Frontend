import React from "react";
import { Card, Col } from "react-bootstrap";
import AdminBarChart from "./AdminBarChart";
import AdminDoughnutChart from "./AdminDoughnutChart";

const AdminCharts = () => {
  return (
    <>
      <Col md={7}>
        <Card className="p-3 h-100">
        
          <AdminBarChart />
        </Card>
      </Col>
      <Col md={5}>
        <Card className="p-3 h-100">
       
          <AdminDoughnutChart />
        </Card>
      </Col>
    </>
  );
};

export default AdminCharts;


