import React, { useContext, useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { loginData } from '../Service/UserService';
import { AuthContext } from '../auth/auth';

export default function StudentLogin({ setLoginPage }) {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [pass, setPass] = useState("")
    const handleUserLogin = (e) => {
        if (pass === "" || pass === " ") {
            alert("E-mail ve şifre alanları boş olamaz");
            return;
        }
        const fetchData = async () => {
            const token = await loginData(pass);
            if (token == null) return;
            
            if(token !== "failed"){
login(token);
                navigate("/student/lect", {state : {item : {token}}});
            }else{
                alert("E-mail veya şifre hatalı. Tekrar deneyin");
                setPass("");
            }
        }
        fetchData();
        
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
                <Form.Control type="password" placeholder="Password" style={{ marginTop: "15px" }} value={pass} onChange={(e) => setPass(e.target.value)}
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            handleUserLogin(event);
                        }
                    }} />
            </Form.Group>
            <ListGroup variant='flush' style={{ marginTop: "10px" }}>
                <ListGroup.Item>
                    <Button variant="button" style={{ width: "100%", height: "100%" }} onClick={handleUserLogin}>Giriş Yap</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="button" style={{ width: "100%", height: "100%" }} onClick={() => { setLoginPage(0) }}>{'<- '}Geri Dön</Button>
                </ListGroup.Item>
            </ListGroup>
        </Form>
    </>
    )
}
