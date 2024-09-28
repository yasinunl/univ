import React, {  useContext, useEffect, useState } from 'react';
import { Form, Button, Container, Dropdown, DropdownButton, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
import { addData } from '../Service/CourseService';
import { AuthContext } from '../auth/auth';

const PersonalPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [linkInput, setLinkInput] = useState('');
  

  // Choose a number from 1 to 8
  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };
  // Add Button Action
  const handleAddClick = async() => {
    if (selectedNumber && nameInput && linkInput) {
      const fetchAddData = async(item)=>{
        return addData(item);
      }
      const message = await fetchAddData([nameInput, linkInput, selectedNumber]);
      if(message === "successful") alert('Kurs başarıyla eklendi');
      navigate(-1);
    } else {
      alert('Please fill in all fields.');
    }
  };
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/");
  }
  },[])
  return (
    <Container className="text-center mt-5">
      {/* Card Section */}
      <Card style={{ width: '50%', margin: '0 auto' }}>
        <Card.Header className="bg-secondary text-white">
          Kurs Ekle
        </Card.Header>
        <ListGroup variant="flush" >
          <ListGroup.Item >
          <DropdownButton id="dropdown-basic-button" title={`Choose a Number (${selectedNumber || 'None'})`}>
            {[...Array(4).keys()].map((number) => (
              <Dropdown.Item key={number + 1} onClick={() => handleNumberSelect(number + 1)} style={{width:"100%"}}>
                {number + 1}
              </Dropdown.Item>
            ))}
          </DropdownButton>
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
