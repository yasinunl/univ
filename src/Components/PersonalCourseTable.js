import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import UpdateCourse from './UpdateCourse';

const CourseTable = ({ courses, onUpdate, onDelete }) => {
  const [deleted, setDeleted] = useState(true);
  const handleDelete = (e) => {
    onDelete(e);
    setDeleted(false);
  }
  return (
    deleted && <Table striped bordered hover>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Course Video Link</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses && courses.map((course, index) => (
          <UpdateCourse index={index} course={course} onUpdate={onUpdate} onDelete={handleDelete} />
        ))}
      </tbody>
    </Table>
  );
};

export default CourseTable;
