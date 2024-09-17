import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function StudentLogin({setLoginPage}) {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({});
    const [user] = useState([
        {"mail": "ysn@gmail.com",
            "pass": "1234",
        }
    ]);
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const handleUserLogin = (e) => {
        console.log(loginUser)
        let loggedIn = false;
        if(mail === "" || mail === " " || pass === "" || pass === " "){
            alert("E-mail ve şifre alanları boş olamaz");
            return;
        }
        user.forEach((item)=>{
            if(item.mail === mail && item.pass === pass){
                loggedIn = true;
                setLoginUser(item);
            }
        });
        if(loggedIn){
            navigate("/student/lect", {state : {item : {mail,pass}}});
        }else{
            alert("E-mail veya şifre hatalı. Tekrar deneyin");
            setMail("");
            setPass("");
        }
    }
    return (<>
        <Form onSubmit={handleUserLogin}>
            <ListGroup>
                <ListGroup.Item>
                    <Form.Text className="h3">
                        Öğrenci Girişi
                    </Form.Text>
                </ListGroup.Item>
            </ListGroup>
            <Form.Group>
                <Form.Control type="email" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)}
                onKeyPress = {event => {
                    if (event.key === "Enter") {
                      handleUserLogin(event);
                    }
                  }}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="password" placeholder="Password" style={{ marginTop: "15px" }} value={pass} onChange={(e) => setPass(e.target.value)}
                onKeyPress = {event => {
                    if (event.key === "Enter") {
                      handleUserLogin(event);
                    }
                  }}/>
            </Form.Group>
            <ListGroup variant='flush' style={{ marginTop: "10px" }}>
                <ListGroup.Item>
                    <Button variant="button" style={{ width: "100%", height: "100%" }} onClick={handleUserLogin}>Giriş Yap</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="button" style={{ width: "100%", height: "100%" }} onClick={()=>{setLoginPage(0)}}>{'<- '}Geri Dön</Button>
                </ListGroup.Item>
            </ListGroup>
        </Form>
    </>
    )
}
