
import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../components/AdminComponents/Sidebar";
import { getAdminCourses } from "../../redux/reducers/admin/adminSlice";
import Loader from "../../components/SharedComponents/Loader";
import CoursesTable from "../../components/AdminComponents/AllCourses/CoursesTable";

const AdminPanelCourses = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminCourses());
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
          {isLoading ? <Loader /> : <CoursesTable />}
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelCourses;


