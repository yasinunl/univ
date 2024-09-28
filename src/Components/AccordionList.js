import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AcordionItem from './AcordionItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginData } from '../Service/UserService';
import { getAllSection } from '../Service/SectionService';
import { AuthContext } from '../auth/auth';
import AcordionItemLecture from './AcordionItemLecture';

export default function AccordionList() {
    const location = useLocation()
    const navigate = useNavigate();
    const [section, setSection] = useState([])
    const { role, isLoggedIn } = useContext(AuthContext);
    useEffect(() => {
        if(!isLoggedIn){
            navigate("/");
        }
        const user = location.state.item && location.state.item;
        if (Object.keys(user)[0] === "user") {
            const fetchData = async () => {
                const token = await loginData(user.user);
                if (token == null) return;
                if (token.role === "admin") {
                    const getSections = async () => {
                        const sectionData = await getAllSection();
                        setSection(sectionData)
                    };
                    getSections();
                }
                else {
                    setSection(token.section.courses);
                }
            }
            fetchData();
        }
        else {
            if (user.token.role === "admin") {
                const getSections = async () => {
                    const sectionData = await getAllSection();
                    setSection(sectionData)
                };
                getSections();
            } else
                setSection(user.token.section.courses)
        }
    }, [isLoggedIn, navigate, location.state.item])
    return (
        <Container>
            <Accordion defaultActiveKey={['-1']} alwaysOpen>
                {role === "admin" ?
                    section && section.map((element=> <AcordionItem eventKey={element.id} header={element.number + ". Sınıf"} courses={element.courses} />))
                     :
                    section && section.map((element) =>
                        <AcordionItemLecture header={element.name} eventKey={element.id} link={element.link} />)}
            </Accordion>
        </Container>
    )
}
