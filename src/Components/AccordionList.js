import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AcordionItem from './AcordionItem';

export default function AccordionList() {
    return (
        <Container>
            <Accordion defaultActiveKey={['-1']} alwaysOpen>
                <AcordionItem eventKey="0" header="1. Sınıf"/>
                <AcordionItem eventKey="1" header="2. Sınıf" />
            </Accordion>
        </Container>
    )
}
