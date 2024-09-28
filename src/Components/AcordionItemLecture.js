import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import YouTubePlayer from './YouTubePlayer';
export default function AcordionItemLecture({ eventKey, header, link }) {
    const [opened, setOpened] = useState(false)
    return (
        <Accordion.Item eventKey={eventKey} onClick={()=>{
                setOpened(true)
        }}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                {opened && <YouTubePlayer url={link} />}
            </Accordion.Body>
        </Accordion.Item>
    )
}
