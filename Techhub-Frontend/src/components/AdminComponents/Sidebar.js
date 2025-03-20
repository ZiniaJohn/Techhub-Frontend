
import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdOutlineAnalytics } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { PiUsersDuotone } from "react-icons/pi";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa"; // Icon for Requests
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SmallLoader from "../SharedComponents/SmallLoader";
import { reset } from "../../redux/reducers/user/userSlice";
import { logout } from "../../redux/reducers/auth/authSlice";
import logo from "../../Images/logo.png";

const Sidebar = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <Card
      className="text-light py-3"
      style={{
        height: "100%",
        backgroundColor: "#A45EE9",
    
        borderRadius: "10px",
        boxShadow: "6px 0 15px rgba(75, 75, 75, 0.3)",
      }}
    >
      <NavLink to="/admin/analytics">
        <Card.Header
          className="text-center pb-3 text-light border-0"
          style={{ backgroundColor: "transparent" }}
        >
          <h4>
            <img
                            src={logo}
                            alt="TechHub Logo"
                            style={{ width: "30%", height: "3y0%" }}
                          /> Techhub
          </h4>
        </Card.Header>
      </NavLink>
      <Card.Body className="text-light">
        <div className="mb-2">
          <NavLink
            to="/admin/analytics"
            className={({ isActive }) =>
              isActive
                ? "d-flex text-light nav-link bg-white p-3 rounded align-items-center justify-content-between text-dark"
                : "d-flex nav-link p-3 rounded align-items-center justify-content-between text-light opacity-75"
            }
          >
            <MdOutlineAnalytics size={30} />
            <h6 className="m-0">Analytics</h6>
          </NavLink>
        </div>

        <div className="mb-2">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "d-flex text-light nav-link bg-white p-3 rounded align-items-center justify-content-between text-dark"
                : "d-flex nav-link p-3 rounded align-items-center justify-content-between text-light opacity-75"
            }
          >
            <PiUsersDuotone size={30} />
            <h6 className="m-0">Users</h6>
          </NavLink>
        </div>

        <div className="mb-2">
          <NavLink
            to="/admin/courses"
            className={({ isActive }) =>
              isActive
                ? "d-flex text-light nav-link bg-white p-3 rounded align-items-center justify-content-between text-dark"
                : "d-flex nav-link p-3 rounded align-items-center justify-content-between text-light opacity-75"
            }
          >
            <MdSlowMotionVideo size={30} />
            <h6 className="m-0">Courses</h6>
          </NavLink>
        </div>

        <div className="mb-2">
          <NavLink
            to="/admin/requests"
            className={({ isActive }) =>
              isActive
                ? "d-flex text-light nav-link bg-white p-3 rounded align-items-center justify-content-between text-dark"
                : "d-flex nav-link p-3 rounded align-items-center justify-content-between text-light opacity-75"
            }
          >
            <FaClipboardList size={30} />
            <h6 className="m-0">Requests</h6>
          </NavLink>
        </div>
      </Card.Body>
      <Card.Footer className="border-0" style={{ backgroundColor: "transparent" }}>
        <div className="d-flex p-3 justify-content-between align-items-center">
          {isLoading || !user ? (
            <SmallLoader />
          ) : (
            <div className="d-flex align-items-center">
              <img
                src={user.avatar.url}
                alt="User Avatar"
                className="img-fluid rounded-circle mb-2"
                style={{ width: 40, height: 40 }}
              />
              <span className="ms-2">{user.name}</span>
            </div>
          )}
        </div>
        <div className="text-end">
          <Button
            onClick={handleLogout}
            variant="light"
            size="sm"
            className="text-dark"
            style={{ borderRadius: "8px" }}
          >
            Logout
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Sidebar;
