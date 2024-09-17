import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
//import YouTubePlayer from './YouTubePlayer';
export default function AcordionItemLecture({eventKey, header}) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                {/* <YouTubePlayer url={"https://www.youtube.com/watch?v=tDO5LpPMmdU"} /> */}
            </Accordion.Body>
        </Accordion.Item>
    )
}
