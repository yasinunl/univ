import React, { useContext, useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/auth';
import { loginDataAdmin } from '../Service/UserService';
import { getAllSection } from '../Service/SectionService';

export default function PersonalLogin({setLoginPage}) {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [pass, setPass] = useState("")
    const handleUserLogin = (e) => {
        if (pass === "" || pass === " ") {
            alert("E-mail ve şifre alanları boş olamaz");
            return;
        }
        const fetchData = async () => {
            const token = await loginDataAdmin(pass);
            if (token == null) return;
            if(token !== "failed"){
                const sections = await getAllSection();
                navigate("/personal/course/list", {state : {item : {sections}}});
            }else{
                alert("E-mail veya şifre hatalı. Tekrar deneyin");
                setPass("");
            }
            login(token);
            
        }
        fetchData();
        
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
