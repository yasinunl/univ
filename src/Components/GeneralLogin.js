import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

export default function GeneralLogin({setLoginPage}) {
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
