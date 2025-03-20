import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Table, Card, Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSection } from "../../../redux/reducers/courseSections/courseSectionsSlice";

const InstCourseSectionTable = ({ sections, courseId, editSection }) => {
  const dispatch = useDispatch();

  const sectionData = sections.map((section) => {
    return {
      _id: section._id,
      title: section.title,
      actions: "Actions",
    };
  });

  const columns = useMemo(
    () => [
      { Header: <strong>Section Titles</strong>, accessor: "title" },
      {
        Header: <strong>Actions</strong>,
        accessor: "actions",
        Cell: ({ row }) => (
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              size="sm"
              id="inst-course-section-dropdown"
              bsPrefix="custom-dropdown-toggle"
              style={{ border: "none", background: "transparent", boxShadow: "none" }}
            >
              <BsThreeDots size={20} style={{ color: "#333" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "10px",
              }}
            >
              <Dropdown.Item
                as={Link}
                to={`/instructorCourse/lectures/${courseId}/${row.original._id}`}
                style={{ padding: "8px 15px", fontSize: "14px", fontWeight: "500" }}
              >
                Add Lecture
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => editSection(row.original._id, row.original.title)}
                style={{ padding: "8px 15px", fontSize: "14px", fontWeight: "500" }}
              >
                Edit Section
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  dispatch(
                    deleteSection({ courseId: courseId, sectionId: row.original._id })
                  )
                }
                style={{
                  padding: "8px 15px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "red",
                }}
              >
                Delete Section
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
    [dispatch, courseId, editSection]
  );

  const data = useMemo(() => sectionData, [sections]);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div style={{ maxWidth: "99%", margin: "0 auto" }}>
      {/* Card moved outside the table */}
      <Card className="shadow-sm rounded-lg mb-3">
        <h3
          className="text-center"
          style={{
            color: "#ffffff",
            fontSize: "33px",
            fontWeight: "bold",
            padding: "10px",
            background: "linear-gradient(135deg, #a87fe7, #66a3ff)",
            borderRadius: "10px",
            marginBottom: "0px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            letterSpacing: "1px",
          }}
        >
          COURSE SECTION
        </h3>
      </Card>

  
      {sections.length === 0 ? (
        <h4 className="text-center">No Sections for this course.</h4>
      ) : (
        <Table striped bordered hover responsive {...getTableProps()} style={{ fontSize: "14px" }}>
          <thead className="bg-light">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default InstCourseSectionTable;
