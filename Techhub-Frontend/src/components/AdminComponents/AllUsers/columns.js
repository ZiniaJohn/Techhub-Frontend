
import { format } from "date-fns";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const COLUMNS = [
  {
    Header: "User Id",
    accessor: "userId",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Member Since",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "",
    accessor: "_id",
    Cell: ({ value }) => {
      return (
        <Link to={`/admin/users/${value}`}>
          <Button
            variant="light"
            size="sm"
            style={{
              backgroundColor: "#A45EE9",
              color: "white",
              borderRadius: "8px",
              minWidth: "70px",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              fontWeight: "bold",
            }}
          >
            View
          </Button>
        </Link>
      );
    },
  },
];
