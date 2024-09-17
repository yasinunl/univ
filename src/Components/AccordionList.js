import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AcordionItem from './AcordionItem';
import { useLocation } from 'react-router-dom';

export default function AccordionList({item}) {
    const location = useLocation();
    useEffect(()=>{
        console.log(location.state)
    },[])
    return (
        <Container>
            <Accordion defaultActiveKey={['-1']} alwaysOpen>
                <AcordionItem eventKey="0" header="1. Sınıf"/>
                <AcordionItem eventKey="1" header="2. Sınıf" />
            </Accordion>
        </Container>
    )
}
