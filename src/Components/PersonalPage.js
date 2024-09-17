import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Dropdown, DropdownButton, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonalPage = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [linkInput, setLinkInput] = useState('');
  const [classList, setClassList] = useState(['Class 1', 'Class 2', 'Class 3']);
  const [nameList, setNameList] = useState({
    'Class 1': ['Name 1', 'Name 2'],
    'Class 2': ['Name 3', 'Name 4'],
    'Class 3': ['Name 5', 'Name 6'],
  });
  
  // Adding a new class to the dropdown
  const addNewClass = () => {
    const newClassName = prompt('Enter a new class name:');
    if (newClassName) {
      setClassList([...classList, newClassName]);
      setNameList({ ...nameList, [newClassName]: [] });
    }
  };

  // Choose a number from 1 to 8
  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  // Select a class
  const handleClassSelect = (className) => {
    setSelectedClass(className);
    setSelectedName(''); // Reset the selected name when a new class is chosen
  };

  // Select a name from the dynamically generated list
  const handleNameSelect = (name) => {
    setSelectedName(name);
  };

  // Add Button Action
  const handleAddClick = () => {
    if (selectedNumber && selectedClass && selectedName && nameInput && linkInput) {
      alert('Information added successfully!');
      // Handle the addition logic here
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Container className="text-center mt-5">
      {/* Card Section */}
      <Card style={{ width: '50%', margin: '0 auto' }}>
        <Card.Header className="bg-secondary text-white">
          Video Ekle
        </Card.Header>
        <ListGroup variant="flush" >
          <ListGroup.Item >
          <DropdownButton id="dropdown-basic-button" title={`Choose a Number (${selectedNumber || 'None'})`}>
            {[...Array(8).keys()].map((number) => (
              <Dropdown.Item key={number + 1} onClick={() => handleNumberSelect(number + 1)} style={{width:"100%"}}>
                {number + 1}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          </ListGroup.Item>
          <ListGroup.Item>
          <Col>
          <DropdownButton id="dropdown-class-button" title={`Choose a Class (${selectedClass || 'None'})`}>
            {classList.map((className, index) => (
              <Dropdown.Item key={index} onClick={() => handleClassSelect(className)}>
                {className}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>

        <Col>
          <DropdownButton
            id="dropdown-name-button"
            title={`Choose a Name (${selectedName || 'None'})`}
            disabled={!selectedClass}
          >
            <Dropdown.Item onClick={addNewClass}>
              ➕ Add New Class
            </Dropdown.Item>
            {selectedClass && nameList[selectedClass]?.map((name, index) => (
              <Dropdown.Item key={index} onClick={() => handleNameSelect(name)}>
                {name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
          </ListGroup.Item>
          <ListGroup.Item>
          <Form.Control
            type="text"
            placeholder="Enter a Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          </ListGroup.Item>
          <ListGroup.Item>
          <Form.Control
            type="text"
            placeholder="Enter a Link"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />
          </ListGroup.Item>
          <ListGroup.Item>
          <Button variant="primary" onClick={handleAddClick}>
            Add
          </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default PersonalPage;
