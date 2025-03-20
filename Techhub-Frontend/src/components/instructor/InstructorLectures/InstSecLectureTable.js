import React from "react";
import { Button, Table } from "react-bootstrap";

const InstSecLectureTable = ({ lectures, editLecture, deleteLecture }) => {
  return (
    <>
      {lectures.length === 0 ? (
        <h4>No Lectures for this section.</h4>
      ) : (
        <Table responsive striped hover className="shadow-sm">
        <thead className="bg-light">
          <tr>
            <th style={{ fontSize: "16px", fontWeight: "600", padding: "12px" }}>Lecture Title</th>
            <th style={{ width: "200px" }}></th>
          </tr>
        </thead>
        <tbody>
          {lectures.map((lecture) => (
            <tr key={lecture._id} className="align-middle">
              <td style={{ fontSize: "15px", fontWeight: "500", padding: "12px" }}>
                {lecture.title}
              </td>
              <td className="text-end">
                <Button
                  variant="success"
                  size="sm"
                  className="rounded px-3 me-2 shadow-sm"
                  onClick={() => editLecture(lecture._id, lecture.title)}
                >
                  EDIT
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="rounded px-3 shadow-sm"
                  onClick={() => deleteLecture(lecture._id)}
                >
                  DELETE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      )}
    </>
  );
};

export default InstSecLectureTable;
