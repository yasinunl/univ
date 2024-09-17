import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function PersonalLogin({setLoginPage}) {
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
        e.preventDefault();
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
            navigate("/personal/adding", {state : {item : {mail,pass}}});
        }else{
            alert("E-mail veya şifre hatalı. Tekrar deneyin");
            setMail("");
            setPass("");
        }
    }
    return (<>
        <Form onSubmit={handleUserLogin}>
            <Form.Group role='form'>
            <ListGroup>
                <ListGroup.Item>
                    <Form.Text className="h3">
                        Akademisyen Girişi
                    </Form.Text>
                </ListGroup.Item>
            </ListGroup>
            <Form.Group>
                <Form.Control type="email" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)}
                onKeyPress = {event => {
                    if (event.key === "Enter") {
                      handleUserLogin(event);
                    }
                  }} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} style={{ marginTop: "15px" }}
                onKeyPress = {event => {
                    if (event.key === "Enter") {
                      handleUserLogin(event);
                    }
                  }} />
            </Form.Group>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Button variant="button" style={{ width: "100%", height: "100%" }} onClick={handleUserLogin}>Giriş Yap</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="button" style={{ width: "100%", height: "100%" }} onClick={()=>{setLoginPage(0)}}>{'<- '}Geri Dön</Button>
                </ListGroup.Item>
            </ListGroup>
            </Form.Group>
        </Form>
    </>
    )
}
