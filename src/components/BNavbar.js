import React from 'react';
import { Container, Nav, Navbar} from "react-bootstrap";

export default function ANavbar( )
{
    return (
        <>
        <Navbar collapseOnSelect expand="md" bg = "dark" variant="dark" className="mb-3 py-3" style={{backgroundColor: "black"}}>
            <Container>
                <Navbar.Brand className="navbar-logo-container">
                    <Nav.Link className='navTitle' href="/">Home</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}