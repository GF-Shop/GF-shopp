import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  

import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
  return (
<Navbar bg="success" expand="md">  
    <Container>  
      <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="/home">Home<a href="#">
               
               </a>  </Nav.Link>
           
          <Nav.Link href="/add">Add product</Nav.Link>
         
          <Nav.Link href="/help">help</Nav.Link> 
         
           
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  

  )
}

export default NavBar