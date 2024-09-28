import React, { useContext, useEffect } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/auth';

export default function GeneralLogin({setLoginPage}) {
  const { isLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn){
      navigate("/student/lect", {state : {item : {user}}});
    }
  },[isLoggedIn, navigate])
  return (
    <ListGroup variant="flush">
          <ListGroup.Item>
            <Button variant="button" onClick={()=>setLoginPage(1)}>Öğrenci Girişi</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="button" onClick={()=>setLoginPage(2)}>Akademisyen Girişi</Button>
          </ListGroup.Item>
        </ListGroup>
  )
}
