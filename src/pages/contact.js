// Step 1: Import React
import * as React from 'react'
import { Container, Form, Button} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import BNavbar from '../components/BNavbar';
import AFooter from "../components/AFooter";
import '../style/style.scss';

// Step 2: Define your component
export default function Contact() {
  const [formData, updateFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const sendFeedback = (serviceID, templateId, variables, accessToken) => {
    emailjs.send(
        serviceID, templateId,
        variables, accessToken
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an Error.', err))
}

const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };

const handleSubmit = (e) => {
    e.preventDefault()
    if(formData.name === "") {
      alert(`Please enter your name.`);
    } else if (formData.email === "") {
      alert(`Please enter your email.`);
    }
    else if (formData.message === "") {
      alert(`Please enter your message.`);
    }
    else {
      alert(`Thank you for your message. Your query has been forwarded.`);
      const templateId = 'contact_form';
      const serviceID = "service_g2ptdd3";
      const accessToken = 'Nq3tc1CUICYhII6ew';
      sendFeedback(serviceID, templateId, 
        { name_input: formData.name, email_input: formData.email, message_input: formData.message}, accessToken)

      console.log(formData);

      updateFormData({
        name: "",
        email: "",
        message: ""
    })
    }
  };

  return (
    <body className="d-flex flex-column text-center min-vh-100">
      <BNavbar/>
      <Container className='w-50 h-100 bg-light'>
        <Form>
          <Form.Group className="mb-3 mt-4 mx-3">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange= {handleChange} value={formData?.name} name="name" type="name" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange= {handleChange} value={formData?.email} name="email" type="email" placeholder="Enter Your Email" />
          </Form.Group>
          <Form.Group className="mb-5 mx-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control onChange= {handleChange} value={formData?.message} name="message" type="message" as="textarea" placeholder="Enter Your Message" rows={3} />
          </Form.Group>
          <Button className="mb-3" onClick={handleSubmit} variant="primary" type="submit">Submit form</Button>
        </Form>
        </Container>
      <AFooter/>
    </body>
  );
}