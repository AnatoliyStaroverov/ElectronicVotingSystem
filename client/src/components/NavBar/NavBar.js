
import React from 'react';
import { Navbar,Container, Button } from 'react-bootstrap';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

export default function  NavBar(){
    return (

    <Navbar expand="lg" variant="light" bg="light">
    <Container>
        <Navbar.Brand href="#"><b>Vote Secure</b></Navbar.Brand>
        
      
        <Navbar.Collapse className="justify-content-end">
            <RegisterForm />
        </Navbar.Collapse>
    
        <LoginForm />
       
    
    </Container>
    </Navbar>
    );
}