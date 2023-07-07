// Step 1: Import React
import * as React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import BNavbar from '../components/BNavbar';
import AFooter from "../components/AFooter";
import '../style/style.scss';

// Step 2: Define your component
export default function aboutPage() {
  return (
    <body className="d-flex flex-column text-center min-vh-100">
      <BNavbar/>
      <h1 className='normalTitle text-dark'>About Me</h1>
      <Container className="">
        <Row xs={1} sm={2} className='text-left'>
          <Col className='text-dark'>
            <h3 className='aboutTitle'> Get To Know Me!</h3>
            <p className='aboutText'>
            I am a <strong>Software Engineer</strong> with experience in web development, mobile development, scripting, and databases. 
            Check out some of my work in the <a className="text-dark" href="/projects"><strong>projects</strong></a> section. </p>
            <p className='aboutText'>
            With a solid academic foundation and a genuine passion for learning through my Master's degree in Computer Science from NCSU, I strive to deliver exceptional code.
            To check out my resume, download it <a className="text-dark" href="../static/Resume28June23.pdf" download="JoshuaLinResume.pdf"><strong>here</strong></a>!</p>
            <p className='aboutText'>
            I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. 
            If you have a good opportunity that matches my skills and experience then don't hesitate to <a className="text-dark" href="/contact"><strong>contact</strong></a> me.</p>
          </Col>
          <Col>
            <h3 className='aboutSubTitle'>My Skills</h3>
            <Row>
                <Col className='skill'>Java</Col>
                <Col className='skill'>C++</Col>
                <Col className='skill'>JavaScript</Col>
                <Col className='skill'>Python</Col>
                <Col className='skill'>React</Col>
                <Col className='skill'>HTML</Col>
                <Col className='skill'>CSS</Col>
                <Col className='skill'>MySQL</Col>
                <Col className='skill'>SASS</Col>
                <Col className='skill'>GIT</Col>
                <Col className='skill'>Github</Col>
                <Col className='skill'>Bootstrap</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <AFooter/>
    </body>
  );
}