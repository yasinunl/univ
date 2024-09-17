import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import GeneralLogin from './GeneralLogin';
import StudentLogin from './StudentLogin';
import PersonalLogin from './PersonalLogin';

const HomePage = () => {
  const [ loginPage, setLoginPage ] = useState(0)
  return (
    <Container className="text-center mt-5">
      {/* Card Section */}
      <Card style={{ width: '300px', margin: '0 auto' }}>
        <Card.Header className="bg-primary text-white">
          Önlisans / Lisans / Enstitü
        </Card.Header>
        {loginPage === 0 ? <GeneralLogin setLoginPage={setLoginPage} /> :
         loginPage === 1 ? <StudentLogin setLoginPage={setLoginPage} /> :
         <PersonalLogin setLoginPage={setLoginPage} />}
      </Card>
    </Container>
  );
};

export default HomePage;
