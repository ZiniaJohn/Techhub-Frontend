import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../../components/AdminComponents/Sidebar";
import RequestsPage from "../../components/AdminComponents/RequestPage/RequestPage";

const AdminPanelRequests = () => {
  
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Row>
        <Col md={2} className="p-0" style={{ minHeight: "100vh" }}>
          <Sidebar />
        </Col>
        <Col md={10} className="py-3 px-4">
          <RequestsPage />
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelRequests;
