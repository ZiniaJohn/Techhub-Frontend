
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAdminSingleUser } from "../../redux/reducers/admin/adminSlice";

import Sidebar from "../../components/AdminComponents/Sidebar";
import Loader from "../../components/SharedComponents/Loader";
import SingleUser from "../../components/AdminComponents/SingleUser/SingleUser";

const AdminPanelSingleUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminSingleUser(id));
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
          {/* User Details */}
          <div className="my-4">
            {isLoading || !user ? <Loader /> : <SingleUser />}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelSingleUser;
