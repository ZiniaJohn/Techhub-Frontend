import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../../components/SharedComponents/Rating";

export const COLUMNS = [
  {
    Header: "Course Id",
    accessor: "courseId",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: ({ value }) => {
      return `$${value}`;
    },
  },
  {
    Header: "Rating",
    accessor: "rating",
    Cell: ({ value }) => {
      return <Rating value={value} />;
    },
  },
 /*
  {
    Header: "",
    accessor: "_id",
    Cell: ({ value }) => {
      console.log(value);
      
      return (
        
        <Link to={`/admin/courses/${value}`}>
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
  */
];
