import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AcordionItemLecture from './AcordionItemLecture';

export default function AcordionItem({eventKey, header}) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                <AcordionItemLecture header={"Ders Adı"} eventKey={eventKey + "A0"} />
                <AcordionItemLecture header={"Ders Adı"} eventKey={eventKey + "A1"} />
                <AcordionItemLecture header={"Ders Adı"} eventKey={eventKey + "A2"} />
                <AcordionItemLecture header={"Ders Adı"} eventKey={eventKey + "A3"} />
            </Accordion.Body>
        </Accordion.Item>
    )
}
