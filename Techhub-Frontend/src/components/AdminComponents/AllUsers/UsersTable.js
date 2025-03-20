
import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import { Table, Card, Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const UsersTable = () => {
  const { users } = useSelector((state) => state.admin);
  const userData = users.map((user) => {
    return {
      userId: user._id,
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      view: "View",
    };
  });

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => userData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    page,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <div className="mt-0">
      <h3
        className="text-center"
        style={{
          color: "#687EF0",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "10px",
          backgroundColor: "#f0f4ff",
          borderRadius: "10px",
          marginBottom: "20px",
          marginTop: "-25px",
        }}
      >
        ALL USERS
      </h3>

      <Card className="shadow-sm rounded-lg">
        <div className="d-flex justify-content-end p-3">
          <InputGroup>
            <InputGroup.Text>
              🔍
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search "
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </InputGroup>
        </div>

        <Table striped bordered hover responsive {...getTableProps()} style={{fontSize: '12px'}}>
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
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                      {cell.column.id === "view" && (
                        <Button
                        
                        >
                       
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>

      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div>
          <Button
            variant="light"
            size="sm"
            className="me-2"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={{
              backgroundColor: "#A45EE9",
              borderColor: "#A45EE9",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Prev
          </Button>
          <Button
            variant="light"
            size="sm"
            className="ms-2"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            style={{
              backgroundColor: "#A45EE9",
              borderColor: "#A45EE9",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Next
          </Button>
        </div>
        <span className="mt-2">
          Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
        </span>
      </div>
    </div>
  );
};

export default UsersTable;



