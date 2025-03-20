

import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
} from "react-table";
import { Table, Card, Button, Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const InstCoursesTable = ({ courses, onDelete }) => {
  const courseData = courses.map((course) => {
    return {
      _id: course._id,
      title: course.title,
      category: course.category,
      price: course.price,
      actions: "Actions",
    };
  });

  const columns = useMemo(
    () => [
      { Header: <strong>Title</strong>, accessor: "title" },
      { Header: <strong>Category</strong>, accessor: "category" },
      { Header: <strong>Price</strong>, accessor: "price" },
      {
        Header: <strong>Actions</strong>,
        accessor: "actions",
        Cell: ({ row }) => (
          <Dropdown>
          <Dropdown.Toggle
            variant="light"
            size="sm"
            id="inst-course-table-dropdown"
            style={{ border: "none", background: "transparent", boxShadow: "none" }}
          >
            <BsThreeDots size={20} style={{ color: "#333" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "10px" }}>
            <Dropdown.Item as={Link} to={`/instructorCourse/section/${row.original._id}`} style={{ padding: "8px 15px", fontSize: "14px", fontWeight: "500" }}>
              Add Section
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={`/instructorCourse/course-edit/${row.original._id}`} style={{ padding: "8px 15px", fontSize: "14px", fontWeight: "500" }}>
              Edit Course
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onDelete(row.original._id)} style={{ padding: "8px 15px", fontSize: "14px", fontWeight: "500", color: "red" }}>
              Delete Course
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        ),
      },
    ],
    [onDelete]
  );

  const data = useMemo(() => courseData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    page,
    headerGroups,
    prepareRow,
  } = tableInstance;

  return (
    <Card className="shadow-sm rounded-lg" style={{ maxWidth: '99%', margin: '0 auto' }}>
      <Table striped bordered hover responsive {...getTableProps()} style={{ fontSize: '14px', borderRadius: '10px', width: '100%' }}>
        <thead className="bg-light">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column)}>
                  {column.render("Header")}
                
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
};

export default InstCoursesTable;