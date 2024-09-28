import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AcordionItemLecture from './AcordionItemLecture';

export default function AcordionItem({ eventKey, header, courses }) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                {courses && courses.map((element => <AcordionItemLecture header={element.name} eventKey={element.id + "A0"} link={element.link} />))}
            </Accordion.Body>
        </Accordion.Item>
    )
}
