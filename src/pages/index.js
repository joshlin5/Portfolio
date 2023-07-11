// Step 1: Import React
import * as React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import BNavbar from '../components/BNavbar';
import AFooter from "../components/AFooter";
import '../style/style.scss';

// Step 2: Define your component
export default function personalWebsite() {
  return (
    <body className="home d-flex flex-column text-center min-vh-100">
      <BNavbar/>
      <Container expand="md" className="my-auto">
        <Row className="justify-content-md-center mt-n2 my-3">
          <Col md="auto" className='text-dark'>
            <h1 className='title'>Joshua Lin's Portfolio</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-n2 ml-3">
          <Col md="auto" className='text-dark'>
            <h1 className='jobTitle'>Software Engineer</h1>
          </Col>
        </Row>
      </Container>
      <AFooter/>
    </body>
  );
}