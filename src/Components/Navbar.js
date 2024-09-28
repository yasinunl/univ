import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../auth/auth';
import { useNavigate } from 'react-router-dom';

export default function NavbarTheme() {
    const { logout, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">University Of University</Navbar.Brand>
                    {isLoggedIn && <Navbar.Brand href='#' onClick={() => { logout(); navigate("/") }}>Çıkış Yap</Navbar.Brand>}
                </Container>
            </Navbar>
        </>
    )
}
