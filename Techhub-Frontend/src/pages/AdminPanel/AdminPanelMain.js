

import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import { getAdminAnalytics } from "../../redux/reducers/admin/adminSlice";
import Sidebar from "../../components/AdminComponents/Sidebar";
import TopCards from "../../components/AdminComponents/MainAnalytics/TopCards";
import AdminCharts from "../../components/AdminComponents/MainAnalytics/AdminCharts";
import Loader from "../../components/SharedComponents/Loader";
import AdminReviews from "../../components/AdminComponents/MainAnalytics/AdminReviews";

const AdminPanelMain = () => {
  const dispatch = useDispatch();
  const { isLoading, analytics } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminAnalytics());
  }, []);

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
          <h3 className="text-center" style={{ color: "#556cd6", fontSize: "2rem", fontWeight: "bold", padding: "10px", backgroundColor: "#f0f4ff", borderRadius: "10px" }}>
            DASHBOARD ANALYTICS
          </h3>
          {isLoading || !analytics ? (
            <Loader />
          ) : (
            <>
              <Row className="my-4">
                <TopCards />
              </Row>

              <Row className="my-4">
              
                <AdminCharts />
              </Row>

              <div className="my-4">
                <AdminReviews />
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelMain;



