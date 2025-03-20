
import React from "react";
import { Card, Col } from "react-bootstrap";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useSelector } from "react-redux";

import { PiUsersDuotone } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const TopCards = () => {
  const { analytics } = useSelector((state) => state.admin);

  const cardStyle = {
    height: "120px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      <Col md={4}>
        <Card
          className="p-3 text-light shadow-sm"
          style={{ ...cardStyle, backgroundColor: "#45B6FE" }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Total Earnings</h3>
            <RiMoneyDollarCircleLine size={40} />
          </div>
          <h5>{analytics.totalEarning}$</h5>
        </Card>
      </Col>
      <Col md={4}>
        <Link to={"/admin/users"}>
          <Card
            className="p-3 text-light shadow-sm"
            style={{ ...cardStyle, backgroundColor: "#F9A01C" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="mb-0">Total Users</h3>
              <PiUsersDuotone size={40} />
            </div>
            <h5>{analytics.totalUsers} users</h5>
          </Card>
        </Link>
      </Col>
      <Col md={4}>
        <Link to={"/admin/courses"}>
          <Card
            className="p-3 text-light shadow-sm"
            style={{ ...cardStyle, backgroundColor: "#687EF0" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="mb-0">Total Courses</h3>
              <MdOutlineSlowMotionVideo size={40} />
            </div>
            <h5>{analytics.totalCourses} courses</h5>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default TopCards;
