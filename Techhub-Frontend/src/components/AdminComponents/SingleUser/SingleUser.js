
import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { PiUserRectangle } from "react-icons/pi";
import { useSelector } from "react-redux";
import Rating from "../../../components/SharedComponents/Rating";

const SingleUser = () => {
  const { user } = useSelector((state) => state.admin);

  return (
    <>
      <Card className="shadow-sm rounded-lg p-3 mb-3" style={{ backgroundColor: "#f0f4ff" }}>
        <div className="d-flex align-items-center mb-2">
          <div className="me-2" style={{ fontSize: '1.5rem', color: '#687EF0' }}>
            <PiUserRectangle size={50} />
          </div>
          <div>
            <h3 className="mb-0" style={{ color: '#687EF0', fontSize: '1.5rem' }}>USER</h3>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={user.avatar.url}
            alt="User Avatar"
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              border: "3px solid #687EF0",
            }}
          />
          <div className="ms-3">
            <h4 className="mb-1" style={{ fontSize: '1.25rem' }}>{user.name}</h4>
            <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>USER ID: {user._id}</p>
          </div>
        </div>
      </Card>

      <Card className="shadow-sm rounded-lg p-3">
        <ListGroup>
          <ListGroup.Item className="p-2">
            <h5 className="mb-0" style={{ color: '#687EF0', fontSize: '1.2rem' }}>Personal Information</h5>
          </ListGroup.Item>
          <ListGroup.Item className="p-2">
            <div className="d-flex mb-2">
              <MdOutlineAlternateEmail size={25} className="me-2" />
              <div>
                <h6 className="mb-0" style={{ fontSize: '1rem' }}>Email Id</h6>
                <p className="mb-0" style={{ fontSize: '0.85rem' }}>{user.email}</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <BsCalendar3 size={25} className="me-2" />
              <div>
                <h6 className="mb-0" style={{ fontSize: '1rem' }}>Member Since</h6>
                <p className="mb-0" style={{ fontSize: '0.85rem' }}>{user.createdAt.substring(0, 10)}</p>
              </div>
            </div>
            <div className="d-flex">
              <PiUserRectangle size={25} className="me-2" />
              <div>
                <h6 className="mb-0" style={{ fontSize: '1rem' }}>Role</h6>
                <p className="mb-0" style={{ fontSize: '0.85rem' }}>{user.role}</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default SingleUser;
