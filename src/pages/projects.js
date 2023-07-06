// Step 1: Import React
import * as React from 'react'
import { Container, Button, Card, Row} from 'react-bootstrap';
import BNavbar from '../components/BNavbar';
import AFooter from "../components/AFooter";
import '../style/style.scss';

// Step 2: Define your component
export default function projectsPage() {
  return (
    <body className="d-flex flex-column text-center min-vh-100">
      <BNavbar/>
      <h1 className='normaltitle text-dark'>Projects</h1>
      <p className='projectsSubTitle text-dark'>Here you will find some of my personal and major academic projects</p>
      <Container className="">
        <Row xs={1} md={2} className="justify-content-md-center g-4">

            <Card className="m-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Portfolio Website</Card.Title>
                <br></br>
                <Card.Text>
                 <p> Personal portfolio website I built from scratch. </p>
                  <p> This project involves JavaScript, React, Bootstrap, HTML, and CSS. </p>
                  You are currently viewing this project!
                </Card.Text>
                <Button href="/projects" target="_blank" rel="noopener noreferrer" variant="primary">Github</Button>
              </Card.Body>
            </Card>

            <Card className="m-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Automated Pipeline Runner</Card.Title>
                <Card.Text>
                  <p> An automated pipeline runner built from scratch. </p>
                  <p> The main components of this pipeline was building, testing, and deploying web apps locally. </p>
                  <p> This project was completed at NC State University and involved JavaScript, YAML, MicroVM, Shell Commands, and more! </p>
                </Card.Text>
                <Button href="https://github.com/joshlin5/App-Pipeline" target="_blank" rel="noopener noreferrer" variant="primary">Github</Button>
              </Card.Body>
            </Card>

            <Card className="m-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Automated Jupyter Notebook Deployment</Card.Title>
                <Card.Text>
                 <p> Automated local deployment of a specific Juypter Notebook using scripts.</p>
                 <p> Built environment in container using Docker </p>
                 <p> Ran Notebook locally in VM using built environment.</p>
                 <p> This was a project part of my coursework while at NC State Unviersity.</p>
                </Card.Text>
                <Button href="https://github.com/joshlin5/Automated-Jupyter-Notebook-Deployment" target="_blank" rel="noopener noreferrer" variant="primary">Github</Button>
              </Card.Body>
            </Card>

        <Card className="m-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Truck Driver Rewards Android App</Card.Title>
                <Card.Text>
                  <p> Mobile app that allows truck drivers to redeem points in store awarded by their companies. </p>
                  <p> This project was my senior capstone project at Clemson University, done over the course of 3 months in a team of 2 using Android Studio.</p>
                  <p> Some elements of this project include, login, registration, forms, API calls, and displaying lists of items for the store.</p>
                </Card.Text>
                <Button href="https://github.com/joshlin5/Driver_1" target="_blank" rel="noopener noreferrer" variant="primary">Github</Button>
              </Card.Body>
            </Card>

            <Card className="m-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Pizza Resturant Database</Card.Title>
                <Card.Text>
                  <p> A SQL database that stored information about pizzas, pricing, toppings, orders, customer data, etc... </p>
                  <p> This course project was completed in a month with a team of 2 using MySQL and Java.</p>
                  <p> Some elements of this project creating, populating, viewing, and dropping tables in SQl and Java.</p>
                </Card.Text>
                <Button href="https://github.com/dndsmith/cpsc4620" target="_blank" rel="noopener noreferrer" variant="primary">Github</Button>
              </Card.Body>
            </Card>

        </Row>
      </Container>
      <AFooter/>
    </body>
  );
}