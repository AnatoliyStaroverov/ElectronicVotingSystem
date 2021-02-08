import React, { useState } from 'react';
import { Form,Col,Button,InputGroup,Modal } from 'react-bootstrap';



export default function RegisterForm() {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (

    <div>
      <Button className="m-2" variant="primary" onClick={handleShow}>
        Login
      </Button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

     <Modal.Header closeButton>
        <Modal.Title> Login Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login 
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </div>

    );
  }


