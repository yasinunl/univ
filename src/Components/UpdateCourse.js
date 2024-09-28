import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function UpdateCourse({course, index , onUpdate, onDelete }) {
    const [linkInput, setLinkInput] = useState(course.link);
    const [nameInput, setNameInput] = useState(course.name)
  return (
    <tr key={index}>
            <td><Form.Control
            type="text"
            placeholder="Enter a Course Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          /></td>
            <td><Form.Control
            type="text"
            placeholder="Enter a Link"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          /></td>
            <td>
              <Button variant="warning" onClick={() => onUpdate({id: course.id, name: nameInput, link: linkInput})} className="me-2">Update</Button>
              <Button variant="danger" onClick={() => onDelete(course.id)}>Delete</Button>
            </td>
          </tr>
  )
}
