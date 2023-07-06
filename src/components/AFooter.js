import React from "react";
import { Container, Stack } from "react-bootstrap";

export default function AFooter() {
    const year = new Date().getFullYear();

    return(
        <Container fluid className="bg-dark text-light mt-auto" style={{backgroundColor: "black"}}>
            <Stack direction="vertical" className="align-items-center pb-4 pt-4" gap={4}>
                <Stack direction="horizontal" className="justify-content-center" gap={2}>
                    <a className="link text-light-link text-decoration-none" href="https://github.com/joshlin5" target="_blank" rel="noopener noreferrer">Github</a>
                    <div className="vr"/>
                    <a className="link text-light-link text-decoration-none" href="https://www.linkedin.com/in/joshua-lin36/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Stack>
                <div>Copyright © Joshua Lin {year}</div>
            </Stack>
        </Container>
    );
}